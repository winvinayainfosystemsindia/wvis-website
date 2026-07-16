from sqlalchemy.ext.asyncio import AsyncSession
from app.models.newsletter import Newsletter
from app.schemas.newsletter import NewsletterCreate
from app.repositories.newsletter_repository import NewsletterRepository

class NewsletterService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.repository = NewsletterRepository(db)

    async def subscribe(self, newsletter_in: NewsletterCreate) -> Newsletter:
        existing = await self.repository.get_by_email(newsletter_in.email)
        if existing:
            if not existing.is_active:
                return await self.repository.update(db_obj=existing, obj_in={"is_active": True})
            return existing
        return await self.repository.create(obj_in=newsletter_in.model_dump())
