import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "skdev-  sina koosha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` `}>{children}</body>
    </html>
  );
}
