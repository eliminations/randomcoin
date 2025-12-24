# GitHub Setup Script for Random Coin
Write-Host "🚀 Setting up GitHub repository for Random Coin..." -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version 2>&1
    Write-Host "✅ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git first: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow

# Check if already a git repo
if (Test-Path ".git") {
    Write-Host "⚠️  Git repository already initialized" -ForegroundColor Yellow
} else {
    git init
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
}

Write-Host ""
Write-Host "📝 Adding files..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "💾 Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Random Coin site with 200+ meme buttons and rainbow borders"

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to https://github.com/new and create a new repository"
Write-Host "2. Name it (example: randomcoin)"
Write-Host "3. DO NOT initialize with README"
Write-Host "4. Copy the repository URL from GitHub"
Write-Host "5. Run these commands (replace YOUR_USERNAME and REPO_NAME):"
Write-Host ""
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
Write-Host "   git branch -M main"
Write-Host "   git push -u origin main"
Write-Host ""
