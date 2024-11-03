import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mubashir Aliyaar",
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
    "https://codewithbismillah.vercel.app",
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="./images/pro-.jpg" sizes="any" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5931838593236969"
     crossorigin="anonymous"></script>
     <title>Mubashir Aliyaar</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

