from typing import List
from fastapi import HTTPException, status
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

    async def get_all_admin(self, *, skip: int = 0, limit: int = 100) -> List[DemoRequest]:
        return await self.repository.get_all_admin(skip=skip, limit=limit)

    async def get_demo_request(self, demo_request_id: int) -> DemoRequest:
        demo_request = await self.repository.get(demo_request_id)
        if not demo_request:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Demo request not found")
        return demo_request

    async def set_processed(self, demo_request_id: int, is_processed: bool) -> DemoRequest:
        demo_request = await self.get_demo_request(demo_request_id)
        return await self.repository.update(db_obj=demo_request, obj_in={"is_processed": is_processed})

    async def delete_demo_request(self, demo_request_id: int) -> None:
        await self.get_demo_request(demo_request_id)
        await self.repository.remove(id=demo_request_id)
