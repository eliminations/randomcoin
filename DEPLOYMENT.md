# Deployment Guide for Random Coin

## Option 1: Static Export (Recommended for most hosting) ✅

This generates static HTML/CSS/JS files that work on **any web hosting** (even basic shared hosting).

### Steps:

1. **Build the static site:**
   ```bash
   cd apps/fe
   pnpm install
   pnpm build
   ```

2. **The output will be in `apps/fe/out` folder** - this contains all your static files!

3. **Upload to your hosting:**
   - Connect via FTP/SFTP (use FileZilla, Cyberduck, or your hosting's file manager)
   - Upload **ALL contents** of the `out` folder to your web hosting's public directory:
     - Usually named: `public_html`, `www`, `htdocs`, or `wwwroot`
     - Make sure `index.html` is in the root of this directory
   
4. **Domain Configuration:**
   - Point your domain's DNS A record to your hosting provider's IP address
   - Or use their nameservers (ns1.yourhost.com, ns2.yourhost.com)
   - Wait for DNS propagation (can take 24-48 hours, usually much faster)

5. **Verify it works:**
   - Visit your domain in a browser
   - Should see your Random Coin site!

### Quick Upload Checklist:
- [ ] Built with `pnpm build`
- [ ] Uploaded all files from `apps/fe/out` folder
- [ ] `index.html` is in the root public directory
- [ ] Domain DNS is configured
- [ ] Tested in browser

## Option 2: Node.js Hosting (If your hosting supports Node.js)

If your hosting supports Node.js (like VPS, some shared hosting with Node.js support):

### Steps:

1. **Build the production app:**
   ```bash
   cd apps/fe
   pnpm install --production
   pnpm build
   ```

2. **Upload to server:**
   - Upload the entire `apps/fe` folder to your server
   - Make sure `node_modules`, `.next` folder are uploaded (or run `pnpm install` on server)

3. **Run the server:**
   ```bash
   pnpm start
   ```
   
   Or use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start npm --name "randomcoin" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure reverse proxy** (nginx/apache) to point to `http://localhost:3000`

## Option 3: Vercel (Easiest - Free tier available)

Even if you have your own hosting, Vercel is the easiest for Next.js:

1. Push code to GitHub
2. Connect to Vercel
3. Add your custom domain
4. Done!

## What to Upload:

### For Static Export:
- Everything in `apps/fe/out` folder
- Upload via FTP/SFTP to your `public_html` or `www` directory

### For Node.js Hosting:
- Upload entire `apps/fe` folder
- Run `pnpm install` and `pnpm build` on server
- Run `pnpm start` or use PM2

## Notes:
- Your app uses client-side rendering ("use client"), so static export should work fine
- Make sure your hosting supports the file size (especially if using static export)
- Check your hosting provider's documentation for Node.js version requirements

