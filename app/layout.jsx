import "./globals.css";
import React from "react";

export const metadata = {
  title: "Karan",
  description: "Portfolio Karan",
  // icons: "/favicon.ico"
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        {children}
      </body>
    </html>
  );
}
