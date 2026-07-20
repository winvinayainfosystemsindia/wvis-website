#!/bin/bash

# Database Backup Script for WVIS Website
# Usage: ./backup-db.sh {dev|qa|prod}
# Assumes it's run from the repo root (matches how the deploy workflows call it).

set -e

ENV=$1

if [ -z "$ENV" ]; then
    echo "❌ Error: Environment not specified"
    echo "Usage: ./backup-db.sh {dev|qa|prod}"
    exit 1
fi

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="./backups"
DB_NAME="wvis_${ENV}"
ENV_FILE="backend/.env.${ENV}"

if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Error: Env file not found: $ENV_FILE"
    exit 1
fi

# Pull DB connection details straight from the same .env.<env> file the app itself
# uses (see app/core/config.py), so backups always target the right database.
DB_USER=$(grep -E '^POSTGRES_USER=' "$ENV_FILE" | tail -1 | cut -d '=' -f2-)
DB_PASSWORD=$(grep -E '^POSTGRES_PASSWORD=' "$ENV_FILE" | tail -1 | cut -d '=' -f2-)
DB_HOST=$(grep -E '^POSTGRES_SERVER=' "$ENV_FILE" | tail -1 | cut -d '=' -f2-)
DB_PORT=$(grep -E '^POSTGRES_PORT=' "$ENV_FILE" | tail -1 | cut -d '=' -f2-)

mkdir -p "$BACKUP_DIR"

BACKUP_FILE="$BACKUP_DIR/${DB_NAME}_${DATE}.sql"
echo "Backing up database $DB_NAME to $BACKUP_FILE..."
PGPASSWORD="$DB_PASSWORD" pg_dump -h "${DB_HOST:-localhost}" -p "${DB_PORT:-5432}" -U "$DB_USER" "$DB_NAME" > "$BACKUP_FILE"

echo "✅ Backup created at $BACKUP_FILE"
