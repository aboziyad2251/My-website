$ErrorActionPreference = "Stop"
$Server = "root@76.13.40.119"

Write-Host "🔍 Checking PM2 Process List..."
ssh $Server "pm2 list"

Write-Host "`n📋 Fetching Application Logs..."
ssh $Server "pm2 logs coach-app --lines 30 --nostream"

Write-Host "`n🌐 Checking if port 3000 is listening..."
ssh $Server "netstat -tuln | grep 3000"
