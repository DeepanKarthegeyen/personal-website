Here's a complete `README.md` file for your **deepan-personal-website**, including:

````markdown
# 🌐 My – Personal Website

This is a **mobile-friendly personal portfolio website** built using **React**. It showcases:
- A responsive landing page
- Resume preview and download
- Highlighted projects
- About and contact information

Ideal for job hunting, personal branding, and showcasing tech expertise in .NET, AI, and cloud-native solutions.

---

## 🔧 Tech Stack

- **Frontend:** React, Vite, React Router
- **Styling:** Bootstrap 5
- **Routing:** react-router-dom
- **Assets:** Resume PDF, Profile Image
- **Hosting:** Deployable to Netlify, Vercel, GitHub Pages

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16
- npm

### 📦 Install Dependencies
```bash
npm install
````

### ▶️ Run in Development Mode

```bash
npm run dev
```

This will open the site at `http://localhost:5173`.

---

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized static site in the `dist/` folder.

To preview locally:

```bash
npm run preview
```

---

## 🌍 Deploying to Production

### Option 1: **Vercel**

1. Go to [https://vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Vercel will auto-detect Vite and build with:

   * **Build Command:** `npm run build`
   * **Output Directory:** `dist/`
4. Done! You get a custom URL.

### Option 2: **Netlify**

1. Go to [https://netlify.com](https://netlify.com)
2. Link your GitHub repo
3. Set build settings:

   * **Build Command:** `npm run build`
   * **Publish Directory:** `dist/`
4. Click "Deploy"

### Option 3: **GitHub Pages (Static)**

1. Install the gh-pages plugin

```bash
npm install --save-dev gh-pages
```

2. Add these scripts to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Run:

```bash
npm run deploy
```

---

## 📝 License

MIT – free to use and adapt with attribution.
