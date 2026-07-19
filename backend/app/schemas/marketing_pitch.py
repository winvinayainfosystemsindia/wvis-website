from datetime import date
from typing import Optional
from app.schemas.base import TimestampSchema, BaseSchema

class MarketingPitchBase(BaseSchema):
    title: str
    slug: str
    description: Optional[str] = None
    cover_image_path: str
    pdf_path: str
    published_date: date
    is_published: bool = False

class MarketingPitch(MarketingPitchBase, TimestampSchema):
    id: int
    author_id: Optional[int] = None
