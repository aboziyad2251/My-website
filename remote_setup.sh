#!/bin/bash
# Detailed logging
set -e

REMOTE_DIR="/var/www/coach-app"

echo "Checking for PM2..."
if ! command -v pm2 >/dev/null 2>&1; then
    echo "Installing PM2..."
    npm install -g pm2
fi

echo "Navigating to app directory..."
cd "$REMOTE_DIR"

echo "Reloading/Starting Application..."
if pm2 describe ecosystem.config.js > /dev/null; then
    pm2 reload ecosystem.config.js --env production
else
    pm2 start ecosystem.config.js --env production
fi
