"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Image,
  Package,
  FileText,
  Settings,
  LogOut,
  Wrench,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Manage Gallery",
    href: "/admin/manageGallery",
    icon: Image,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    name: "Projects",
    href: "/admin/projects",
    icon: FileText,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r border-zinc-200 bg-white lg:flex lg:flex-col">

      {/* Logo */}
      <div className="flex h-20 items-center gap-3 border-b border-zinc-200 px-8">
        <div className="rounded-xl bg-zinc-900 p-2 text-white">
          <Wrench size={20} />
        </div>

        <div>
          <h2 className="font-semibold text-zinc-900">
            Premium Bike
          </h2>

          <p className="text-sm text-zinc-500">
            Admin Panel
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-5">

        {links.map((link) => {
          const Icon = link.icon;

          const active =
            pathname === link.href ||
            pathname.startsWith(link.href + "/");

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:bg-zinc-100"
              }`}
            >
              <Icon size={20} />

              <span>{link.name}</span>
            </Link>
          );
        })}

      </nav>

      {/* Footer */}
      <div className="border-t border-zinc-200 p-5">

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-zinc-600 transition hover:bg-red-50 hover:text-red-600">
          <LogOut size={20} />

          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;