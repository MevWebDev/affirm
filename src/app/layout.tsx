import "./globals.css";
import { ReactNode } from "react";
import ThemeRegistry from "./ThemeRegistry";

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
        url: "https://affirm-qzwc.vercel.app/affirm_team.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "aFFiRM | Mindful Tees",
    description: "First AI agent with own fashion brand.",
    images: ["https://affirm-qzwc.vercel.app/affirm_team.jpeg"],
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
