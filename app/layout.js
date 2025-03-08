import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import NavigationBar from "@/app/navigation-bar";
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Providers } from "./providers";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Meetbible",
  description: "Meetbible charging",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
      <NavigationBar/> {/* Agrega la barra de navegación aquí */}
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
