"""Add job_openings table

Revision ID: a1b2c3d4e5f6
Revises: 624579d36234
Create Date: 2026-07-20 00:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a1b2c3d4e5f6'
down_revision: Union[str, None] = '624579d36234'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table('job_openings',
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('department', sa.String(length=100), nullable=False),
    sa.Column('location', sa.String(length=255), nullable=False),
    sa.Column('job_type', sa.String(length=50), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.Column('is_deleted', sa.Boolean(), nullable=False),
    sa.Column('deleted_at', sa.DateTime(timezone=True), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_job_openings_title'), 'job_openings', ['title'], unique=False)
    op.create_index(op.f('ix_job_openings_department'), 'job_openings', ['department'], unique=False)
    op.create_index(op.f('ix_job_openings_id'), 'job_openings', ['id'], unique=False)
    op.create_index(op.f('ix_job_openings_is_deleted'), 'job_openings', ['is_deleted'], unique=False)
    op.create_index(op.f('ix_job_openings_is_active'), 'job_openings', ['is_active'], unique=False)


def downgrade() -> None:
    op.drop_index(op.f('ix_job_openings_is_active'), table_name='job_openings')
    op.drop_index(op.f('ix_job_openings_is_deleted'), table_name='job_openings')
    op.drop_index(op.f('ix_job_openings_id'), table_name='job_openings')
    op.drop_index(op.f('ix_job_openings_department'), table_name='job_openings')
    op.drop_index(op.f('ix_job_openings_title'), table_name='job_openings')
    op.drop_table('job_openings')
