from typing import List, Optional
from fastapi import HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.job_opening import JobOpening
from app.repositories.job_opening_repository import JobOpeningRepository

class JobOpeningService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.repository = JobOpeningRepository(db)

    async def get_job_opening(self, job_opening_id: int) -> JobOpening:
        job_opening = await self.repository.get(job_opening_id)
        if not job_opening:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job opening not found")
        return job_opening

    async def get_active(self, *, skip: int = 0, limit: int = 100) -> List[JobOpening]:
        return await self.repository.get_active(skip=skip, limit=limit)

    async def get_all_admin(self, *, skip: int = 0, limit: int = 100) -> List[JobOpening]:
        return await self.repository.get_all_admin(skip=skip, limit=limit)

    async def create_job_opening(
        self,
        *,
        title: str,
        department: str,
        location: str,
        job_type: str,
        description: str,
        is_active: bool,
    ) -> JobOpening:
        data = {
            "title": title,
            "department": department,
            "location": location,
            "job_type": job_type,
            "description": description,
            "is_active": is_active,
        }
        return await self.repository.create(obj_in=data)

    async def update_job_opening(
        self,
        job_opening_id: int,
        *,
        title: Optional[str],
        department: Optional[str],
        location: Optional[str],
        job_type: Optional[str],
        description: Optional[str],
        is_active: Optional[bool],
    ) -> JobOpening:
        job_opening = await self.get_job_opening(job_opening_id)
        update_data: dict = {}

        if title is not None:
            update_data["title"] = title
        if department is not None:
            update_data["department"] = department
        if location is not None:
            update_data["location"] = location
        if job_type is not None:
            update_data["job_type"] = job_type
        if description is not None:
            update_data["description"] = description
        if is_active is not None:
            update_data["is_active"] = is_active

        return await self.repository.update(db_obj=job_opening, obj_in=update_data)

    async def delete_job_opening(self, job_opening_id: int) -> None:
        await self.get_job_opening(job_opening_id)
        await self.repository.remove(id=job_opening_id)
