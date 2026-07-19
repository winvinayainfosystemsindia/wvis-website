from sqlalchemy.ext.asyncio import AsyncSession
from app.models.demo_request import DemoRequest
from app.repositories.base import BaseRepository

class DemoRequestRepository(BaseRepository[DemoRequest]):
    def __init__(self, db: AsyncSession):
        super().__init__(DemoRequest, db)
