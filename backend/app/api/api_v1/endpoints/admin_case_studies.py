from typing import List, Optional
from fastapi import APIRouter, Depends, File, Form, UploadFile, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.api.deps import get_current_user
from app.core.database import get_db
from app.models.user import User
from app.schemas.case_study import CaseStudy
from app.services.case_study_service import CaseStudyService

router = APIRouter()

@router.get("/", response_model=List[CaseStudy])
async def list_case_studies(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = CaseStudyService(db)
    return await service.get_all_admin(skip=skip, limit=limit)

@router.get("/{case_study_id}", response_model=CaseStudy)
async def get_case_study(
    case_study_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = CaseStudyService(db)
    return await service.get_case_study(case_study_id)

@router.post("/", response_model=CaseStudy, status_code=status.HTTP_201_CREATED)
async def create_case_study(
    title: str = Form(...),
    summary: Optional[str] = Form(None),
    content: str = Form(...),
    industry: Optional[str] = Form(None),
    client_name: Optional[str] = Form(None),
    is_published: bool = Form(False),
    featured_image: Optional[UploadFile] = File(None),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = CaseStudyService(db)
    return await service.create_case_study(
        title=title,
        summary=summary,
        content=content,
        industry=industry,
        client_name=client_name,
        is_published=is_published,
        featured_image=featured_image,
        author_id=current_user.id,
    )

@router.put("/{case_study_id}", response_model=CaseStudy)
async def update_case_study(
    case_study_id: int,
    title: Optional[str] = Form(None),
    summary: Optional[str] = Form(None),
    content: Optional[str] = Form(None),
    industry: Optional[str] = Form(None),
    client_name: Optional[str] = Form(None),
    is_published: Optional[bool] = Form(None),
    featured_image: Optional[UploadFile] = File(None),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = CaseStudyService(db)
    return await service.update_case_study(
        case_study_id,
        title=title,
        summary=summary,
        content=content,
        industry=industry,
        client_name=client_name,
        is_published=is_published,
        featured_image=featured_image,
    )

@router.delete("/{case_study_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_case_study(
    case_study_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = CaseStudyService(db)
    await service.delete_case_study(case_study_id)
