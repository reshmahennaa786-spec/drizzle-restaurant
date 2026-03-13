````markdown
# 🍽️ Drizzle — Fine Dining Restaurant Website

> *Dine in the Moonlight* — A luxury Indian fine dining experience near Courtallam Falls, Tenkasi.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-drizzle--restaurant--vdw9.vercel.app-c9a84c?style=for-the-badge&logo=vercel&logoColor=white)](https://drizzle-restaurant-vdw9.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

---

## ✨ Overview

**Drizzle** is a fully responsive, luxury fine dining restaurant website built with **React** and **Vite**. Designed with a black and gold aesthetic, it showcases an Indian fine dining menu with modern web interactions and seamless WhatsApp reservation integration.

---

## 🖥️ Live Demo

🔗 **[drizzle-restaurant-vdw9.vercel.app](https://drizzle-restaurant-vdw9.vercel.app)**

---

## 📸 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero, signature plates, menu glimpse, story section |
| **Menu** | 6-tab Indian fine dining menu with tasting menu |
| **Experience** | Philosophy, pillars, stats, heritage story |
| **Contact** | WhatsApp reservation form and location info |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework |
| **Vite 7** | Build tool and dev server |
| **React Router DOM 7** | Client-side routing |
| **CSS** | Component-scoped styling |
| **Vercel** | Hosting and deployment |

---

## ✦ Features

- ✅ Custom gold cursor with lagging ring animation
- ✅ Scroll reveal animations using `IntersectionObserver`
- ✅ Hero parallax background effect
- ✅ Hide-on-scroll navbar that reappears on scroll up
- ✅ Fullscreen mobile menu with smooth transitions
- ✅ Tab-switching menu with 6 Indian fine dining categories
- ✅ WhatsApp booking integration with pre-filled enquiry message
- ✅ 3D card tilt on dish cards
- ✅ Animated marquee text strip
- ✅ Fully responsive — mobile, tablet, desktop
- ✅ SPA routing with `vercel.json`

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Gold | `#c9a84c` |
| Light Gold | `#e2c47a` |
| Background | `#080808` |
| Display Font | `Cormorant Garamond` |
| Body Font | `Jost` |

---

## 📁 Project Structure

```
drizzle-restaurant/
├── public/
│   └── images/
│       ├── hero/            → hero-bg.png
│       ├── dishes/          → prawn-bisque.png · lamb.png · dessert.png
│       └── gallery/         → story-dining.png · exp-dish.png
│
├── src/
│   ├── components/
│   │   ├── Cursor.jsx       # Custom gold cursor
│   │   ├── Navbar.jsx       # Sticky hide/show navbar
│   │   └── Footer.jsx       # Site footer
│   ├── hooks/
│   │   ├── useScrollReveal.js   # IntersectionObserver reveal
│   │   └── useWhatsApp.js       # WhatsApp booking hook
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── Menu.jsx         # Full menu with tabs
│   │   ├── Experience.jsx   # About & experience
│   │   └── Contact.jsx      # Reservation & contact
│   └── styles/
│       └── global.css       # Design tokens & utilities
│
├── index.html
├── vite.config.js
├── vercel.json              # SPA routing fix
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18+`
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/reshmahennaa786-spec/drizzle-restaurant.git

# Navigate to project
cd drizzle-restaurant

# Install dependencies
npm install

# Start dev server
npm run dev
```

> Runs at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📱 WhatsApp Integration

Update your number in `src/hooks/useWhatsApp.js`:

```js
const WHATSAPP_NUMBER = '91XXXXXXXXXX' // replace with real number
```

---

## ☁️ Deployment

Deployed on **Vercel** with automatic deployments on every push to `main`.

```bash
git add .
git commit -m "your update message"
git push origin main
```

> Vercel auto-deploys within ~1 minute ✅

---

## 📄 License

Private commercial use. All rights reserved © 2025 Drizzle Restaurant.

---

<p align="center">Built with ❤️ for Drizzle Fine Dining, Courtallam</p>
````
