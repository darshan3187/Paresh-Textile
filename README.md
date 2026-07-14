# PT - Paresh Textile | B2B Wholesale Sourcing Hub

[![Build Status](https://img.shields.io/badge/build-passing-success?style=flat-square)](#)
[![Next.js Version](https://img.shields.io/badge/next.js-16.2.10-blue?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![React Version](https://img.shields.io/badge/react-19.2.4-cyan?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS Version](https://img.shields.io/badge/tailwindcss-v4.0-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-UNLICENSED-grey?style=flat-square)](#)

A high-performance, premium web platform designed to streamline wholesale fabric sourcing for **PT - Paresh Textile**, a leading B2B textile showroom in Dudheshwar, Ahmedabad, Gujarat with 30+ years of sourcing expertise.

---

## What the Project Does

This platform serves as a digital showroom for B2B buyers (including retailers, garment manufacturers, tailors, and corporate uniform coordinators). It presents Paresh Textile's inventory of **5,000+ fabric variants** (suiting, shirting, linen, and celebration/wedding wear) across four premium authorized brand partners: **Absoluto**, **Donear**, **Meetra**, and **Pravar**.

Instead of a traditional B2C checkout, the platform implements a high-trust, friction-free B2B workflow:
1. **Interactive Fabric Catalog**: Browsing, filtering, and searching fabrics by category, pattern, composition, or brand.
2. **PDF Catalog Viewers**: Interactive, inline embedding of large catalog PDFs (with automatic viewport adjustments for mobile vs. desktop screen sizes).
3. **WhatsApp Enquiry System**: Dynamic draft generator that compiles selected fabric specifications (brand, variant name, color name, price per meter) into a formatted WhatsApp draft message to enable instant showroom booking and pricing confirmation.

---

## Why the Project is Useful

- **B2B-First Sourcing Workflow**: Built around custom bulk negotiation habits rather than standard cart checkouts, making it natural and efficient for corporate and retail buyers.
- **Search Engine Optimization (SEO) Built-In**: Fully optimized for organic discovery with:
  - Canonical links across all routes.
  - Page-specific Metadata (title, description, and social Graph tags).
  - Dynamic `sitemap.xml` and `robots.txt` generation.
  - Injected structured JSON-LD schemas (`LocalBusiness` and `FAQPage`).
- **Responsive & Accessible Design**: Built with a mobile-first philosophy featuring an app-like sticky bottom nav bar, accessible color contrast ratios (> 15:1 for body copy), and instant Google Font rendering.
- **High Security & Near-Zero Attack Surface**: Static-friendly deployment with zero database dependencies and strict Content Security Policy (CSP) headers protecting against clickjacking (X-Frame-Options) and XSS.

---

## How Users Can Get Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18.0.0 or higher
- npm or another Node package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/pt-frontend.git
   cd pt-frontend
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build and Deploy

To compile the application to an optimized static production build:

```bash
# Generate the production build
npm run build

# Start the Next.js server in production mode
npm run start
```

---

## Project Structure

```
pt-frontend/
├── public/                 # Static assets (brand logos, catalog PDFs, images)
└── src/                    # Main source directory
    ├── app/                # Next.js App Router (pages and configuration)
    │   ├── about/          # About us pages and team biographies
    │   ├── catalog/        # Catalog listings & dynamic brand-level templates
    │   ├── contact/        # Location maps & message form layout
    │   ├── globals.css     # CSS Variables, Tailwind v4 theme, and animations
    │   ├── layout.js       # Core layout container (fonts & default SEO parameters)
    │   ├── page.js         # Landing page content
    │   ├── robots.js       # Dynamic search engine crawler instructions
    │   └── sitemap.js      # Dynamic XML sitemap generator
    ├── components/         # Shared UI modular components
    │   ├── BrandCatalogClient.js # Client-side dynamic product search for brands
    │   ├── CatalogClient.js      # Main multi-brand catalog display
    │   ├── PDFCatalogViewer.js   # Interactive PDF frame controls
    │   ├── PTAbout.js            # Sourcing philosophies & member profiles
    │   ├── PTBottomNav.js        # Mobile tab navigation bar
    │   ├── PTFooter.js           # Layout footer
    │   └── PTNavBar.js           # Desktop top header navigation
    └── data/               # Static dataset definitions
        └── catalogData.js  # Catalog catalog entries & reels config
```

---

## Where Users Can Get Help

- **Developer Documentation**: For detailed API endpoints, see the Next.js App Router documentation at [nextjs.org/docs](https://nextjs.org/docs).
- **Showroom Sourcing Help**: Contact the Paresh Textile sales team via [WhatsApp Business Chat](https://wa.me/919327387674).
- **Technical Queries**: Open a GitHub Issue to report bugs or request new layout components.

---

## Who Maintains and Contributes

This project is officially maintained and configured by **PT - Paresh Textile**. 

Contributions are welcome! Please read the contribution instructions at `docs/CONTRIBUTING.md` before submitting Pull Requests (PRs). For licensing terms, please refer to the `LICENSE` file in the root directory.
