from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.schemas.newsletter_issue import NewsletterIssue
from app.services.newsletter_issue_service import NewsletterIssueService

router = APIRouter()

@router.get("/", response_model=List[NewsletterIssue])
async def get_newsletters(
    skip: int = 0,
    limit: int = 20,
    db: AsyncSession = Depends(get_db)
):
    service = NewsletterIssueService(db)
    return await service.get_published(skip=skip, limit=limit)

@router.get("/{slug}", response_model=NewsletterIssue)
async def get_newsletter_by_slug(
    slug: str,
    db: AsyncSession = Depends(get_db)
):
    service = NewsletterIssueService(db)
    return await service.get_published_by_slug(slug)
