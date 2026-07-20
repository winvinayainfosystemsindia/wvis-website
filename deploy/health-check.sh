#!/bin/bash

# Health Check Script for WVIS Website
# Usage: ./health-check.sh {dev|qa|prod}

set -e

ENV=$1

if [ -z "$ENV" ]; then
    echo "Error: Environment not specified"
    echo "Usage: ./health-check.sh {dev|qa|prod}"
    exit 1
fi

# Environment-specific configurations
case $ENV in
    dev)
        BACKEND_PORT=8000
        API_URL="http://localhost:8000"
        ;;
    qa)
        BACKEND_PORT=8001
        API_URL="http://localhost:8001"
        ;;
    prod)
        BACKEND_PORT=8002
        API_URL="http://localhost:8002"
        ;;
    *)
        echo "Error: Invalid environment"
        exit 1
        ;;
esac

echo "================================"
echo "Health Check - $ENV Environment"
echo "================================"

# Check backend health endpoint
echo "Checking backend on port $BACKEND_PORT..."
if curl -f -s "$API_URL/health" > /dev/null; then
    echo "✅ Backend is healthy"
else
    echo "❌ Backend health check failed"
    exit 1
fi

# Check PM2 process (name must match the app name in ecosystem.config.js /
# backend-deploy.sh — "wvis-$ENV", not "wvis-backend-$ENV")
echo "Checking PM2 process..."
PM2_STATUS=$(pm2 jlist | jq -r ".[] | select(.name == \"wvis-$ENV\") | .pm2_env.status")
if [ "$PM2_STATUS" == "online" ]; then
    echo "✅ PM2 process is online"
else
    echo "❌ PM2 process is not online. Status: $PM2_STATUS"
    exit 1
fi

echo "================================"
echo "✅ All health checks passed!"
echo "================================"
