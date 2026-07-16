#!/bin/bash

# Database Backup Script for WVIS Website
# Usage: ./backup-db.sh {dev|qa|prod}

ENV=$1
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="./backups"
DB_NAME="wvis_${ENV}"

mkdir -p $BACKUP_DIR

echo "Backing up database $DB_NAME..."
# Placeholder for pg_dump or similar
# pg_dump -U postgres $DB_NAME > $BACKUP_DIR/${DB_NAME}_${DATE}.sql

echo "✅ Backup created at $BACKUP_DIR/${DB_NAME}_${DATE}.sql (Placeholder)"
