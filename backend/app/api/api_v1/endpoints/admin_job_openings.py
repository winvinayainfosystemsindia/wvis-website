from typing import List, Optional
from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.api.deps import get_current_user
from app.core.database import get_db
from app.models.user import User
from app.schemas.job_opening import JobOpening, JobOpeningCreate, JobOpeningUpdate
from app.services.job_opening_service import JobOpeningService

router = APIRouter()

@router.get("/", response_model=List[JobOpening])
async def list_job_openings(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = JobOpeningService(db)
    return await service.get_all_admin(skip=skip, limit=limit)

@router.get("/{job_opening_id}", response_model=JobOpening)
async def get_job_opening(
    job_opening_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = JobOpeningService(db)
    return await service.get_job_opening(job_opening_id)

@router.post("/", response_model=JobOpening, status_code=status.HTTP_201_CREATED)
async def create_job_opening(
    job_opening_in: JobOpeningCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = JobOpeningService(db)
    return await service.create_job_opening(
        title=job_opening_in.title,
        department=job_opening_in.department,
        location=job_opening_in.location,
        job_type=job_opening_in.job_type,
        description=job_opening_in.description,
        is_active=job_opening_in.is_active,
    )

@router.put("/{job_opening_id}", response_model=JobOpening)
async def update_job_opening(
    job_opening_id: int,
    job_opening_in: JobOpeningUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = JobOpeningService(db)
    return await service.update_job_opening(
        job_opening_id,
        title=job_opening_in.title,
        department=job_opening_in.department,
        location=job_opening_in.location,
        job_type=job_opening_in.job_type,
        description=job_opening_in.description,
        is_active=job_opening_in.is_active,
    )

@router.delete("/{job_opening_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_job_opening(
    job_opening_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = JobOpeningService(db)
    await service.delete_job_opening(job_opening_id)
