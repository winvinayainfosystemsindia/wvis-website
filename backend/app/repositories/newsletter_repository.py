from typing import Optional
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.newsletter import Newsletter
from app.repositories.base import BaseRepository

class NewsletterRepository(BaseRepository[Newsletter]):
    def __init__(self, db: AsyncSession):
        super().__init__(Newsletter, db)

    async def get_by_email(self, email: str) -> Optional[Newsletter]:
        query = select(Newsletter).where(Newsletter.email == email, Newsletter.is_deleted == False)
        result = await self.db.execute(query)
        return result.scalars().first()
