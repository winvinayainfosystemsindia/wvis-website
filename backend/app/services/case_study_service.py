from typing import List, Optional
from fastapi import HTTPException, UploadFile, status
from slugify import slugify
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.case_study import CaseStudy
from app.repositories.case_study_repository import CaseStudyRepository
from app.utils.file_storage import save_upload, delete_upload

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}

class CaseStudyService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.repository = CaseStudyRepository(db)

    async def get_case_study(self, case_study_id: int) -> CaseStudy:
        case_study = await self.repository.get(case_study_id)
        if not case_study:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Case study not found")
        return case_study

    async def get_published_by_slug(self, slug: str) -> CaseStudy:
        case_study = await self.repository.get_published_by_slug(slug)
        if not case_study:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Case study not found")
        return case_study

    async def get_published(self, *, skip: int = 0, limit: int = 20) -> List[CaseStudy]:
        return await self.repository.get_published(skip=skip, limit=limit)

    async def get_all_admin(self, *, skip: int = 0, limit: int = 100) -> List[CaseStudy]:
        return await self.repository.get_all_admin(skip=skip, limit=limit)

    async def _unique_slug(self, title: str, *, exclude_id: Optional[int] = None) -> str:
        base_slug = slugify(title) or "case-study"
        slug = base_slug
        suffix = 2
        while True:
            existing = await self.repository.get_by_slug(slug)
            if not existing or existing.id == exclude_id:
                return slug
            slug = f"{base_slug}-{suffix}"
            suffix += 1

    async def create_case_study(
        self,
        *,
        title: str,
        summary: Optional[str],
        content: str,
        industry: Optional[str],
        client_name: Optional[str],
        is_published: bool,
        featured_image: Optional[UploadFile],
        author_id: int,
    ) -> CaseStudy:
        slug = await self._unique_slug(title)
        featured_image_path = (
            await save_upload(featured_image, "case-studies/images", IMAGE_EXTENSIONS) if featured_image else None
        )

        data = {
            "title": title,
            "slug": slug,
            "summary": summary,
            "content": content,
            "industry": industry,
            "client_name": client_name,
            "is_published": is_published,
            "featured_image": featured_image_path,
            "author_id": author_id,
        }
        return await self.repository.create(obj_in=data)

    async def update_case_study(
        self,
        case_study_id: int,
        *,
        title: Optional[str],
        summary: Optional[str],
        content: Optional[str],
        industry: Optional[str],
        client_name: Optional[str],
        is_published: Optional[bool],
        featured_image: Optional[UploadFile],
    ) -> CaseStudy:
        case_study = await self.get_case_study(case_study_id)
        update_data: dict = {}

        if title is not None and title != case_study.title:
            update_data["title"] = title
            update_data["slug"] = await self._unique_slug(title, exclude_id=case_study_id)
        if summary is not None:
            update_data["summary"] = summary
        if content is not None:
            update_data["content"] = content
        if industry is not None:
            update_data["industry"] = industry
        if client_name is not None:
            update_data["client_name"] = client_name
        if is_published is not None:
            update_data["is_published"] = is_published

        old_image_path = None
        if featured_image is not None:
            old_image_path = case_study.featured_image
            update_data["featured_image"] = await save_upload(featured_image, "case-studies/images", IMAGE_EXTENSIONS)

        updated = await self.repository.update(db_obj=case_study, obj_in=update_data)

        if old_image_path:
            delete_upload(old_image_path)

        return updated

    async def delete_case_study(self, case_study_id: int) -> None:
        await self.get_case_study(case_study_id)
        await self.repository.remove(id=case_study_id)
