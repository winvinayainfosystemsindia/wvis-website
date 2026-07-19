from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.schemas.case_study import CaseStudy
from app.services.case_study_service import CaseStudyService

router = APIRouter()

@router.get("/", response_model=List[CaseStudy])
async def get_case_studies(
    skip: int = 0,
    limit: int = 20,
    db: AsyncSession = Depends(get_db)
):
    service = CaseStudyService(db)
    return await service.get_published(skip=skip, limit=limit)

@router.get("/{slug}", response_model=CaseStudy)
async def get_case_study_by_slug(
    slug: str,
    db: AsyncSession = Depends(get_db)
):
    service = CaseStudyService(db)
    return await service.get_published_by_slug(slug)
