# 🧰 My Tools - Usage Guide

> Curated AI tools to boost your productivity

## 🎯 Features

- 🔍 **Real-time Search** - Filter tools instantly by keyword
- 📂 **Categories** - 6 AI tool categories: Chat, Image, Writing, Code, Video, Audio
- 📱 **Responsive** - Perfect on desktop, mobile, and tablet
- ⚡ **Lightweight** - Pure static page, loads instantly
- 🎨 **Beautiful** - Dark theme, easy on the eyes

## 📂 Project Structure

```
my-tools/
├── index.html          # Main page
├── styles.css          # Styles
├── script.js           # Scripts
├── data/
│   └── tools.json      # ⭐ Tool data config file
└── docs/
    └── README-en.md    # English guide
```

## ✏️ How to Add/Edit Tools

Just edit `data/tools.json` to add or remove AI tools.

### Config Explained

```json
{
  "meta": {
    "siteName": "My Tools",
    "siteDescription": "Curated AI tools",
    "author": "Your Name"
  },
  "categories": [
    {
      "id": "chatbot",           // Category ID (unique)
      "name": "AI Chat",          // Category name
      "icon": "💬",               // Category icon (emoji)
      "description": "Chat assistants",
      "tools": [
        {
          "name": "ChatGPT",      // Tool name
          "url": "https://...",   // ⭐ Tool URL
          "description": "Description",
          "icon": "https://..."   // Tool icon (optional)
        }
      ]
    }
  ]
}
```

### Steps to Add a New Tool

1. Open `data/tools.json`
2. Find the category you want
3. Add a new object to the `tools` array
4. Save and refresh the page

### Add a New Category

1. Add a new category object to the `categories` array
2. Set a unique ID, name, icon, and description
3. Add a `tools` array with your tools

## 🚀 Deployment

### Option 1: GitHub Pages (Free, Recommended)

1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Source: select `main` branch and `/ (root)`
5. Wait for deployment, access at `https://yourusername.github.io/repo-name`

### Option 2: Vercel (Free, Recommended)

1. Sign up at [Vercel](https://vercel.com)
2. Import your GitHub repository
3. No config needed, just Deploy
4. Get a free domain

### Option 3: Local Preview

Open `index.html` directly in your browser.

> ⚠️ Note: Opening locally may fail to load `data/tools.json` (CORS restriction).
> Use a local server instead.

**Start local server with Python:**
```bash
cd /path/to/my-tools
python -m http.server 8080
# Then visit http://localhost:8080
```

## 🔧 Customization

### Change Site Title

Edit `meta.siteName` and `meta.siteDescription` in `data/tools.json`

### Change Colors

Edit the `:root` CSS variables in `styles.css`:
- `--primary`: Primary color
- `--bg-dark`: Background color
- `--text-primary`: Text color

### Change Background Gradient

Edit the `.bg-gradient` selector in `styles.css`

## 📝 Notes

1. **Icon Fallback**: If icon URL fails, 🤖 is shown as placeholder
2. **Search**: Real-time filtering as you type
3. **Categories**: Click category buttons to filter
4. **Links**: All external links open in new tab with security attributes

## 💡 FAQ

**Q: Why can't I see tools when opening index.html locally?**
A: Browser security doesn't allow reading local JSON files. Use a local server or deploy to GitHub Pages/Vercel.

**Q: How do I delete a tool?**
A: Find and remove the tool object in `data/tools.json`.

**Q: How do I reorder categories?**
A: Just change the order of objects in the `categories` array.

---

Made with ❤️ by libaofeng
