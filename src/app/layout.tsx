import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Store",
  description: "E-commerce feito com Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body
          className={`${inter.className} antialiased min-h-screen bg-slate-700`}
        >
          <NavBar />
          <main className="p-16">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
