from typing import List
from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.api.deps import get_current_user
from app.core.database import get_db
from app.models.user import User
from app.schemas.demo_request import DemoRequest, DemoRequestStatusUpdate
from app.services.demo_request_service import DemoRequestService

router = APIRouter()

@router.get("/", response_model=List[DemoRequest])
async def list_demo_requests(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = DemoRequestService(db)
    return await service.get_all_admin(skip=skip, limit=limit)

@router.get("/{demo_request_id}", response_model=DemoRequest)
async def get_demo_request(
    demo_request_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = DemoRequestService(db)
    return await service.get_demo_request(demo_request_id)

@router.patch("/{demo_request_id}", response_model=DemoRequest)
async def update_demo_request_status(
    demo_request_id: int,
    status_in: DemoRequestStatusUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = DemoRequestService(db)
    return await service.set_processed(demo_request_id, status_in.is_processed)

@router.delete("/{demo_request_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_demo_request(
    demo_request_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = DemoRequestService(db)
    await service.delete_demo_request(demo_request_id)
