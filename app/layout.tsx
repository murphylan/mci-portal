import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default:
      "Murphy Code Innovations, LLC — Enterprise Software Architecture & Cloud-Native Consulting",
    template: "%s — Murphy Code Innovations, LLC",
  },
  description:
    "MCI is an Austin software firm. We design and build enterprise systems — distributed architecture, cloud-native platforms, API-first integration, and DevOps engineering. An architect leads the work.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
