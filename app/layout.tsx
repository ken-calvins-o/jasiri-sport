import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jasiri – Africa's Sports Community & Data Platform",
  description:
    "Jasiri is Africa's one-stop digital ecosystem for sports. Connect with athletes, institutions, and service providers across the continent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
