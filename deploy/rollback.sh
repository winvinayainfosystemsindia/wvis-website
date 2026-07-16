#!/bin/bash

# Rollback Script for WVIS Website
# Usage: ./rollback.sh {dev|qa|prod}

set -e

ENV=$1

if [ -z "$ENV" ]; then
    echo "Error: Environment not specified"
    echo "Usage: ./rollback.sh {dev|qa|prod}"
    exit 1
fi

echo "================================"
echo "ROLLBACK - $ENV Environment"
echo "================================"

# Get the previous git commit
# Note: This assumes the script is run from the project root
CURRENT_COMMIT=$(git rev-parse HEAD)
PREVIOUS_COMMIT=$(git rev-parse HEAD~1)

echo "Current commit: $CURRENT_COMMIT"
echo "Rolling back to: $PREVIOUS_COMMIT"

# Confirm rollback
read -p "Are you sure you want to rollback? (yes/no): " CONFIRM
if [ "$CONFIRM" != "yes" ]; then
    echo "Rollback cancelled"
    exit 0
fi

# Checkout previous commit
echo "Checking out previous commit..."
git checkout $PREVIOUS_COMMIT

# Redeploy backend
echo "Redeploying backend..."
./deploy/backend-deploy.sh $ENV

# Redeploy frontend
echo "Redeploying frontend..."
./deploy/frontend-deploy.sh $ENV

# Health check
echo "Running health check..."
./deploy/health-check.sh $ENV

echo "================================"
echo "✅ Rollback completed successfully!"
echo "================================"
