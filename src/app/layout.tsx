import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/components/ui/font";
import Navbar from "@/components/share/nav/Navbar";
import Footer from "@/components/share/footer/Footer";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "System-Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
