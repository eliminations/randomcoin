# 🪙 Random Coin

Getting Rich Off Randomness

A chaotic, meme-filled landing page celebrating internet culture through randomly scattered buttons linking to popular memes from 2015-2025.

## 🚀 Features

- **200+ Meme Links** - Randomly scattered across the page
- **Diverse Button Styles** - 8 different button component styles inspired by shadcn/ui sites
- **Random Elements** - Buttons, sizes, colors, positions, and rotations are all randomized
- **Reverse Scrolling** - Scroll up to navigate through the chaos
- **Rainbow Borders** - Sharp-cornered panels with vibrant rainbow gradients
- **Zoom Buttons** - Random zoom-in buttons mixed with meme buttons
- **Loading Skeletons** - Smooth loading states

## 🛠️ Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Graphite Theme** - Custom theme from tweakcn

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

## 🏗️ Build

```bash
# Build for production (static export)
cd apps/fe
pnpm build
```

The built static files will be in `apps/fe/out/`

## 📝 Project Structure

```
randomcoin/
├── apps/
│   ├── fe/          # Frontend (Next.js)
│   └── be/          # Backend (Elysia)
├── pnpm-workspace.yaml
└── package.json
```

## 🌐 Deployment

This project is configured for static export and can be deployed to:
- Any static hosting (Spaceship, Netlify, Vercel, etc.)
- GitHub Pages
- Traditional web hosting

See `DEPLOYMENT.md` for detailed deployment instructions.

## 🎨 Design

- Sharp corners (no rounded edges)
- Rainbow gradient borders
- Monochrome with colorful buttons
- Random positioning and styling

## 📄 License

ISC

---

Built with randomness and chaos ✨

