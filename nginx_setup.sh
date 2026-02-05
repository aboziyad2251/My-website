#!/bin/bash
set -e

echo "Installing Nginx..."
apt-get update
apt-get install -y nginx

echo "Configuring Nginx Reverse Proxy..."
CONFIG_FILE="/etc/nginx/sites-available/coach-app"

# Create Nginx Config
# We use cats to write the config file
cat > "$CONFIG_FILE" <<EOL
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

echo "Enabling Site..."
ln -sf "$CONFIG_FILE" /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

echo "Configuring Firewall..."
if command -v ufw > /dev/null; then
    ufw allow 'Nginx Full' || true
fi

echo "Restarting Nginx..."
systemctl restart nginx

echo "✅ Success! Site is now live on port 80."
