import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Richard Bekhazi | Technical Program Manager",
  description: "Senior Technical Program Leader and Platform Strategy expert based in Ottawa, Canada. Specializing in FinTech, Data, and Engineering Management.",
  keywords: ["Technical Program Manager", "Engineering Manager", "Data Strategy", "Bank of Canada", "FinTech", "Remote Leader"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#F9FAFB] text-slate-900 antialiased selection:bg-slate-900 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}