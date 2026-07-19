from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.schemas.contact import Contact, ContactCreate
from app.schemas.newsletter import Newsletter, NewsletterCreate
from app.schemas.demo_request import DemoRequest, DemoRequestCreate
from app.services.contact_service import ContactService
from app.services.newsletter_service import NewsletterService
from app.services.demo_request_service import DemoRequestService

router = APIRouter()

@router.post("/contact", status_code=status.HTTP_201_CREATED, response_model=Contact)
async def submit_contact(
    contact_in: ContactCreate,
    db: AsyncSession = Depends(get_db)
):
    service = ContactService(db)
    return await service.create_contact(contact_in)

@router.post("/newsletter", status_code=status.HTTP_201_CREATED)
async def subscribe_newsletter(
    newsletter_in: NewsletterCreate,
    db: AsyncSession = Depends(get_db)
):
    service = NewsletterService(db)
    return await service.subscribe(newsletter_in)

@router.post("/demo-request", status_code=status.HTTP_201_CREATED, response_model=DemoRequest)
async def submit_demo_request(
    demo_request_in: DemoRequestCreate,
    db: AsyncSession = Depends(get_db)
):
    service = DemoRequestService(db)
    return await service.create_demo_request(demo_request_in)
