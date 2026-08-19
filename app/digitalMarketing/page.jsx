"use client";

import { useMemo, useState } from "react";

import { marketingRoles } from "./marketingData";

import WorkAreaCard from "./components/WorkAreaCard";
import Workflow from "./components/Workflow";
import Checklist from "./components/Checklist";
import KPISection from "./components/KPISection";
import ToolsSection from "./components/ToolsSection";
import QuickActions from "./components/QuickActions";
import StatCard from "./components/StatCard";

export default function DigitalMarketing() {
  const [selectedRole, setSelectedRole] = useState(
    marketingRoles[0]
  );

  const [completedTasks, setCompletedTasks] = useState({});

  const [search, setSearch] = useState("");

  /* --------------------------------
     Search Work Areas
  -------------------------------- */

  const filteredRoles = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return marketingRoles;
    }

    return marketingRoles.filter((role) => {
      return `${role.title} ${role.short} ${role.description}`
        .toLowerCase()
        .includes(query);
    });
  }, [search]);

  /* --------------------------------
     Checklist
  -------------------------------- */

  const toggleTask = (task) => {
    const key = `${selectedRole.id}-${task}`;

    setCompletedTasks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isCompleted = (task) => {
    return !!completedTasks[
      `${selectedRole.id}-${task}`
    ];
  };

  const completedCount = selectedRole.tasks
    ? selectedRole.tasks.filter(isCompleted).length
    : 0;

  const totalTasks = selectedRole.tasks?.length || 0;

  const progress =
    totalTasks > 0
      ? Math.round((completedCount / totalTasks) * 100)
      : 0;

  /* --------------------------------
     Render
  -------------------------------- */

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* =================================
            HEADER
        ================================= */}

        <header className="mb-8">

          {/* Breadcrumb */}
          <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
            <span>Marketing</span>
            <span>/</span>
            <span>Workspace</span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white shadow-sm">
                  📈
                </span>

                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    Digital Marketing
                  </h1>

                  <p className="mt-1 text-sm text-slate-500">
                    Marketing Workbench
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
                Your central workspace for digital marketing
                workflows, checklists, KPIs, tools, guides,
                and campaign execution.
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              + New Campaign
            </button>
          </div>
        </header>

        {/* =================================
            STATS
        ================================= */}

        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

          <StatCard
            label="Marketing Areas"
            value={marketingRoles.length}
          />

          <StatCard
            label="Current Area"
            value={selectedRole.short}
          />

          <StatCard
            label="Completed"
            value={completedCount}
          />

          <StatCard
            label="Progress"
            value={`${progress}%`}
          />

        </div>

        {/* =================================
            SEARCH
        ================================= */}

        <div className="mb-8">
          <div className="relative">

            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              🔎
            </span>

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search marketing work areas..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>
        </div>

        {/* =================================
            WORK AREAS
        ================================= */}

        <section className="mb-8">

          <div className="mb-4">
            <h2 className="text-lg font-bold text-slate-900">
              Work Areas
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Select the type of marketing work you are
              currently working on.
            </p>
          </div>

          {filteredRoles.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRoles.map((role) => (
                <WorkAreaCard
                  key={role.id}
                  role={role}
                  selected={
                    selectedRole.id === role.id
                  }
                  onClick={() =>
                    setSelectedRole(role)
                  }
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <div className="text-3xl">
                🔎
              </div>

              <h3 className="mt-3 font-semibold text-slate-900">
                No work areas found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Try searching for another marketing area.
              </p>
            </div>
          )}

        </section>

        {/* =================================
            SELECTED WORK AREA HEADER
        ================================= */}

        <section className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <div className="flex items-center gap-4">

              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl">
                {selectedRole.icon}
              </span>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-slate-900">
                    {selectedRole.title}
                  </h2>

                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                    {selectedRole.short}
                  </span>
                </div>

                <p className="mt-1 max-w-2xl text-sm text-slate-500">
                  {selectedRole.description}
                </p>
              </div>

            </div>

            <div className="min-w-40">

              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-500">
                  Checklist Progress
                </span>

                <span className="font-bold text-blue-600">
                  {progress}%
                </span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

            </div>

          </div>

        </section>

        {/* =================================
            MAIN WORKSPACE
        ================================= */}

        <div className="grid gap-6 lg:grid-cols-3">

          {/* =================================
              MAIN COLUMN
          ================================= */}

          <main className="space-y-6 lg:col-span-2">

            {/* Workflow */}

            <Workflow
              workflow={selectedRole.workflow}
            />

            {/* Checklist */}

            <Checklist
              tasks={selectedRole.tasks}
              completedTasks={Object.fromEntries(
                selectedRole.tasks.map((task) => [
                  task,
                  isCompleted(task),
                ])
              )}
              onToggle={toggleTask}
            />

            {/* KPIs */}

            <KPISection
              kpis={selectedRole.kpis}
            />

          </main>

          {/* =================================
              SIDEBAR
          ================================= */}

          <aside className="space-y-6">

            {/* Tools */}

            <ToolsSection
              tools={selectedRole.tools}
            />

            {/* Quick Actions */}

            <QuickActions />

          </aside>

        </div>

      </div>
    </div>
  );
}