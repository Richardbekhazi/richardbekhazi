import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Richard Bekhazi | Technical Program Leader",
  description: "Executive Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* FIX: Removed 'bg-[#F9FAFB]' and 'text-slate-900'. 
        Added 'bg-slate-950' and 'text-slate-200' for dark mode visibility.
      */}
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-slate-950 text-slate-200 antialiased selection:bg-blue-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}