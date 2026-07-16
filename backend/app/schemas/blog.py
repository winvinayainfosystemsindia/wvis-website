from typing import Optional
from app.schemas.base import TimestampSchema, BaseSchema

class BlogBase(BaseSchema):
    title: str
    slug: str
    summary: Optional[str] = None
    content: str
    is_published: bool = False
    featured_image: Optional[str] = None

class BlogCreate(BlogBase):
    pass

class BlogUpdate(BaseSchema):
    title: Optional[str] = None
    slug: Optional[str] = None
    summary: Optional[str] = None
    content: Optional[str] = None
    is_published: Optional[bool] = None
    featured_image: Optional[str] = None

class Blog(BlogBase, TimestampSchema):
    id: int
    author_id: Optional[int] = None
