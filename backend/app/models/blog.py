from sqlalchemy import String, Text, Boolean, ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.base import BaseModel

class Blog(BaseModel):
    __tablename__ = "blogs"
    
    title: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    slug: Mapped[str] = mapped_column(String(255), unique=True, index=True, nullable=False)
    summary: Mapped[str | None] = mapped_column(Text, nullable=True)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    category: Mapped[str | None] = mapped_column(String(100), nullable=True, index=True)
    author_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    is_published: Mapped[bool] = mapped_column(Boolean, default=False, index=True)
    featured_image: Mapped[str | None] = mapped_column(String(500), nullable=True)
    
    # Relationships
    author: Mapped["User"] = relationship("User")

    def __repr__(self) -> str:
        return f"<Blog(id={self.id}, title={self.title}, slug={self.slug})>"
