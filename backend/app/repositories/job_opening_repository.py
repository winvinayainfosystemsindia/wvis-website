from typing import List
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.job_opening import JobOpening
from app.repositories.base import BaseRepository

class JobOpeningRepository(BaseRepository[JobOpening]):
    def __init__(self, db: AsyncSession):
        super().__init__(JobOpening, db)

    async def get_active(self, *, skip: int = 0, limit: int = 100) -> List[JobOpening]:
        query = select(JobOpening).where(
            JobOpening.is_active == True,
            JobOpening.is_deleted == False,
        ).order_by(JobOpening.created_at.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        return list(result.scalars().all())

    async def get_all_admin(self, *, skip: int = 0, limit: int = 100) -> List[JobOpening]:
        query = select(JobOpening).where(
            JobOpening.is_deleted == False
        ).order_by(JobOpening.created_at.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        return list(result.scalars().all())
