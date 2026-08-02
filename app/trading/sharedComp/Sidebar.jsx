import React from "react";
import {
  LayoutDashboard,
  LineChart,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";

const menuItems = [
  {
    name: "Trading Dashboard",
    icon: LayoutDashboard,
    path: "/trading",
  },
  {
    name: "Macro Information Check",
    icon: BarChart3,
    path: "trading/aMacroCheck",
  },
  {
    name: "Market Bias",
    icon: BarChart3,
    path: "trading/bMarketBias",
  },
];

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-zinc-200 bg-white">

      {/* Logo */}

      <div className="flex h-16 items-center border-b border-zinc-200 px-5">
        <div>
          <h1 className="text-lg font-bold text-zinc-900">
            TradeDesk
          </h1>

          <p className="text-xs text-zinc-500">
            Trading Dashboard
          </p>
        </div>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-1 p-4">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href={item.path}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900"
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </a>
          );
        })}

      </nav>

      {/* Bottom */}

      <div className="border-t border-zinc-200 p-4">

        <a
          href="/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900"
        >
          <Settings size={19} />
          <span>Settings</span>
        </a>

        <button
          className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-red-600"
        >
          <LogOut size={19} />
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;
