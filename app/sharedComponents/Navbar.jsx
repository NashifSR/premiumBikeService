import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-zinc-900"
        >
          Garage<span className="text-zinc-400">.</span>
        </Link>
        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            href="/"
            className="text-zinc-700 transition hover:text-zinc-400"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-zinc-700 transition hover:text-zinc-400"
          >
            Projects
          </Link>
          <Link
            href="/gallery"
            className="text-zinc-700 transition hover:text-zinc-400"
          >
            Gallery
          </Link>
          <Link
            href="/products"
            className="text-zinc-700 transition hover:text-zinc-400"
          >
            Store
          </Link>
          <Link
            href="/about"
            className="text-zinc-700 transition hover:text-zinc-400"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-zinc-700 transition hover:text-zinc-400"
          >
            Contact
          </Link>
        </div>
        {/* CTA */}
        <a
          href="https://wa.me/8801XXXXXXXXX"
          target="_blank"
          className="
            rounded-lg
            bg-zinc-900
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:bg-zinc-800
          "
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
};

export default Navbar;