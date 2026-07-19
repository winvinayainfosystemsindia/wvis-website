from typing import List
from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.api.deps import get_current_user
from app.core.database import get_db
from app.models.user import User
from app.schemas.contact import Contact, ContactStatusUpdate
from app.services.contact_service import ContactService

router = APIRouter()

@router.get("/", response_model=List[Contact])
async def list_contacts(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ContactService(db)
    return await service.get_all_admin(skip=skip, limit=limit)

@router.get("/{contact_id}", response_model=Contact)
async def get_contact(
    contact_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ContactService(db)
    return await service.get_contact(contact_id)

@router.patch("/{contact_id}", response_model=Contact)
async def update_contact_status(
    contact_id: int,
    status_in: ContactStatusUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ContactService(db)
    return await service.set_processed(contact_id, status_in.is_processed)

@router.delete("/{contact_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_contact(
    contact_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ContactService(db)
    await service.delete_contact(contact_id)
