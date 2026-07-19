from sqlalchemy import String, Text, Boolean, ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.base import BaseModel

class CaseStudy(BaseModel):
    __tablename__ = "case_studies"

    title: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    slug: Mapped[str] = mapped_column(String(255), unique=True, index=True, nullable=False)
    summary: Mapped[str | None] = mapped_column(Text, nullable=True)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    industry: Mapped[str | None] = mapped_column(String(100), nullable=True, index=True)
    client_name: Mapped[str | None] = mapped_column(String(255), nullable=True)
    featured_image: Mapped[str | None] = mapped_column(String(500), nullable=True)
    author_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    is_published: Mapped[bool] = mapped_column(Boolean, default=False, index=True)

    author: Mapped["User"] = relationship("User")

    def __repr__(self) -> str:
        return f"<CaseStudy(id={self.id}, title={self.title}, slug={self.slug})>"
