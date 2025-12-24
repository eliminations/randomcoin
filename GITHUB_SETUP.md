# GitHub Setup Guide

## Step 1: Install Git (if not already installed)

1. Download Git for Windows: https://git-scm.com/download/win
2. Install with default settings
3. Restart your terminal/PowerShell

## Step 2: Initialize Git Repository

Open PowerShell in your project folder and run:

```powershell
# Navigate to project root
cd C:\Users\carne\randomcoin

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Random Coin site"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `randomcoin` (or whatever you prefer)
3. Description: "Getting Rich Off Randomness - A chaotic meme collection site"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 4: Connect Local Repository to GitHub

After creating the repo, GitHub will show you commands. Run these in your project folder:

```powershell
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/randomcoin.git

# Rename main branch (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 5: Verify

Visit your repository on GitHub - you should see all your files there!

## Future Updates

When you make changes:

```powershell
# Check what changed
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

## Deployment from GitHub

Once your code is on GitHub, you can:
- Deploy to Vercel (free, automatic)
- Deploy to Netlify (free, automatic)
- Set up Spaceship to pull from GitHub
- Use GitHub Actions for automated deployment

Let me know when you've created the GitHub repo and I can help you set up automatic deployment!

