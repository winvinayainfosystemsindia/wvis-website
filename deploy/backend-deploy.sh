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

# Environment-specific configurations. APP_NAME must match the app name in
# ecosystem.config.js — that's what's actually running under PM2 (started in
# Step 10 of the deployment doc), and ENV_FILE must match the ENV_FILE each
# app is given there, since app/core/config.py reads POSTGRES_*/SECRET_KEY/etc.
# from whatever file that variable points to (defaulting to .env otherwise).
case $ENV in
    dev)
        APP_NAME="wvis-dev"
        ENV_FILE=".env.dev"
        ;;
    qa)
        APP_NAME="wvis-qa"
        ENV_FILE=".env.qa"
        ;;
    prod)
        APP_NAME="wvis-prod"
        ENV_FILE=".env.prod"
        ;;
    *)
        echo "❌ Error: Invalid environment. Use dev, qa, or prod"
        exit 1
        ;;
esac

echo "================================"
echo "🚀 Deploying Backend - $ENV"
echo "App: $APP_NAME"
echo "================================"

# Navigate to backend directory
cd backend

# Verify env file (must exist before we can migrate or start the app)
if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Error: Env file not found: backend/$ENV_FILE"
    exit 1
fi

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

# Run database migrations (using Alembic)
echo "🗄️ Running database migrations..."
if [ -f "alembic.ini" ]; then
    export ENV_FILE
    alembic upgrade head
else
    echo "Skipping migrations (alembic.ini not found)"
fi

deactivate

# Restart via the shared ecosystem.config.js so the running app keeps using the
# same ENV_FILE/port PM2 already configured it with; start it if this is the
# very first deploy and it isn't running yet.
echo "▶️ Restarting backend with PM2..."
pm2 restart "$APP_NAME" --update-env || pm2 start ecosystem.config.js --only "$APP_NAME"

# Persist PM2 process list
pm2 save

echo "================================"
echo "✅ Backend deployed successfully!"
echo "Process: $APP_NAME"
echo "================================"

pm2 status "$APP_NAME"
