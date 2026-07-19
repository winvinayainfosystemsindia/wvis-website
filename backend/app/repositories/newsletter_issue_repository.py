from typing import Optional, List
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.newsletter_issue import NewsletterIssue
from app.repositories.base import BaseRepository

class NewsletterIssueRepository(BaseRepository[NewsletterIssue]):
    def __init__(self, db: AsyncSession):
        super().__init__(NewsletterIssue, db)

    async def get_by_slug(self, slug: str) -> Optional[NewsletterIssue]:
        query = select(NewsletterIssue).where(NewsletterIssue.slug == slug, NewsletterIssue.is_deleted == False)
        result = await self.db.execute(query)
        return result.scalars().first()

    async def get_published_by_slug(self, slug: str) -> Optional[NewsletterIssue]:
        query = select(NewsletterIssue).where(
            NewsletterIssue.slug == slug,
            NewsletterIssue.is_published == True,
            NewsletterIssue.is_deleted == False,
        )
        result = await self.db.execute(query)
        return result.scalars().first()

    async def get_published(self, *, skip: int = 0, limit: int = 20) -> List[NewsletterIssue]:
        query = select(NewsletterIssue).where(
            NewsletterIssue.is_published == True,
            NewsletterIssue.is_deleted == False
        ).order_by(NewsletterIssue.published_date.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        return list(result.scalars().all())

    async def get_all_admin(self, *, skip: int = 0, limit: int = 100) -> List[NewsletterIssue]:
        query = select(NewsletterIssue).where(
            NewsletterIssue.is_deleted == False
        ).order_by(NewsletterIssue.created_at.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        return list(result.scalars().all())
