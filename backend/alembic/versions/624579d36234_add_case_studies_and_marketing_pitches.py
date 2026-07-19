"""Add case_studies and marketing_pitches tables

Revision ID: 624579d36234
Revises: 4305beb516de
Create Date: 2026-07-19 00:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '624579d36234'
down_revision: Union[str, None] = '4305beb516de'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table('case_studies',
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('slug', sa.String(length=255), nullable=False),
    sa.Column('summary', sa.Text(), nullable=True),
    sa.Column('content', sa.Text(), nullable=False),
    sa.Column('industry', sa.String(length=100), nullable=True),
    sa.Column('client_name', sa.String(length=255), nullable=True),
    sa.Column('featured_image', sa.String(length=500), nullable=True),
    sa.Column('author_id', sa.Integer(), nullable=True),
    sa.Column('is_published', sa.Boolean(), nullable=False),
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.Column('is_deleted', sa.Boolean(), nullable=False),
    sa.Column('deleted_at', sa.DateTime(timezone=True), nullable=True),
    sa.ForeignKeyConstraint(['author_id'], ['users.id'], ondelete='SET NULL'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_case_studies_title'), 'case_studies', ['title'], unique=False)
    op.create_index(op.f('ix_case_studies_slug'), 'case_studies', ['slug'], unique=True)
    op.create_index(op.f('ix_case_studies_industry'), 'case_studies', ['industry'], unique=False)
    op.create_index(op.f('ix_case_studies_id'), 'case_studies', ['id'], unique=False)
    op.create_index(op.f('ix_case_studies_is_deleted'), 'case_studies', ['is_deleted'], unique=False)
    op.create_index(op.f('ix_case_studies_is_published'), 'case_studies', ['is_published'], unique=False)

    op.create_table('marketing_pitches',
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('slug', sa.String(length=255), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('cover_image_path', sa.String(length=500), nullable=False),
    sa.Column('pdf_path', sa.String(length=500), nullable=False),
    sa.Column('published_date', sa.Date(), nullable=False),
    sa.Column('is_published', sa.Boolean(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=True),
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.Column('is_deleted', sa.Boolean(), nullable=False),
    sa.Column('deleted_at', sa.DateTime(timezone=True), nullable=True),
    sa.ForeignKeyConstraint(['author_id'], ['users.id'], ondelete='SET NULL'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_marketing_pitches_title'), 'marketing_pitches', ['title'], unique=False)
    op.create_index(op.f('ix_marketing_pitches_slug'), 'marketing_pitches', ['slug'], unique=True)
    op.create_index(op.f('ix_marketing_pitches_id'), 'marketing_pitches', ['id'], unique=False)
    op.create_index(op.f('ix_marketing_pitches_is_deleted'), 'marketing_pitches', ['is_deleted'], unique=False)
    op.create_index(op.f('ix_marketing_pitches_is_published'), 'marketing_pitches', ['is_published'], unique=False)


def downgrade() -> None:
    op.drop_index(op.f('ix_marketing_pitches_is_published'), table_name='marketing_pitches')
    op.drop_index(op.f('ix_marketing_pitches_is_deleted'), table_name='marketing_pitches')
    op.drop_index(op.f('ix_marketing_pitches_id'), table_name='marketing_pitches')
    op.drop_index(op.f('ix_marketing_pitches_slug'), table_name='marketing_pitches')
    op.drop_index(op.f('ix_marketing_pitches_title'), table_name='marketing_pitches')
    op.drop_table('marketing_pitches')

    op.drop_index(op.f('ix_case_studies_is_published'), table_name='case_studies')
    op.drop_index(op.f('ix_case_studies_is_deleted'), table_name='case_studies')
    op.drop_index(op.f('ix_case_studies_id'), table_name='case_studies')
    op.drop_index(op.f('ix_case_studies_industry'), table_name='case_studies')
    op.drop_index(op.f('ix_case_studies_slug'), table_name='case_studies')
    op.drop_index(op.f('ix_case_studies_title'), table_name='case_studies')
    op.drop_table('case_studies')
