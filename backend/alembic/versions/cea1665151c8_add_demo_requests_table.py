"""Add demo_requests table

Revision ID: cea1665151c8
Revises: 97ae01429589
Create Date: 2026-07-19 00:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'cea1665151c8'
down_revision: Union[str, None] = '97ae01429589'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table('demo_requests',
    sa.Column('full_name', sa.String(length=255), nullable=False),
    sa.Column('work_email', sa.String(length=255), nullable=False),
    sa.Column('phone', sa.String(length=30), nullable=True),
    sa.Column('company_name', sa.String(length=255), nullable=False),
    sa.Column('job_title', sa.String(length=150), nullable=True),
    sa.Column('company_size', sa.String(length=50), nullable=True),
    sa.Column('product_interest', sa.String(length=255), nullable=True),
    sa.Column('preferred_date', sa.Date(), nullable=True),
    sa.Column('message', sa.Text(), nullable=True),
    sa.Column('is_processed', sa.Boolean(), nullable=False),
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.Column('is_deleted', sa.Boolean(), nullable=False),
    sa.Column('deleted_at', sa.DateTime(timezone=True), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_demo_requests_full_name'), 'demo_requests', ['full_name'], unique=False)
    op.create_index(op.f('ix_demo_requests_work_email'), 'demo_requests', ['work_email'], unique=False)
    op.create_index(op.f('ix_demo_requests_id'), 'demo_requests', ['id'], unique=False)
    op.create_index(op.f('ix_demo_requests_is_deleted'), 'demo_requests', ['is_deleted'], unique=False)
    op.create_index(op.f('ix_demo_requests_is_processed'), 'demo_requests', ['is_processed'], unique=False)


def downgrade() -> None:
    op.drop_index(op.f('ix_demo_requests_is_processed'), table_name='demo_requests')
    op.drop_index(op.f('ix_demo_requests_is_deleted'), table_name='demo_requests')
    op.drop_index(op.f('ix_demo_requests_id'), table_name='demo_requests')
    op.drop_index(op.f('ix_demo_requests_work_email'), table_name='demo_requests')
    op.drop_index(op.f('ix_demo_requests_full_name'), table_name='demo_requests')
    op.drop_table('demo_requests')
