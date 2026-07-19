#!/bin/bash

# Frontend Deployment Script for WVIS Website
# Usage: ./frontend-deploy.sh {dev|qa|prod}

set -e  # Exit on error

ENV=$1

if [ -z "$ENV" ]; then
    echo "Error: Environment not specified"
    echo "Usage: ./frontend-deploy.sh {dev|qa|prod}"
    exit 1
fi

# Environment-specific configurations
case $ENV in
    dev)
        DEPLOY_DIR="/var/www/wvis-website/frontend/dist-dev"
        ENV_FILE=".env.dev"
        ;;
    qa)
        DEPLOY_DIR="/var/www/wvis-website/frontend/dist-qa"
        ENV_FILE=".env.qa"
        ;;
    prod)
        DEPLOY_DIR="/var/www/wvis-website/frontend/dist-prod"
        ENV_FILE=".env.prod"
        ;;
    *)
        echo "Error: Invalid environment. Use dev, qa, or prod"
        exit 1
        ;;
esac

echo "================================"
echo "Deploying Frontend - $ENV Environment"
echo "Deploy Directory: $DEPLOY_DIR"
echo "================================"

# Navigate to frontend directory
# Assuming the script is run from project root
cd frontend

# Install/update dependencies
echo "Installing dependencies..."
npm install

# Check if environment file exists
# If doesn't exist, we might skip copying or use default
if [ -f "$ENV_FILE" ]; then
    echo "Using environment file: $ENV_FILE"
    cp $ENV_FILE .env
else
    echo "Warning: Environment file $ENV_FILE not found, using existing .env"
fi

# Build application
echo "Building application..."
npm run build

# Create deploy directory if it doesn't exist
mkdir -p $DEPLOY_DIR

# Backup existing deployment
if [ -d "$DEPLOY_DIR" ]; then
    echo "Backing up existing deployment..."
    rm -rf ${DEPLOY_DIR}.backup
    cp -r $DEPLOY_DIR ${DEPLOY_DIR}.backup
fi

# Clear old deployment
echo "Clearing old deployment..."
rm -rf $DEPLOY_DIR/*

# Copy new build (Vite defaults to 'dist')
echo "Copying new build..."
cp -r dist/* $DEPLOY_DIR/

# Set proper permissions
echo "Setting permissions..."
chmod -R 755 $DEPLOY_DIR

# Reload Nginx
echo "Reloading Nginx..."
sudo nginx -t && sudo systemctl reload nginx

echo "================================"
echo "✅ Frontend deployed successfully!"
echo "Location: $DEPLOY_DIR"
echo "================================"
