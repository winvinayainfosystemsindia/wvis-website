from datetime import date
from typing import Optional
from pydantic import EmailStr
from app.schemas.base import TimestampSchema, BaseSchema

class DemoRequestBase(BaseSchema):
    full_name: str
    work_email: EmailStr
    phone: Optional[str] = None
    company_name: str
    job_title: Optional[str] = None
    company_size: Optional[str] = None
    product_interest: Optional[str] = None
    preferred_date: Optional[date] = None
    message: Optional[str] = None

class DemoRequestCreate(DemoRequestBase):
    pass

class DemoRequest(DemoRequestBase, TimestampSchema):
    id: int
    is_processed: bool = False
