import ToasterProvider from "./context/ToasterProvider";
import { TokenProvider } from "./context/TokenContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Risk Protocol",
  description: "Real time cryptocurrency dashoard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <TokenProvider>{children}</TokenProvider>
      </body>
    </html>
  );
}
