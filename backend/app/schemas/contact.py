from typing import Optional
from pydantic import EmailStr
from app.schemas.base import TimestampSchema, BaseSchema

class ContactBase(BaseSchema):
    full_name: str
    email: EmailStr
    subject: Optional[str] = None
    message: str

class ContactCreate(ContactBase):
    pass

class Contact(ContactBase, TimestampSchema):
    id: int
    is_processed: bool = False

class ContactStatusUpdate(BaseSchema):
    is_processed: bool
