from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.schemas.blog import Blog, BlogCreate
from app.services.blog_service import BlogService

router = APIRouter()

@router.get("/", response_model=List[Blog])
async def get_blogs(
    skip: int = 0,
    limit: int = 10,
    db: AsyncSession = Depends(get_db)
):
    service = BlogService(db)
    return await service.get_published_blogs(skip=skip, limit=limit)

@router.get("/{slug}", response_model=Blog)
async def get_blog_by_slug(
    slug: str,
    db: AsyncSession = Depends(get_db)
):
    service = BlogService(db)
    return await service.get_blog_by_slug(slug)
