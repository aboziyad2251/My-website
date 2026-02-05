$ErrorActionPreference = "Stop"

# Configuration
$Server = "root@76.13.40.119"
$RemoteDir = "/var/www/coach-app"

Write-Host "🚧 Building application..."
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed"
}

Write-Host "📁 Creating remote directory..."
ssh $Server "mkdir -p $RemoteDir/.next"

Write-Host "🚀 Copying standalone files..."
# Copy standalone build (includes server.js and node_modules)
scp -r .next/standalone/* "$Server`:$RemoteDir"

# Copy static assets (required for standalone)
Write-Host "🖼️ Copying static assets..."
scp -r public "$Server`:$RemoteDir"
scp -r .next/static "$Server`:$RemoteDir/.next/"

# Copy PM2 config
Copy-Item ecosystem.config.js .next/standalone/ -ErrorAction SilentlyContinue
scp ecosystem.config.js "$Server`:$RemoteDir"

Write-Host "🔄 Starting application on server..."
# Check if PM2 is installed, install if missing (requires npm)
ssh $Server -- "command -v pm2 >/dev/null 2>&1 || (echo 'Installing PM2...' && npm install -g pm2)"

# Start/Restart app
ssh $Server -- "cd $RemoteDir && pm2 reload ecosystem.config.js --env production || pm2 start ecosystem.config.js --env production"

Write-Host "✅ Deployment complete!"
