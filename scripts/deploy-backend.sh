#!/bin/bash

# Exit on error
set -e

echo "Starting Backend Deployment..."

# Navigate to backend
cd backend

# Activate virtual environment (create if doesn't exist)
if [ ! -d "venv" ]; then
    python3 -m venv venv
fi
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
alembic upgrade head

# Restart service (assuming systemd)
# sudo systemctl restart wvis-backend

echo "Backend Deployment Complete!"
