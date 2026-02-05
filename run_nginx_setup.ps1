$ErrorActionPreference = "Stop"
$Server = "root@76.13.40.119"
$RemoteDir = "/var/www/coach-app"
$Script = "nginx_setup.sh"

Write-Host "Uploading Nginx setup script..."
scp $Script "$Server`:$RemoteDir"

Write-Host "Fixing line endings..."
ssh $Server "sed -i 's/\r$//' $RemoteDir/$Script"

Write-Host "Making executable..."
ssh $Server "chmod +x $RemoteDir/$Script"

Write-Host "Running Nginx setup..."
ssh $Server "bash $RemoteDir/$Script"

Write-Host "Nginx configuration complete!"
