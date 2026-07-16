#!/bin/bash

# Database Restore Script for WVIS Website
# Usage: ./restore-db.sh {dev|qa|prod} [backup_file]

ENV=$1
BACKUP_FILE=$2
DB_NAME="wvis_${ENV}"

if [ -z "$BACKUP_FILE" ]; then
    # Pick the latest backup if not specified
    BACKUP_FILE=$(ls -t ./backups/wvis_${ENV}_*.sql | head -1)
fi

if [ -z "$BACKUP_FILE" ]; then
    echo "❌ No backup file found"
    exit 1
fi

echo "Restoring database $DB_NAME from $BACKUP_FILE..."
# Placeholder for psql restore
# psql -U postgres -d $DB_NAME < $BACKUP_FILE

echo "✅ Database restored (Placeholder)"
