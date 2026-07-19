from typing import List
from fastapi import HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.contact import Contact
from app.schemas.contact import ContactCreate
from app.repositories.contact_repository import ContactRepository

class ContactService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.repository = ContactRepository(db)

    async def create_contact(self, contact_in: ContactCreate) -> Contact:
        return await self.repository.create(obj_in=contact_in.model_dump())

    async def get_all_admin(self, *, skip: int = 0, limit: int = 100) -> List[Contact]:
        return await self.repository.get_all_admin(skip=skip, limit=limit)

    async def get_contact(self, contact_id: int) -> Contact:
        contact = await self.repository.get(contact_id)
        if not contact:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Contact not found")
        return contact

    async def set_processed(self, contact_id: int, is_processed: bool) -> Contact:
        contact = await self.get_contact(contact_id)
        return await self.repository.update(db_obj=contact, obj_in={"is_processed": is_processed})

    async def delete_contact(self, contact_id: int) -> None:
        await self.get_contact(contact_id)
        await self.repository.remove(id=contact_id)
