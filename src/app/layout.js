import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  variable: "--font-pt-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "PT - Paresh Textile | Wholesale Fabric Sourcing Ahmedabad",
  description: "Premium B2B wholesale textile showroom in Ahmedabad, Gujarat. Source high-quality suiting, shirting, linen, and ceremony wear fabrics directly from trusted mill partners.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
