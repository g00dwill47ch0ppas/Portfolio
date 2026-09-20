import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gosego Sebaetse | Portfolio",
  description: "Virtual CV and portfolio of Gosego Oduetse Goodwill Sebaetse — BSc IT & Honours student at North-West University.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
