import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "This is a professional portfolio website designed with nextjs.",
  keywords: [
    "Mubashir",
    "Mubashir Ali Portfolio",
    "Planner",
    "Ahrefs",
    "SEMrush",
    "mubashir-ali.vercel.app",
    "mubashirAlibalti",
    "Portfolio",
    "Mubashir Portfolio ",
    "Mubashir Ali website",
    "Awesome Portfolio",
    "website",
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="./images/pro-.jpg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

