# zip_deploy.ps1
# Creates apology_flow.zip (overwrites if exists)
$root = Split-Path -Parent $MyInvocation.MyCommand.Definition
$src = Join-Path $root 'apology_flow\*'
$dest = Join-Path $root 'apology_flow.zip'

Write-Host "Creating $dest from apology_flow..."
# Use Compress-Archive available in PowerShell 5 and later
Compress-Archive -Path $src -DestinationPath $dest -Force
if (Test-Path $dest) {
  Write-Host "Created $dest" -ForegroundColor Green
} else {
  Write-Host "Failed to create $dest" -ForegroundColor Red
}
