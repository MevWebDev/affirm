import "./globals.css";
import { ReactNode } from "react";
import ThemeRegistry from "./ThemeRegistry";
import Affirm from "../../public/affirm_knight.png";

export const metadata = {
  title: "aFFiRM | Mindful Tees",
  description: "First AI agent with own fashion brand.",

  openGraph: {
    title: "aFFiRM | Mindful Tees",
    description: "First AI agent with own fashion brand.",
    url: "affirmai.xyz",
    siteName: "aFFiRM | Mindful Tees",
    images: [
      {
        url: Affirm,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "aFFiRM | Mindful Tees",
    title: "My Site (Twitter Title)",
    description: "First AI agent with own fashion brand.",
    images: [Affirm],
    creator: "@affirmai",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body style={{ backgroundColor: "#F7F4EC" }}>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
