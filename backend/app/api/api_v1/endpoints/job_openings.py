from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.schemas.job_opening import JobOpening
from app.services.job_opening_service import JobOpeningService

router = APIRouter()

@router.get("/", response_model=List[JobOpening])
async def get_job_openings(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db)
):
    service = JobOpeningService(db)
    return await service.get_active(skip=skip, limit=limit)
