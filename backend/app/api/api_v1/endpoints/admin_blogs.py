from typing import List, Optional
from fastapi import APIRouter, Depends, File, Form, UploadFile, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.api.deps import get_current_user
from app.core.database import get_db
from app.models.user import User
from app.schemas.blog import Blog
from app.services.blog_service import BlogService

router = APIRouter()

@router.get("/", response_model=List[Blog])
async def list_blogs(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = BlogService(db)
    return await service.get_all_admin(skip=skip, limit=limit)

@router.get("/{blog_id}", response_model=Blog)
async def get_blog(
    blog_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = BlogService(db)
    return await service.get_blog(blog_id)

@router.post("/", response_model=Blog, status_code=status.HTTP_201_CREATED)
async def create_blog(
    title: str = Form(...),
    summary: Optional[str] = Form(None),
    content: str = Form(...),
    category: Optional[str] = Form(None),
    is_published: bool = Form(False),
    featured_image: Optional[UploadFile] = File(None),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = BlogService(db)
    return await service.create_blog(
        title=title,
        summary=summary,
        content=content,
        category=category,
        is_published=is_published,
        featured_image=featured_image,
        author_id=current_user.id,
    )

@router.put("/{blog_id}", response_model=Blog)
async def update_blog(
    blog_id: int,
    title: Optional[str] = Form(None),
    summary: Optional[str] = Form(None),
    content: Optional[str] = Form(None),
    category: Optional[str] = Form(None),
    is_published: Optional[bool] = Form(None),
    featured_image: Optional[UploadFile] = File(None),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = BlogService(db)
    return await service.update_blog(
        blog_id,
        title=title,
        summary=summary,
        content=content,
        category=category,
        is_published=is_published,
        featured_image=featured_image,
    )

@router.delete("/{blog_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_blog(
    blog_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = BlogService(db)
    await service.delete_blog(blog_id)
