from typing import List, Optional
from fastapi import HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.blog import Blog
from app.schemas.blog import BlogCreate, BlogUpdate
from app.repositories.blog_repository import BlogRepository

class BlogService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.repository = BlogRepository(db)

    async def get_blog(self, blog_id: int) -> Blog:
        blog = await self.repository.get(blog_id)
        if not blog:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog path not found")
        return blog

    async def get_blog_by_slug(self, slug: str) -> Blog:
        blog = await self.repository.get_by_slug(slug)
        if not blog:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog not found")
        return blog

    async def get_published_blogs(self, skip: int = 0, limit: int = 10) -> List[Blog]:
        return await self.repository.get_published(skip=skip, limit=limit)

    async def create_blog(self, blog_in: BlogCreate, author_id: int) -> Blog:
        blog_data = blog_in.model_dump()
        blog_data["author_id"] = author_id
        return await self.repository.create(obj_in=blog_data)

    async def update_blog(self, blog_id: int, blog_in: BlogUpdate) -> Blog:
        blog = await self.get_blog(blog_id)
        return await self.repository.update(db_obj=blog, obj_in=blog_in)
