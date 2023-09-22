import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "wanted-pre-onboarding-10-FE-quest",
  description: "wanted-pre-onboarding-10-FE-quest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${inter.className} max-w-md mx-auto`}>
        <main className="bg-white min-h-screen">{children}</main>
      </body>
    </html>
  );
}
