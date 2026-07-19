from fastapi import APIRouter
from app.api.api_v1.endpoints import (
    ping,
    auth,
    blogs,
    communications,
    newsletters,
    admin_newsletters,
    admin_blogs,
    admin_contacts,
    admin_demo_requests,
)

api_router = APIRouter()

api_router.include_router(ping.router, prefix="/ping", tags=["system"])
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(blogs.router, prefix="/blogs", tags=["content"])
api_router.include_router(communications.router, prefix="/comms", tags=["communications"])
api_router.include_router(newsletters.router, prefix="/newsletters", tags=["newsletters"])
api_router.include_router(admin_newsletters.router, prefix="/admin/newsletters", tags=["admin"])
api_router.include_router(admin_blogs.router, prefix="/admin/blogs", tags=["admin"])
api_router.include_router(admin_contacts.router, prefix="/admin/contacts", tags=["admin"])
api_router.include_router(admin_demo_requests.router, prefix="/admin/demo-requests", tags=["admin"])
