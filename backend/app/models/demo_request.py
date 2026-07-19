from datetime import date
from sqlalchemy import String, Text, Boolean, Date
from sqlalchemy.orm import Mapped, mapped_column
from app.models.base import BaseModel

class DemoRequest(BaseModel):
    __tablename__ = "demo_requests"

    full_name: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    work_email: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    phone: Mapped[str | None] = mapped_column(String(30), nullable=True)
    company_name: Mapped[str] = mapped_column(String(255), nullable=False)
    job_title: Mapped[str | None] = mapped_column(String(150), nullable=True)
    company_size: Mapped[str | None] = mapped_column(String(50), nullable=True)
    product_interest: Mapped[str | None] = mapped_column(String(255), nullable=True)
    preferred_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    message: Mapped[str | None] = mapped_column(Text, nullable=True)
    is_processed: Mapped[bool] = mapped_column(Boolean, default=False, index=True)

    def __repr__(self) -> str:
        return f"<DemoRequest(id={self.id}, name={self.full_name}, company={self.company_name})>"
