# PowerShell SSH Setup Script
$ErrorActionPreference = "Stop"
$KeyPath = "$HOME\.ssh\id_ed25519"
$PubPath = "$HOME\.ssh\id_ed25519.pub"
$Server = "root@76.13.40.119"

Write-Host "🔑 Step 1: Generating public key (You may be asked for your key passphrase)..."
if (-not (Test-Path $PubPath)) {
    ssh-keygen -y -f $KeyPath | Out-File -Encoding ascii $PubPath
}
Write-Host "Public key is present."

Write-Host "`n📤 Step 2: Uploading key to server (You will be asked for the SERVER PASSWORD)..."
$PublicKey = Get-Content $PubPath
ssh $Server "mkdir -p .ssh && echo '$PublicKey' >> .ssh/authorized_keys && chmod 700 .ssh && chmod 600 .ssh/authorized_keys"

Write-Host "`n🏗️ Step 3: Setting up SSH Agent for current session..."
$AgentService = Get-Service ssh-agent
if ($AgentService.Status -ne 'Running') {
    Start-Service ssh-agent
}
ssh-add $KeyPath

Write-Host "`n✅ Setup complete! You can now run './deploy.ps1' without password prompts."
