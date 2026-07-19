from datetime import date
from typing import List, Optional
from fastapi import APIRouter, Depends, File, Form, UploadFile, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.api.deps import get_current_user
from app.core.database import get_db
from app.models.user import User
from app.schemas.newsletter_issue import NewsletterIssue
from app.services.newsletter_issue_service import NewsletterIssueService

router = APIRouter()

@router.get("/", response_model=List[NewsletterIssue])
async def list_newsletters(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = NewsletterIssueService(db)
    return await service.get_all_admin(skip=skip, limit=limit)

@router.get("/{issue_id}", response_model=NewsletterIssue)
async def get_newsletter(
    issue_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = NewsletterIssueService(db)
    return await service.get_for_admin(issue_id)

@router.post("/", response_model=NewsletterIssue, status_code=status.HTTP_201_CREATED)
async def create_newsletter(
    title: str = Form(...),
    description: Optional[str] = Form(None),
    published_date: date = Form(...),
    is_published: bool = Form(False),
    cover_image: UploadFile = File(...),
    pdf_file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = NewsletterIssueService(db)
    return await service.create_issue(
        title=title,
        description=description,
        published_date=published_date,
        is_published=is_published,
        cover_image=cover_image,
        pdf_file=pdf_file,
        author_id=current_user.id,
    )

@router.put("/{issue_id}", response_model=NewsletterIssue)
async def update_newsletter(
    issue_id: int,
    title: Optional[str] = Form(None),
    description: Optional[str] = Form(None),
    published_date: Optional[date] = Form(None),
    is_published: Optional[bool] = Form(None),
    cover_image: Optional[UploadFile] = File(None),
    pdf_file: Optional[UploadFile] = File(None),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = NewsletterIssueService(db)
    return await service.update_issue(
        issue_id,
        title=title,
        description=description,
        published_date=published_date,
        is_published=is_published,
        cover_image=cover_image,
        pdf_file=pdf_file,
    )

@router.delete("/{issue_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_newsletter(
    issue_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = NewsletterIssueService(db)
    await service.delete_issue(issue_id)
