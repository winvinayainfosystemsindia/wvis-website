#!/bin/bash

# Database Restore Script for WVIS Website
# Usage: ./restore-db.sh {dev|qa|prod} [backup_file]
# Assumes it's run from the repo root (matches how backup-db.sh writes its backups).

set -e

ENV=$1
BACKUP_FILE=$2
DB_NAME="wvis_${ENV}"
ENV_FILE="backend/.env.${ENV}"

if [ -z "$ENV" ]; then
    echo "❌ Error: Environment not specified"
    echo "Usage: ./restore-db.sh {dev|qa|prod} [backup_file]"
    exit 1
fi

if [ -z "$BACKUP_FILE" ]; then
    # Pick the latest backup if not specified
    BACKUP_FILE=$(ls -t ./backups/wvis_${ENV}_*.sql 2>/dev/null | head -1)
fi

if [ -z "$BACKUP_FILE" ] || [ ! -f "$BACKUP_FILE" ]; then
    echo "❌ No backup file found"
    exit 1
fi

if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Error: Env file not found: $ENV_FILE"
    exit 1
fi

DB_USER=$(grep -E '^POSTGRES_USER=' "$ENV_FILE" | tail -1 | cut -d '=' -f2-)
DB_PASSWORD=$(grep -E '^POSTGRES_PASSWORD=' "$ENV_FILE" | tail -1 | cut -d '=' -f2-)
DB_HOST=$(grep -E '^POSTGRES_SERVER=' "$ENV_FILE" | tail -1 | cut -d '=' -f2-)
DB_PORT=$(grep -E '^POSTGRES_PORT=' "$ENV_FILE" | tail -1 | cut -d '=' -f2-)

echo "Restoring database $DB_NAME from $BACKUP_FILE..."
PGPASSWORD="$DB_PASSWORD" psql -h "${DB_HOST:-localhost}" -p "${DB_PORT:-5432}" -U "$DB_USER" -d "$DB_NAME" < "$BACKUP_FILE"

echo "✅ Database restored from $BACKUP_FILE"
