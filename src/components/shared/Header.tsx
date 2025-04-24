"use client";

import Link from "next/link";

import Nav from "../ui/Nav";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link href="/">
          <h1 className="header-logo">
            Job<span>Chaser</span>
          </h1>
        </Link>
        <Nav />
        <ThemeToggle />
      </div>
    </header>
  );
}
