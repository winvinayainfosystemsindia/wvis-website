"""Add newsletter_issues table

Revision ID: 8c9a58de4e83
Revises: cea1665151c8
Create Date: 2026-07-19 00:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '8c9a58de4e83'
down_revision: Union[str, None] = 'cea1665151c8'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table('newsletter_issues',
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
    op.create_index(op.f('ix_newsletter_issues_title'), 'newsletter_issues', ['title'], unique=False)
    op.create_index(op.f('ix_newsletter_issues_slug'), 'newsletter_issues', ['slug'], unique=True)
    op.create_index(op.f('ix_newsletter_issues_id'), 'newsletter_issues', ['id'], unique=False)
    op.create_index(op.f('ix_newsletter_issues_is_deleted'), 'newsletter_issues', ['is_deleted'], unique=False)
    op.create_index(op.f('ix_newsletter_issues_is_published'), 'newsletter_issues', ['is_published'], unique=False)


def downgrade() -> None:
    op.drop_index(op.f('ix_newsletter_issues_is_published'), table_name='newsletter_issues')
    op.drop_index(op.f('ix_newsletter_issues_is_deleted'), table_name='newsletter_issues')
    op.drop_index(op.f('ix_newsletter_issues_id'), table_name='newsletter_issues')
    op.drop_index(op.f('ix_newsletter_issues_slug'), table_name='newsletter_issues')
    op.drop_index(op.f('ix_newsletter_issues_title'), table_name='newsletter_issues')
    op.drop_table('newsletter_issues')
