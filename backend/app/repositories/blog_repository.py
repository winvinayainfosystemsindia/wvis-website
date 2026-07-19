from typing import Optional, List
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.blog import Blog
from app.repositories.base import BaseRepository

class BlogRepository(BaseRepository[Blog]):
    def __init__(self, db: AsyncSession):
        super().__init__(Blog, db)

    async def get_by_slug(self, slug: str) -> Optional[Blog]:
        query = select(Blog).where(Blog.slug == slug, Blog.is_deleted == False)
        result = await self.db.execute(query)
        return result.scalars().first()

    async def get_published(self, *, skip: int = 0, limit: int = 10) -> List[Blog]:
        query = select(Blog).where(
            Blog.is_published == True,
            Blog.is_deleted == False
        ).order_by(Blog.created_at.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        return list(result.scalars().all())

    async def get_all_admin(self, *, skip: int = 0, limit: int = 100) -> List[Blog]:
        query = select(Blog).where(
            Blog.is_deleted == False
        ).order_by(Blog.created_at.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        return list(result.scalars().all())
