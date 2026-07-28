import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        {/* Brand */}
        <div className="max-w-sm">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-zinc-900"
          >
            Garage<span className="text-zinc-500">.</span>
          </Link>

          <p className="mt-4 text-sm leading-7 text-zinc-600">
            A collection of our work, our passion, and the motorcycles we've had
            the privilege to service and restore.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Navigation
          </h3>

          <ul className="space-y-3 text-sm text-zinc-600">
            <li>
              <Link href="/" className="hover:text-zinc-900 transition-colors">
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                className="hover:text-zinc-900 transition-colors"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-zinc-900 transition-colors"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-zinc-900 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Contact
          </h3>

          <div className="space-y-3 text-sm text-zinc-600">
            <p>+880 1XXX-XXXXXX</p>
            <p>info@garage.com</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} Garage. All rights reserved.</p>

          <p>
            Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;