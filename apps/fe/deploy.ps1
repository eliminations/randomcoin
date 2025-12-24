# Deployment script for Random Coin (Windows PowerShell)

Write-Host "🚀 Building Random Coin for production..." -ForegroundColor Cyan
Set-Location $PSScriptRoot

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
pnpm install

# Build the static site
Write-Host "🔨 Building static export..." -ForegroundColor Yellow
pnpm build

# Check if build was successful
if (Test-Path "out") {
    Write-Host "✅ Build successful! Static files are in the 'out' folder" -ForegroundColor Green
    Write-Host ""
    Write-Host "📤 Next steps:" -ForegroundColor Cyan
    Write-Host "1. Upload ALL contents of the 'out' folder to your hosting"
    Write-Host "2. Upload to: public_html, www, htdocs, or wwwroot directory"
    Write-Host "3. Make sure index.html is in the root of your public directory"
    Write-Host ""
    Write-Host "📁 The 'out' folder contains:" -ForegroundColor Cyan
    Get-ChildItem out/ | Select-Object -First 20 | Format-Table
} else {
    Write-Host "❌ Build failed! Check for errors above." -ForegroundColor Red
    exit 1
}

