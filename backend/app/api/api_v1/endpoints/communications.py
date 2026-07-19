from fastapi import APIRouter, BackgroundTasks, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.config import settings
from app.core.database import get_db
from app.schemas.contact import Contact, ContactCreate
from app.schemas.newsletter import Newsletter, NewsletterCreate
from app.schemas.demo_request import DemoRequest, DemoRequestCreate
from app.services.contact_service import ContactService
from app.services.newsletter_service import NewsletterService
from app.services.demo_request_service import DemoRequestService
from app.utils.email import send_email
from app.utils.email_templates import (
    contact_ack_email,
    contact_notify_email,
    demo_ack_email,
    demo_notify_email,
)

router = APIRouter()

@router.post("/contact", status_code=status.HTTP_201_CREATED, response_model=Contact)
async def submit_contact(
    contact_in: ContactCreate,
    background_tasks: BackgroundTasks,
    db: AsyncSession = Depends(get_db)
):
    service = ContactService(db)
    contact = await service.create_contact(contact_in)

    ack_subject, ack_html, ack_text = contact_ack_email(contact)
    background_tasks.add_task(send_email, contact.email, ack_subject, ack_html, ack_text)

    notify_subject, notify_html, notify_text = contact_notify_email(contact)
    background_tasks.add_task(send_email, settings.CONTACT_NOTIFY_EMAIL, notify_subject, notify_html, notify_text)

    return contact

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
    background_tasks: BackgroundTasks,
    db: AsyncSession = Depends(get_db)
):
    service = DemoRequestService(db)
    demo_request = await service.create_demo_request(demo_request_in)

    ack_subject, ack_html, ack_text = demo_ack_email(demo_request)
    background_tasks.add_task(send_email, demo_request.work_email, ack_subject, ack_html, ack_text)

    notify_subject, notify_html, notify_text = demo_notify_email(demo_request)
    background_tasks.add_task(send_email, settings.CONTACT_NOTIFY_EMAIL, notify_subject, notify_html, notify_text)

    return demo_request
