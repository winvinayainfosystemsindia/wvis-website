from typing import Optional
from app.schemas.base import TimestampSchema, BaseSchema

class CaseStudyBase(BaseSchema):
    title: str
    slug: str
    summary: Optional[str] = None
    content: str
    industry: Optional[str] = None
    client_name: Optional[str] = None
    is_published: bool = False
    featured_image: Optional[str] = None

class CaseStudy(CaseStudyBase, TimestampSchema):
    id: int
    author_id: Optional[int] = None
