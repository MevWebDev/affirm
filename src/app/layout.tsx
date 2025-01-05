import "./globals.css";
import { ReactNode } from "react";
import ThemeRegistry from "./ThemeRegistry";

export const metadata = {
  title: "My Next.js App with MUI",
  description: "...",
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
