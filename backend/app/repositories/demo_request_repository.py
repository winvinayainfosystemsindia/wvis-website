from typing import List
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.demo_request import DemoRequest
from app.repositories.base import BaseRepository

class DemoRequestRepository(BaseRepository[DemoRequest]):
    def __init__(self, db: AsyncSession):
        super().__init__(DemoRequest, db)

    async def get_all_admin(self, *, skip: int = 0, limit: int = 100) -> List[DemoRequest]:
        query = select(DemoRequest).where(
            DemoRequest.is_deleted == False
        ).order_by(DemoRequest.created_at.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        return list(result.scalars().all())
