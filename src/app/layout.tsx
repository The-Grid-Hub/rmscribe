import type { Metadata } from "next";
import "./globals.css";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "RMScribe Consulting Ltd | Documentation & Conference Services",
  description:
    "RMScribe Consulting Limited is a Nigerian documentation and conference services firm specialising in rapporteurship, facilitation, and knowledge management for international organisations, donor-funded programmes, and civil society initiatives.",
  keywords: [
    "rapporteur services Nigeria",
    "documentation services",
    "conference services",
    "knowledge management",
    "scriptwriting Nigeria",
    "RMScribe Consulting",
  ],
  authors: [{ name: "RMScribe Consulting Ltd" }],
  openGraph: {
    title: "RMScribe Consulting Ltd",
    description:
      "We help you capture the heart of your meetings and events.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
