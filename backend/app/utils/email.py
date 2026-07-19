"""Minimal SMTP email sending helper (stdlib smtplib, run off the event loop)."""
import asyncio
import logging
import smtplib
from email.message import EmailMessage
from typing import Optional

from app.core.config import settings

logger = logging.getLogger(__name__)

# s.mail25.info deliberately delays its SMTP greeting by ~25-30s (anti-spam
# tarpitting / "greet pause"), so the timeout has to comfortably outlast that.
SMTP_TIMEOUT_SECONDS = 45


def _build_message(to_email: str, subject: str, html_body: str, text_body: str) -> EmailMessage:
    message = EmailMessage()
    message["Subject"] = subject
    from_header = settings.EMAILS_FROM_EMAIL
    if settings.EMAILS_FROM_NAME:
        from_header = f"{settings.EMAILS_FROM_NAME} <{settings.EMAILS_FROM_EMAIL}>"
    message["From"] = from_header
    message["To"] = to_email
    message.set_content(text_body)
    message.add_alternative(html_body, subtype="html")
    return message


def send_email_sync(to_email: str, subject: str, html_body: str, text_body: Optional[str] = None) -> None:
    """Send a single email synchronously. Never raises — logs and returns on failure."""
    if not settings.SMTP_HOST or not settings.EMAILS_FROM_EMAIL:
        logger.warning("SMTP is not configured; skipping email '%s' to %s", subject, to_email)
        return

    message = _build_message(to_email, subject, html_body, text_body or html_body)

    try:
        if settings.SMTP_SSL:
            with smtplib.SMTP_SSL(settings.SMTP_HOST, settings.SMTP_PORT, timeout=SMTP_TIMEOUT_SECONDS) as server:
                if settings.SMTP_USER:
                    server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
                server.send_message(message)
        else:
            with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=SMTP_TIMEOUT_SECONDS) as server:
                if settings.SMTP_TLS:
                    server.starttls()
                if settings.SMTP_USER:
                    server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
                server.send_message(message)
    except Exception:
        logger.exception("Failed to send email '%s' to %s", subject, to_email)


async def send_email(to_email: str, subject: str, html_body: str, text_body: Optional[str] = None) -> None:
    """Async wrapper — runs the blocking SMTP call in a worker thread."""
    await asyncio.to_thread(send_email_sync, to_email, subject, html_body, text_body)
