from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.schemas.marketing_pitch import MarketingPitch
from app.services.marketing_pitch_service import MarketingPitchService

router = APIRouter()

@router.get("/", response_model=List[MarketingPitch])
async def get_marketing_pitches(
    skip: int = 0,
    limit: int = 20,
    db: AsyncSession = Depends(get_db)
):
    service = MarketingPitchService(db)
    return await service.get_published(skip=skip, limit=limit)
