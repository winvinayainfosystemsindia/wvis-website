from sqlalchemy.ext.asyncio import AsyncSession
from app.models.contact import Contact
from app.schemas.contact import ContactCreate
from app.repositories.contact_repository import ContactRepository

class ContactService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.repository = ContactRepository(db)

    async def create_contact(self, contact_in: ContactCreate) -> Contact:
        # Here you could add logic to send email notifications
        return await self.repository.create(obj_in=contact_in.model_dump())
