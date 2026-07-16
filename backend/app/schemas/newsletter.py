from pydantic import EmailStr
from app.schemas.base import TimestampSchema, BaseSchema

class NewsletterBase(BaseSchema):
    email: EmailStr

class NewsletterCreate(NewsletterBase):
    pass

class Newsletter(NewsletterBase, TimestampSchema):
    id: int
    is_active: bool = True
