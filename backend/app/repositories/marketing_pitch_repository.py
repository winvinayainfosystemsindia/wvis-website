from typing import Optional, List
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.marketing_pitch import MarketingPitch
from app.repositories.base import BaseRepository

class MarketingPitchRepository(BaseRepository[MarketingPitch]):
    def __init__(self, db: AsyncSession):
        super().__init__(MarketingPitch, db)

    async def get_by_slug(self, slug: str) -> Optional[MarketingPitch]:
        query = select(MarketingPitch).where(MarketingPitch.slug == slug, MarketingPitch.is_deleted == False)
        result = await self.db.execute(query)
        return result.scalars().first()

    async def get_published(self, *, skip: int = 0, limit: int = 20) -> List[MarketingPitch]:
        query = select(MarketingPitch).where(
            MarketingPitch.is_published == True,
            MarketingPitch.is_deleted == False
        ).order_by(MarketingPitch.published_date.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        return list(result.scalars().all())

    async def get_all_admin(self, *, skip: int = 0, limit: int = 100) -> List[MarketingPitch]:
        query = select(MarketingPitch).where(
            MarketingPitch.is_deleted == False
        ).order_by(MarketingPitch.created_at.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        return list(result.scalars().all())
