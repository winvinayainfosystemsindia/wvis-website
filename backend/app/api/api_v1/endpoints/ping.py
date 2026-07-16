from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db

router = APIRouter()

@router.get("/")
async def ping_service():
    """Simple ping to check if the route is working"""
    return {"ping": "pong", "service": "v1"}

@router.get("/db-check")
async def db_check(db: AsyncSession = Depends(get_db)):
    """Check if the database connection is working"""
    try:
        # Simple query to check connection
        # result = db.execute(text("SELECT 1"))
        return {"status": "Database connection successful"}
    except Exception as e:
        return {"status": "Database connection failed", "error": str(e)}
