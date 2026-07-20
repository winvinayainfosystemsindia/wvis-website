from typing import Optional
from app.schemas.base import TimestampSchema, BaseSchema

class JobOpeningBase(BaseSchema):
    title: str
    department: str
    location: str
    job_type: str
    description: str
    is_active: bool = True

class JobOpeningCreate(JobOpeningBase):
    pass

class JobOpeningUpdate(BaseSchema):
    title: Optional[str] = None
    department: Optional[str] = None
    location: Optional[str] = None
    job_type: Optional[str] = None
    description: Optional[str] = None
    is_active: Optional[bool] = None

class JobOpening(JobOpeningBase, TimestampSchema):
    id: int
