import type { Metadata } from "next";
import { inter } from "@/ui/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
