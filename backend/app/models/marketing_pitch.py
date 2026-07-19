from datetime import date
from sqlalchemy import String, Text, Boolean, Date, ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.base import BaseModel

class MarketingPitch(BaseModel):
    __tablename__ = "marketing_pitches"

    title: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    slug: Mapped[str] = mapped_column(String(255), unique=True, index=True, nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    cover_image_path: Mapped[str] = mapped_column(String(500), nullable=False)
    pdf_path: Mapped[str] = mapped_column(String(500), nullable=False)
    published_date: Mapped[date] = mapped_column(Date, nullable=False)
    is_published: Mapped[bool] = mapped_column(Boolean, default=False, index=True)
    author_id: Mapped[int | None] = mapped_column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)

    author: Mapped["User"] = relationship("User")

    def __repr__(self) -> str:
        return f"<MarketingPitch(id={self.id}, title={self.title}, slug={self.slug})>"
