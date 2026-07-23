import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  variable: "--font-pt-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PT - Paresh Textile | Wholesale Fabric Sourcing Ahmedabad",
  description: "Premium B2B wholesale textile showroom in Ahmedabad, Gujarat. Source high-quality suiting, shirting, linen, and ceremony wear fabrics directly from trusted mill partners.",
  keywords: [
    "Paresh Textile",
    "Paresh Textile Ahmedabad",
    "wholesale fabric supplier ahmedabad",
    "textile showroom ahmedabad",
    "wholesale suiting and shirting fabric",
    "B2B fabric sourcing gujarat",
    "bulk fabric wholesale india",
    "linen fabrics wholesale ahmedabad",
    "ceremony wear fabric supplier",
    "textile wholesaler gujarat",
    "cloth market ahmedabad"
  ],
  verification: {
    google: "IFEo_oGRlJ6YFwXZi7UfcC2USeVgLbPlNWKjuDhJaVk",
    other: {
      "msvalidate.01": ["3AC6449835AF534C9C84047CED94C2CE"],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NLD9F4RC4Q"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NLD9F4RC4Q');
        `}
      </Script>
    </html>
  );
}

