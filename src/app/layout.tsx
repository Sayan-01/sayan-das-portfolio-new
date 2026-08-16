import type { Metadata } from "next";
import { LenisOptions } from "lenis";
import ReactLenis from "lenis/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sayan Das — Full-Stack Developer & Product Designer",
  description: "Portfolio of Sayan Das — Full-Stack Developer, Product Designer, and Startup Co-founder building production-ready AI SaaS products and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lenisOptions: LenisOptions = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // A common easing function
    smoothWheel: true,
  };
  return (
    <html
      lang="en"
      className={` h-full antialiased dark`}
    >
      <body
        className="min-h-full flex flex-col dark box"
        cz-shortcut-listen="true"
      >
        <ReactLenis
          root
        >
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
