$ErrorActionPreference = "Stop"

# Configuration
$Server = "root@76.13.40.119"
$RemoteDir = "/var/www/coach-app"
$SetupScript = "$RemoteDir/remote_setup.sh"

Write-Host "🚧 Building application..."
# specific cmd /c usage ensures correct execution path
cmd /c "npm run build"
if ($LASTEXITCODE -ne 0) { Write-Error "Build failed"; exit 1 }

Write-Host "📁 Creating remote directory..."
ssh $Server "mkdir -p $RemoteDir/.next"

Write-Host "🚀 Copying standalone files..."
scp -r .next/standalone/* "$Server`:$RemoteDir"

Write-Host "🖼️ Copying static assets..."
scp -r public "$Server`:$RemoteDir"
scp -r .next/static "$Server`:$RemoteDir/.next/"

Write-Host "📄 Copying scripts..."
Copy-Item ecosystem.config.js .next/standalone/ -ErrorAction SilentlyContinue
scp ecosystem.config.js "$Server`:$RemoteDir"
scp remote_setup.sh "$Server`:$RemoteDir"

Write-Host "🔧 Fixing line endings (CRLF to LF)..."
# We escape the quotes for PowerShell to pass the sed command string correctly
# The command is: sed -i 's/\r$//' /path/to/script
ssh $Server "sed -i 's/\r$//' $SetupScript"

Write-Host "🔐 Making script executable..."
ssh $Server "chmod +x $SetupScript"

Write-Host "🔄 Starting application on server..."
ssh $Server "bash $SetupScript"

Write-Host "✅ Deployment complete!"
