"""Widen blogs.summary to Text (rich-text HTML can exceed varchar(500))

Revision ID: 4305beb516de
Revises: d8dd8abc8248
Create Date: 2026-07-19 00:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '4305beb516de'
down_revision: Union[str, None] = 'd8dd8abc8248'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.alter_column('blogs', 'summary', existing_type=sa.String(length=500), type_=sa.Text())


def downgrade() -> None:
    op.alter_column('blogs', 'summary', existing_type=sa.Text(), type_=sa.String(length=500))
