#!/bin/bash

# Exit on error
set -e

echo "Starting Frontend Deployment..."

# Navigate to frontend
cd frontend

# Install dependencies and build
npm install
npm run build

# Move build files to web server directory
# sudo rm -rf /var/www/html/*
# sudo cp -r dist/* /var/www/html/

echo "Frontend Deployment Complete!"
