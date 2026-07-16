from fastapi import APIRouter
from app.api.api_v1.endpoints import ping, auth, blogs, communications

api_router = APIRouter()

api_router.include_router(ping.router, prefix="/ping", tags=["system"])
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(blogs.router, prefix="/blogs", tags=["content"])
api_router.include_router(communications.router, prefix="/comms", tags=["communications"])
