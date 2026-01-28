import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using next/font/google is better for performance
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "TRANSBETUME | Transporte Pesado & Logística",
  description: "Transporte pesado, logística estratégica e infraestrutura em movimento. A TransBetume é parceira de grandes obras e operações industriais em Angola.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO">
      <body
        className={`${outfit.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
