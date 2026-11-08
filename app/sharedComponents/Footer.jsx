import Link from "next/link";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/products", label: "Store" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Engine Overhaul & Tuning",
  "Periodic Maintenance",
  "Electrical Diagnosis",
  "Custom Fabrication",
];

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      {/* Main Footer Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-zinc-900 inline-block"
            >
              Garage<span className="text-zinc-500">.</span>
            </Link>

            <p className="text-sm leading-relaxed text-zinc-600">
              A collection of our work, our passion, and the motorcycles we've
              had the privilege to service and restore.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Navigation
            </h3>

            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 transition-colors hover:text-zinc-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Services
            </h3>

            <ul className="space-y-2.5 text-sm text-zinc-600">
              {serviceLinks.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Contact Us
            </h3>

            <div className="space-y-2.5 text-sm text-zinc-600">
              <p>
                <a
                  href="tel:+8801977200108"
                  className="transition-colors hover:text-zinc-900"
                >
                  +880 1977 200108
                </a>
              </p>
              <p className="break-all">
                <a
                  href="mailto:auddinnajma@gmail.com"
                  className="transition-colors hover:text-zinc-900"
                >
                  auddinnajma@gmail.com
                </a>
              </p>
              <p>Tangail, Bangladesh</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-zinc-200 bg-zinc-50/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:px-6 py-6 text-center text-xs text-zinc-500 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Garage. All rights reserved.</p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-zinc-700">
              FrameHouse Creative
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;