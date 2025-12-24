#!/bin/bash
# Deployment script for Random Coin

echo "🚀 Building Random Coin for production..."
cd "$(dirname "$0")"

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Build the static site
echo "🔨 Building static export..."
pnpm build

# Check if build was successful
if [ -d "out" ]; then
    echo "✅ Build successful! Static files are in the 'out' folder"
    echo ""
    echo "📤 Next steps:"
    echo "1. Upload ALL contents of the 'out' folder to your hosting"
    echo "2. Upload to: public_html, www, htdocs, or wwwroot directory"
    echo "3. Make sure index.html is in the root of your public directory"
    echo ""
    echo "📁 The 'out' folder contains:"
    ls -la out/ | head -20
else
    echo "❌ Build failed! Check for errors above."
    exit 1
fi

