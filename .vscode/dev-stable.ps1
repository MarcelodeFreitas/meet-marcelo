$workspace = Split-Path -Parent $PSScriptRoot
$workspaceRegex = [Regex]::Escape($workspace)
$devUrl = "http://localhost:3000"

$targets = Get-CimInstance Win32_Process | Where-Object {
  $_.Name -eq "node.exe" -and
  $_.CommandLine -match "next\\dist\\server\\lib\\start-server\.js" -and
  $_.CommandLine -match $workspaceRegex
}

foreach ($target in $targets) {
  Stop-Process -Id $target.ProcessId -Force
}

Set-Location $workspace
Write-Host "Starting Next.js dev server at $devUrl ..." -ForegroundColor Cyan
Start-Process $devUrl
npx next dev --webpack --port 3000 --hostname localhost
