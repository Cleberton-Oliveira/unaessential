import type { Metadata } from "next";
import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MuiThemeProvider } from "./mui-theme-provider";
import { MainHeader } from "./components/MainHeader";
import { MainFooter } from "./components/MainFooter";
import { FloatingWhatsappButton } from "./components/FloatingWhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unaessential",
  description: "Estetica e saúde integrativa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MuiThemeProvider>
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MainHeader />
            <main style={{ flex: 1 }}>{children}</main>
            <MainFooter />
          </div>
          <FloatingWhatsappButton />
        </MuiThemeProvider>
      </body>
    </html>
  );
}
