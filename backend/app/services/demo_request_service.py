from sqlalchemy.ext.asyncio import AsyncSession
from app.models.demo_request import DemoRequest
from app.schemas.demo_request import DemoRequestCreate
from app.repositories.demo_request_repository import DemoRequestRepository

class DemoRequestService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.repository = DemoRequestRepository(db)

    async def create_demo_request(self, demo_request_in: DemoRequestCreate) -> DemoRequest:
        return await self.repository.create(obj_in=demo_request_in.model_dump())
