# 🛍️ AFG Market - Product Catalog

<div align="center">
  
  ![Version](https://img.shields.io/badge/version-1.0.0-gold?style=for-the-badge&labelColor=223322)
  ![React](https://img.shields.io/badge/React-18.3.1-2a4a3a?style=for-the-badge&logo=react&logoColor=white&labelColor=223322)
  ![Router](https://img.shields.io/badge/Router-7.4.0-c6a43f?style=for-the-badge&logo=reactrouter&logoColor=white&labelColor=223322)
  ![License](https://img.shields.io/badge/license-MIT-1e4a5f?style=for-the-badge&labelColor=223322)

  <h3>✨ A Luxurious Multi-Page Product Catalog with Modern Glass Morphism Design ✨</h3>

  <img src="./screenshots/home.png" alt="Home Page" width="800" style="border-radius: 20px; border: 2px solid #c6a43f; box-shadow: 0 20px 40px rgba(0,0,0,0.4);">

</div>

---

## 📋 **Table of Contents**
- [✨ Overview](#-overview)
- [🚀 Live Demo](#-live-demo)
- [📁 Project Structure](#-project-structure)
- [🎨 Design Features](#-design-features)
- [💫 Routes](#-routes)
- [📦 Products](#-products)
- [💻 Technologies Used](#-technologies-used)
- [⚙️ Installation](#️-installation)
- [🎯 Usage](#-usage)
- [📸 Screenshots](#-screenshots)
- [👩‍💻 Developer](#-developer)

---

## ✨ **Overview**

**AFG Market** is a premium e-commerce product catalog built with **React Router v7**. This project demonstrates advanced routing concepts combined with a luxurious, modern user interface featuring:

- 🌟 **Glass Morphism** design with floating elements
- 🎭 **Animated background shapes** with smooth movements
- 💎 **Gradient text** and golden accents
- 🎪 **Responsive grid layouts** for all screen sizes
- 🔮 **Hover effects** with 3D transformations

---

## 🚀 **Live Demo**

> *Coming soon...*

---

## 📁 **Project Structure**
📦 product-catalog
├── 📂 public
├── 📂 src
│ ├── 📂 components
│ │ ├── 📄 Navbar.jsx
│ │ └── 📄 Navbar.css
│ ├── 📂 pages
│ │ ├── 📄 Home.jsx
│ │ ├── 📄 Home.css
│ │ ├── 📄 ProductsLayout.jsx
│ │ ├── 📄 ProductsLayout.css
│ │ ├── 📄 ProductList.jsx
│ │ ├── 📄 ProductList.css
│ │ ├── 📄 ProductDetails.jsx
│ │ ├── 📄 ProductDetails.css
│ │ ├── 📄 NotFound.jsx
│ │ └── 📄 NotFound.css
│ ├── 📂 data
│ │ └── 📄 products.js
│ ├── 📄 App.jsx
│ ├── 📄 App.css
│ └── 📄 main.jsx
├── 📄 index.html
├── 📄 package.json
├── 📄 README.md
└── 📄 vite.config.js

text

---

## 🎨 **Design Features**

### 🎯 **Color Palette**
| Color | Hex | Usage |
|-------|-----|-------|
| Forest Green | `#223322` | Primary dark theme |
| Deep Navy | `#1a2a4a` | Background accents |
| Emerald | `#2a4a3a` | Gradients |
| Teal | `#1e4a5f` | Secondary accents |
| Gold | `#c6a43f` | Highlights & active states |
| Soft White | `#f0f4fa` | Text |

### ✨ **Visual Effects**
- **Floating Shapes**: 5 animated background elements with blur effects
- **Glass Morphism**: Backdrop blur with semi-transparent backgrounds
- **Glow Animations**: Pulsing golden glows on interactive elements
- **3D Transforms**: Cards lift on hover with smooth transitions
- **Gradient Text**: Multi-color animated text for headings
- **Custom Scrollbar**: Themed scrollbar matching the design

### 🖋️ **Typography**
- **Headings**: Comic Neue (Playful & Balloon-like)
- **Body**: Poppins (Modern & Clean)
- **Navigation**: Quicksand (Elegant & Readable)

---

## 🧭 **Routes**

| Path | Page | Description |
|------|------|-------------|
| `/` | **Home** | Landing page with hero section & features |
| `/products` | **Products Layout** | Container with outlet for nested routes |
| `/products` | **Product List** | Grid of all Afghan products |
| `/products/:id` | **Product Details** | Individual product information |
| `*` | **Not Found** | Custom 404 page |

---

## 📦 **Products**

The catalog features **12 authentic Afghan products** across multiple categories:

### 🏷️ **Categories**
- 🏺 **Carpets & Rugs** - Herati handwoven silk carpets
- 🌿 **Food Products** - Premium saffron, raisins, traditional bread
- 👔 **Clothing** - Leather jackets, embroidered dresses
- 🏗️ **Construction** - High-quality cement
- 🚗 **Vehicles** - Toyota Corolla listings
- 💎 **Jewelry** - Gold necklace, silver bracelets
- 🕶️ **Accessories** - Handcrafted sunglasses

### 🌟 **Featured Products**
| ID | Product | Price | Category |
|----|---------|-------|----------|
| 1 | Herati Handwoven Carpet | $1,299 | Carpets |
| 2 | Herat Saffron | $89 | Food |
| 3 | Balkh Leather Jacket | $449 | Clothing |
| 4 | Herat Cement Type 5 | $8.5 | Construction |
| 5 | Toyota Corolla 2020 | $22,500 | Vehicles |
| 6 | Herat Sunglasses | $65 | Accessories |
| 7 | Balkh Golden Raisins | $12 | Food |
| 8 | Gold Necklace | $1,899 | Jewelry |
| 9 | Toyota Corolla 2019 | $18,900 | Vehicles |
| 10 | Cement Type 2 | $6.5 | Construction |
| 11 | Traditional Afghan Bread | $2.5 | Food |
| 12 | Balkhi Embroidery Dress | $189 | Clothing |

---

## 💻 **Technologies Used**

<div align="center">

| Technology | Version | Purpose |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-18.3.1-2a4a3a?logo=react) | 18.3.1 | UI Library |
| ![React Router](https://img.shields.io/badge/Router-7.4.0-c6a43f?logo=reactrouter) | 7.4.0 | Navigation & Routing |
| ![Vite](https://img.shields.io/badge/Vite-7.3.1-1e4a5f?logo=vite) | 7.3.1 | Build Tool |
| ![CSS3](https://img.shields.io/badge/CSS3-3-223322?logo=css3) | 3 | Styling |

</div>

### 📚 **Key Dependencies**
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.4.0",
  "@fontsource/poppins": "^5.0.0",
  "@fontsource/raleway": "^5.0.0",
  "@fontsource/quicksand": "^5.0.0",
  "@fontsource/comic-neue": "^5.0.0"
}
⚙️ Installation
📋 Prerequisites
Node.js (v18 or higher)

npm or yarn

Git

🚀 Steps
Clone the repository

bash
git clone https://github.com/Fazl-2002/product-catalog.git
Navigate to project folder

bash
cd product-catalog
Install dependencies

bash
npm install
Start the development server

bash
npm run dev
Open in browser

text
http://localhost:5173
🎯 Usage
🏠 Home Page
Explore the hero section with animated gradient text

View feature cards with hover effects

Click "Explore Collection" to browse products

📋 Products Page
Browse all products in a responsive grid

Each card displays:

Product name

Category

Price

Short description

"View Details" link

🔍 Product Details
Click "View Details" on any product

See complete product information

Use "Back" button or "Back to Products" link

Invalid IDs show custom 404 page

🧭 Navigation
Sticky glass-effect navbar

Active link highlighting with gold border

Smooth hover transitions


👩‍💻 Developer
<div align="center"> <h3>Farahnaz Fazl</h3>
https://img.shields.io/badge/GitHub-Fazl--2002-223322?style=for-the-badge&logo=github&logoColor=white

📍 Herat, Afghanistan

✨ Crafted with love and code ✨

</div>
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

<div align="center">
⭐ If you like this project, don't forget to star it! ⭐
https://img.shields.io/badge/Made%2520with-%E2%9D%A4%EF%B8%8F%2520in%2520Afghanistan-c6a43f?style=for-the-badge&labelColor=223322

</div> ```