"use client";

import { CalendarDays, Menu } from "lucide-react";

const Topbar = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-zinc-200 bg-white px-8">

      <div className="flex items-center gap-4">

        {/* Mobile menu (we'll wire it up later) */}
        <button className="rounded-lg p-2 transition hover:bg-zinc-100 lg:hidden">
          <Menu size={22} />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-zinc-900">
            Dashboard
          </h1>

          <p className="text-sm text-zinc-500">
            Welcome back.
          </p>
        </div>

      </div>

      <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2">

        <CalendarDays size={18} className="text-zinc-500" />

        <span className="text-sm text-zinc-600">
          {today}
        </span>

      </div>

    </header>
  );
};

export default Topbar;