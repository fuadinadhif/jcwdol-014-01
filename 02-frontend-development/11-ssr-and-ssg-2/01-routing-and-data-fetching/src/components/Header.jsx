"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={{ backgroundColor: "teal", color: "white" }}>
      <h1>The Next News</h1>
      <nav>
        <ul>
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/hot-news"
              className={pathname === "/hot-news" ? "active" : ""}
            >
              Hot News
            </Link>
          </li>
          <li>
            <Link
              href="/latest-news"
              className={pathname === "/latest-news" ? "active" : ""}
            >
              Latest News
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
          <li>
            <Link href="/404" className={pathname === "/404" ? "active" : ""}>
              404
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
