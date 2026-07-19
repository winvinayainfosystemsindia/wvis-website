from typing import List
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.contact import Contact
from app.repositories.base import BaseRepository

class ContactRepository(BaseRepository[Contact]):
    def __init__(self, db: AsyncSession):
        super().__init__(Contact, db)

    async def get_all_admin(self, *, skip: int = 0, limit: int = 100) -> List[Contact]:
        query = select(Contact).where(
            Contact.is_deleted == False
        ).order_by(Contact.created_at.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        return list(result.scalars().all())
