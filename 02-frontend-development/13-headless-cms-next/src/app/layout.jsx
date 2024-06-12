import { Inter } from "next/font/google";
import Link from "next/link";

import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full Belly",
  description: "Fullfill your belly everyday.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  dark:bg-neutral-950 dark:text-white`}
      >
        <header className="max-w-screen-xl mx-auto p-6">
          <Link href={"/"}>
            <h1 className="text-center text-7xl">
              Full
              <span className="font-bold">Belly</span>
            </h1>
          </Link>
          <h2 className="text-center uppercase text-2xl mt-4 leading-none">
            Fullfill
            <br />
            <span className="font-extralight">your</span> belly
          </h2>
          <div className="flex items-center justify-center gap-4 mt-8">
            <nav>
              <ul className="flex gap-4">
                {[
                  ["🏠", "/"],
                  ["Kitchen Tips", "#"],
                  ["Cuisines", "#"],
                  ["About Us", "#"],
                ].map((menu) => (
                  <li>
                    <Link
                      href={menu[1]}
                      className="border-2 border-black py-2 px-6 rounded-full dark:border-white"
                    >
                      {menu[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </header>
        <main className="max-w-screen-xl mx-auto p-6 ">{children}</main>
        <footer className="text-center mt-24">
          <p className="bg-neutral-950 text-white py-6">© 2024 FullBelly ❤️ </p>
        </footer>
      </body>
    </html>
  );
}
