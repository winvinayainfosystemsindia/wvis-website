from datetime import date
from typing import List, Optional
from fastapi import HTTPException, UploadFile, status
from slugify import slugify
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.marketing_pitch import MarketingPitch
from app.repositories.marketing_pitch_repository import MarketingPitchRepository
from app.utils.file_storage import save_upload, delete_upload

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
PDF_EXTENSIONS = {".pdf"}

class MarketingPitchService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.repository = MarketingPitchRepository(db)

    async def get_published(self, *, skip: int = 0, limit: int = 20) -> List[MarketingPitch]:
        return await self.repository.get_published(skip=skip, limit=limit)

    async def get_all_admin(self, *, skip: int = 0, limit: int = 100) -> List[MarketingPitch]:
        return await self.repository.get_all_admin(skip=skip, limit=limit)

    async def get_for_admin(self, pitch_id: int) -> MarketingPitch:
        pitch = await self.repository.get(pitch_id)
        if not pitch:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Marketing pitch not found")
        return pitch

    async def _unique_slug(self, title: str, *, exclude_id: Optional[int] = None) -> str:
        base_slug = slugify(title) or "pitch"
        slug = base_slug
        suffix = 2
        while True:
            existing = await self.repository.get_by_slug(slug)
            if not existing or existing.id == exclude_id:
                return slug
            slug = f"{base_slug}-{suffix}"
            suffix += 1

    async def create_pitch(
        self,
        *,
        title: str,
        description: Optional[str],
        published_date: date,
        is_published: bool,
        cover_image: UploadFile,
        pdf_file: UploadFile,
        author_id: Optional[int],
    ) -> MarketingPitch:
        slug = await self._unique_slug(title)
        cover_image_path = await save_upload(cover_image, "marketing-pitches/images", IMAGE_EXTENSIONS)
        pdf_path = await save_upload(pdf_file, "marketing-pitches/pdfs", PDF_EXTENSIONS)

        data = {
            "title": title,
            "slug": slug,
            "description": description,
            "published_date": published_date,
            "is_published": is_published,
            "cover_image_path": cover_image_path,
            "pdf_path": pdf_path,
            "author_id": author_id,
        }
        return await self.repository.create(obj_in=data)

    async def update_pitch(
        self,
        pitch_id: int,
        *,
        title: Optional[str],
        description: Optional[str],
        published_date: Optional[date],
        is_published: Optional[bool],
        cover_image: Optional[UploadFile],
        pdf_file: Optional[UploadFile],
    ) -> MarketingPitch:
        pitch = await self.get_for_admin(pitch_id)
        update_data: dict = {}

        if title is not None and title != pitch.title:
            update_data["title"] = title
            update_data["slug"] = await self._unique_slug(title, exclude_id=pitch_id)
        if description is not None:
            update_data["description"] = description
        if published_date is not None:
            update_data["published_date"] = published_date
        if is_published is not None:
            update_data["is_published"] = is_published

        old_cover_path = None
        old_pdf_path = None

        if cover_image is not None:
            old_cover_path = pitch.cover_image_path
            update_data["cover_image_path"] = await save_upload(cover_image, "marketing-pitches/images", IMAGE_EXTENSIONS)
        if pdf_file is not None:
            old_pdf_path = pitch.pdf_path
            update_data["pdf_path"] = await save_upload(pdf_file, "marketing-pitches/pdfs", PDF_EXTENSIONS)

        updated = await self.repository.update(db_obj=pitch, obj_in=update_data)

        delete_upload(old_cover_path)
        delete_upload(old_pdf_path)

        return updated

    async def delete_pitch(self, pitch_id: int) -> None:
        await self.get_for_admin(pitch_id)
        await self.repository.remove(id=pitch_id)
