"""HTML/text templates for outbound transactional emails."""
from html import escape
from typing import Tuple

from app.core.config import settings
from app.models.contact import Contact
from app.models.demo_request import DemoRequest

COMPANY_NAME = settings.EMAILS_FROM_NAME or "WinVinaya InfoSystems"

EmailContent = Tuple[str, str, str]  # subject, html_body, text_body


def _wrap(title: str, body_html: str) -> str:
    return f"""
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; color: #1D2026;">
      <div style="background: linear-gradient(239.93deg, #8512E0 43.93%, #002FFF 93.49%); padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; font-size: 20px; margin: 0;">{escape(COMPANY_NAME)}</h1>
      </div>
      <div style="border: 1px solid #E5E7EB; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
        <h2 style="font-size: 18px; margin-top: 0;">{escape(title)}</h2>
        {body_html}
      </div>
      <p style="font-size: 12px; color: #9CA3AF; text-align: center; margin-top: 16px;">
        This is an automated message from {escape(COMPANY_NAME)}.
      </p>
    </div>
    """


def _row(label: str, value: str) -> str:
    return (
        f'<tr><td style="padding:6px 12px 6px 0; color:#6B7280; white-space:nowrap;">{escape(label)}</td>'
        f'<td style="padding:6px 0;">{escape(value)}</td></tr>'
    )


def contact_ack_email(contact: Contact) -> EmailContent:
    subject = f"We've received your message — {COMPANY_NAME}"
    body = f"""
      <p>Hi {escape(contact.full_name)},</p>
      <p>Thank you for reaching out to us. We've received your message and a member of our team
      will get back to you within one business day.</p>
      <p style="background:#F9FAFB; padding:16px; border-radius:6px;">
        <strong>Subject:</strong> {escape(contact.subject or 'General Enquiry')}<br/>
        <strong>Your message:</strong><br/>{escape(contact.message)}
      </p>
      <p>Best regards,<br/>Team {escape(COMPANY_NAME)}</p>
    """
    html = _wrap("Thanks for contacting us!", body)
    text = (
        f"Hi {contact.full_name},\n\n"
        "Thank you for reaching out to us. We've received your message and a member of our team "
        "will get back to you within one business day.\n\n"
        f"Subject: {contact.subject or 'General Enquiry'}\n"
        f"Message: {contact.message}\n\n"
        f"Best regards,\nTeam {COMPANY_NAME}"
    )
    return subject, html, text


def contact_notify_email(contact: Contact) -> EmailContent:
    subject = f"New contact form submission from {contact.full_name}"
    rows = (
        _row("Name", contact.full_name)
        + _row("Email", contact.email)
        + _row("Subject", contact.subject or "General Enquiry")
    )
    body = f"""
      <p>A new contact form submission has been received.</p>
      <table style="width:100%; border-collapse: collapse;">{rows}</table>
      <p style="margin-top:16px;"><strong>Message:</strong><br/>{escape(contact.message)}</p>
    """
    html = _wrap("New Contact Form Submission", body)
    text = (
        "New contact form submission\n\n"
        f"Name: {contact.full_name}\n"
        f"Email: {contact.email}\n"
        f"Subject: {contact.subject or 'General Enquiry'}\n\n"
        f"Message:\n{contact.message}"
    )
    return subject, html, text


def demo_ack_email(demo: DemoRequest) -> EmailContent:
    subject = f"Your demo request has been received — {COMPANY_NAME}"
    interest = demo.product_interest or "our solutions"
    body = f"""
      <p>Hi {escape(demo.full_name)},</p>
      <p>Thanks for your interest in {escape(interest)}. We've received your demo request for
      <strong>{escape(demo.company_name)}</strong> and a member of our team will reach out within
      one business day to schedule your personalised session.</p>
      <p>Best regards,<br/>Team {escape(COMPANY_NAME)}</p>
    """
    html = _wrap("Your demo request is confirmed!", body)
    text = (
        f"Hi {demo.full_name},\n\n"
        f"Thanks for your interest in {interest}. We've received your demo request for "
        f"{demo.company_name} and a member of our team will reach out within one business day "
        "to schedule your personalised session.\n\n"
        f"Best regards,\nTeam {COMPANY_NAME}"
    )
    return subject, html, text


def demo_notify_email(demo: DemoRequest) -> EmailContent:
    subject = f"New demo request from {demo.full_name} at {demo.company_name}"
    rows = (
        _row("Name", demo.full_name)
        + _row("Work Email", demo.work_email)
        + _row("Phone", demo.phone or "—")
        + _row("Company", demo.company_name)
        + _row("Job Title", demo.job_title or "—")
        + _row("Company Size", demo.company_size or "—")
        + _row("Product Interest", demo.product_interest or "—")
        + _row("Preferred Date", str(demo.preferred_date) if demo.preferred_date else "—")
    )
    body = f"""
      <p>A new demo request has been received.</p>
      <table style="width:100%; border-collapse: collapse;">{rows}</table>
      <p style="margin-top:16px;"><strong>Notes:</strong><br/>{escape(demo.message or '—')}</p>
    """
    html = _wrap("New Demo Request", body)
    text = (
        "New demo request\n\n"
        f"Name: {demo.full_name}\n"
        f"Work Email: {demo.work_email}\n"
        f"Phone: {demo.phone or '-'}\n"
        f"Company: {demo.company_name}\n"
        f"Job Title: {demo.job_title or '-'}\n"
        f"Company Size: {demo.company_size or '-'}\n"
        f"Product Interest: {demo.product_interest or '-'}\n"
        f"Preferred Date: {demo.preferred_date or '-'}\n\n"
        f"Notes:\n{demo.message or '-'}"
    )
    return subject, html, text
