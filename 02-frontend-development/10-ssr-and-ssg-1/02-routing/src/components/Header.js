"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={{ background: "teal", color: "white", padding: "20px" }}>
      <h1>Header</h1>
      <nav>
        <ul>
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className={pathname === "/register" ? "active" : ""}
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
