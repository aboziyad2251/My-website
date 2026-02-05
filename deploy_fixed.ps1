$ErrorActionPreference = "Stop"

# Configuration
$Server = "root@76.13.40.119"
$RemoteDir = "/var/www/coach-app"
$SetupScript = "$RemoteDir/remote_setup.sh"

Write-Host "Building application..."
cmd /c "npm run build"
if ($LASTEXITCODE -ne 0) { Write-Error "Build failed"; exit 1 }

Write-Host "Cleaning remote directory..."
# We remove the .next folder to ensure a clean slate, but keep node_modules if possible to save time?
# Actually, safest is to overwrite.
ssh $Server "mkdir -p $RemoteDir"

Write-Host "Copying standalone content..."
# Copy visible files (server.js, package.json, node_modules)
scp -r .next/standalone/* "$Server`:$RemoteDir"

# EXPLICITLY copy the hidden .next folder from standalone (server logic)
Write-Host "Copying server runtime (.next)..."
scp -r .next/standalone/.next "$Server`:$RemoteDir"

Write-Host "Copying static assets..."
# Ensure .next exists (it should from the previous step, but safe to mkdir)
ssh $Server "mkdir -p $RemoteDir/.next"
# Copy static folder INTO .next
scp -r .next/static "$Server`:$RemoteDir/.next/"
# Copy public folder to root
scp -r public "$Server`:$RemoteDir"

Write-Host "Copying scripts..."
Copy-Item ecosystem.config.js .next/standalone/ -ErrorAction SilentlyContinue
scp ecosystem.config.js "$Server`:$RemoteDir"
scp remote_setup.sh "$Server`:$RemoteDir"

Write-Host "Fixing line endings..."
ssh $Server "sed -i 's/\r$//' $SetupScript"

Write-Host "Making executable..."
ssh $Server "chmod +x $SetupScript"

Write-Host "Starting application..."
ssh $Server "bash $SetupScript"

Write-Host "Deployment complete!"
