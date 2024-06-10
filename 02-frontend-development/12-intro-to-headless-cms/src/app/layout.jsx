import { Inter } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full Belly",
  description: "Fullfill your belly everyday.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="max-w-screen-xl mx-auto p-6">
          <Link href={"/"}>
            <h1 className="text-center text-7xl">
              <span>Full</span>
              <span className="font-bold">Belly</span>
            </h1>
          </Link>
          <h2 className="text-center uppercase text-2xl mt-4">
            Fullfill your belly!
          </h2>
        </header>
        <main className="max-w-screen-xl mx-auto p-6">{children}</main>
        <footer className="text-center mt-12">
          <p className="bg-neutral-950 text-white py-6">© 2024 FullBelly ❤️ </p>
        </footer>
      </body>
    </html>
  );
}
