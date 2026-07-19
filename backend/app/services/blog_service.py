from typing import List, Optional
from fastapi import HTTPException, UploadFile, status
from slugify import slugify
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.blog import Blog
from app.repositories.blog_repository import BlogRepository
from app.utils.file_storage import save_upload, delete_upload

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}

class BlogService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.repository = BlogRepository(db)

    async def get_blog(self, blog_id: int) -> Blog:
        blog = await self.repository.get(blog_id)
        if not blog:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog not found")
        return blog

    async def get_blog_by_slug(self, slug: str) -> Blog:
        blog = await self.repository.get_by_slug(slug)
        if not blog:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog not found")
        return blog

    async def get_published_by_slug(self, slug: str) -> Blog:
        blog = await self.repository.get_by_slug(slug)
        if not blog or not blog.is_published:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog not found")
        return blog

    async def get_published_blogs(self, skip: int = 0, limit: int = 10) -> List[Blog]:
        return await self.repository.get_published(skip=skip, limit=limit)

    async def get_all_admin(self, *, skip: int = 0, limit: int = 100) -> List[Blog]:
        return await self.repository.get_all_admin(skip=skip, limit=limit)

    async def _unique_slug(self, title: str, *, exclude_id: Optional[int] = None) -> str:
        base_slug = slugify(title) or "post"
        slug = base_slug
        suffix = 2
        while True:
            existing = await self.repository.get_by_slug(slug)
            if not existing or existing.id == exclude_id:
                return slug
            slug = f"{base_slug}-{suffix}"
            suffix += 1

    async def create_blog(
        self,
        *,
        title: str,
        summary: Optional[str],
        content: str,
        category: Optional[str],
        is_published: bool,
        featured_image: Optional[UploadFile],
        author_id: int,
    ) -> Blog:
        slug = await self._unique_slug(title)
        featured_image_path = (
            await save_upload(featured_image, "blogs/images", IMAGE_EXTENSIONS) if featured_image else None
        )

        data = {
            "title": title,
            "slug": slug,
            "summary": summary,
            "content": content,
            "category": category,
            "is_published": is_published,
            "featured_image": featured_image_path,
            "author_id": author_id,
        }
        return await self.repository.create(obj_in=data)

    async def update_blog(
        self,
        blog_id: int,
        *,
        title: Optional[str],
        summary: Optional[str],
        content: Optional[str],
        category: Optional[str],
        is_published: Optional[bool],
        featured_image: Optional[UploadFile],
    ) -> Blog:
        blog = await self.get_blog(blog_id)
        update_data: dict = {}

        if title is not None and title != blog.title:
            update_data["title"] = title
            update_data["slug"] = await self._unique_slug(title, exclude_id=blog_id)
        if summary is not None:
            update_data["summary"] = summary
        if content is not None:
            update_data["content"] = content
        if category is not None:
            update_data["category"] = category
        if is_published is not None:
            update_data["is_published"] = is_published

        old_image_path = None
        if featured_image is not None:
            old_image_path = blog.featured_image
            update_data["featured_image"] = await save_upload(featured_image, "blogs/images", IMAGE_EXTENSIONS)

        updated = await self.repository.update(db_obj=blog, obj_in=update_data)

        if old_image_path:
            delete_upload(old_image_path)

        return updated

    async def delete_blog(self, blog_id: int) -> None:
        await self.get_blog(blog_id)
        await self.repository.remove(id=blog_id)
