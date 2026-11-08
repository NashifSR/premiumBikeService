"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../Context/AuthContext";
import { Menu, X } from "lucide-react"; // Make sure lucide-react is installed, or use custom SVG

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/products", label: "Store" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const authLinks = [
  { href: "/digitalMarketing", label: "Digital Marketing" },
  { href: "/socialmediamarketing", label: "SMM" },
  { href: "/searchengineoptimization", label: "SEO" },
  { href: "/trading", label: "Trading" },
];

const Navbar = () => {
  const { user, loginWithGoogle, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* Logo */}
        <Link
          href="/blog"
          className="text-2xl font-bold tracking-tight text-zinc-900"
        >
          Garage<span className="text-zinc-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-700 transition hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}

          {/* Conditional User Protected Links */}
          {user &&
            authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-700 transition hover:text-zinc-900"
              >
                {link.label}
              </Link>
            ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/8801XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
          >
            WhatsApp
          </a>

          {user ? (
            <>
              <Link
                href="/admin"
                className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={loginWithGoogle}
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-b border-zinc-200 bg-white px-4 py-6 shadow-lg lg:hidden">
          <div className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-700 transition hover:text-zinc-900"
              >
                {link.label}
              </Link>
            ))}

            {user &&
              authLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-700 font-semibold transition hover:text-zinc-900"
                >
                  {link.label}
                </Link>
              ))}

            <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-zinc-100">
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg bg-green-600 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-green-700"
              >
                WhatsApp
              </a>

              {user ? (
                <>
                  <Link
                    href="/admin"
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-center text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-zinc-800"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    loginWithGoogle();
                    setIsOpen(false);
                  }}
                  className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-center text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;