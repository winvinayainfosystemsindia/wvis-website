from typing import Optional, List
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.case_study import CaseStudy
from app.repositories.base import BaseRepository

class CaseStudyRepository(BaseRepository[CaseStudy]):
    def __init__(self, db: AsyncSession):
        super().__init__(CaseStudy, db)

    async def get_by_slug(self, slug: str) -> Optional[CaseStudy]:
        query = select(CaseStudy).where(CaseStudy.slug == slug, CaseStudy.is_deleted == False)
        result = await self.db.execute(query)
        return result.scalars().first()

    async def get_published_by_slug(self, slug: str) -> Optional[CaseStudy]:
        query = select(CaseStudy).where(
            CaseStudy.slug == slug,
            CaseStudy.is_published == True,
            CaseStudy.is_deleted == False,
        )
        result = await self.db.execute(query)
        return result.scalars().first()

    async def get_published(self, *, skip: int = 0, limit: int = 20) -> List[CaseStudy]:
        query = select(CaseStudy).where(
            CaseStudy.is_published == True,
            CaseStudy.is_deleted == False
        ).order_by(CaseStudy.created_at.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        return list(result.scalars().all())

    async def get_all_admin(self, *, skip: int = 0, limit: int = 100) -> List[CaseStudy]:
        query = select(CaseStudy).where(
            CaseStudy.is_deleted == False
        ).order_by(CaseStudy.created_at.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        return list(result.scalars().all())
