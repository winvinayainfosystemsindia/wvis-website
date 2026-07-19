"""Add category to blogs, widen featured_image

Revision ID: d8dd8abc8248
Revises: 8c9a58de4e83
Create Date: 2026-07-19 00:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'd8dd8abc8248'
down_revision: Union[str, None] = '8c9a58de4e83'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('blogs', sa.Column('category', sa.String(length=100), nullable=True))
    op.create_index(op.f('ix_blogs_category'), 'blogs', ['category'], unique=False)
    op.alter_column('blogs', 'featured_image', existing_type=sa.String(length=255), type_=sa.String(length=500))


def downgrade() -> None:
    op.alter_column('blogs', 'featured_image', existing_type=sa.String(length=500), type_=sa.String(length=255))
    op.drop_index(op.f('ix_blogs_category'), table_name='blogs')
    op.drop_column('blogs', 'category')
