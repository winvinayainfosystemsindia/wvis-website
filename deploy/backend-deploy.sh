#!/bin/bash

# Backend Deployment Script for WVIS Website
# Usage: ./backend-deploy.sh {dev|qa|prod}

set -e  # Exit on error

ENV=$1

if [ -z "$ENV" ]; then
    echo "❌ Error: Environment not specified"
    echo "Usage: ./backend-deploy.sh {dev|qa|prod}"
    exit 1
fi

# Environment-specific configurations
case $ENV in
    dev)
        PORT=8000
        APP_NAME="wvis-backend-dev"
        ENV_FILE="backend/.env.dev"
        ;;
    qa)
        PORT=8001
        APP_NAME="wvis-backend-qa"
        ENV_FILE="backend/.env.qa"
        ;;
    prod)
        PORT=8002
        APP_NAME="wvis-backend-prod"
        ENV_FILE="backend/.env.prod"
        ;;
    *)
        echo "❌ Error: Invalid environment. Use dev, qa, or prod"
        exit 1
        ;;
esac

echo "================================"
echo "🚀 Deploying Backend - $ENV"
echo "App:  $APP_NAME"
echo "Port: $PORT"
echo "================================"

# Navigate to backend directory
cd backend

# Stop existing PM2 process safely
echo "🛑 Stopping existing PM2 process..."
pm2 stop $APP_NAME || true
pm2 delete $APP_NAME || true

# Create virtual environment if missing
if [ ! -d "venv-$ENV" ]; then
    echo "🐍 Creating virtual environment (venv-$ENV)..."
    if command -v python3.11 &> /dev/null; then
        python3.11 -m venv venv-$ENV
    else
        python3 -m venv venv-$ENV
    fi
fi

# Activate virtual environment
source venv-$ENV/bin/activate

# Upgrade pip
echo "⬆️ Upgrading pip..."
pip install --upgrade pip

# Install dependencies
echo "📦 Installing dependencies..."
pip install -r requirements.txt

# Verify env file
if [ ! -f "$ENV_FILE" ]; then
    echo "⚠️ Warning: Env file not found: $ENV_FILE. Using existing .env if present."
fi

# Run database migrations (using Alembic)
echo "🗄️ Running database migrations..."
if [ -f "alembic.ini" ]; then
    alembic upgrade head
else
    echo "Skipping migrations (alembic.ini not found)"
fi

# Start backend using Waitress + PM2
echo "▶️ Starting backend with PM2..."
# We pass the PORT as an environment variable to wsgi.py
export PORT=$PORT
pm2 start wsgi.py \
    --name "$APP_NAME" \
    --interpreter venv-$ENV/bin/python \
    --env PORT="$PORT"

# Persist PM2 processes
pm2 save

echo "================================"
echo "✅ Backend deployed successfully!"
echo "Process: $APP_NAME"
echo "Port:    $PORT"
echo "================================"

pm2 status "$APP_NAME"
