"use client";

export default function Checklist({
  tasks = [],
  completedTasks,
  onToggle,
}) {
  const completedCount = tasks.filter((task) =>
    completedTasks[task]
  ).length;

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-100 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-bold text-slate-900">
              Execution Checklist
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Complete each task as you execute the campaign.
            </p>
          </div>

          <span className="text-sm font-semibold text-blue-600">
            {completedCount}/{tasks.length}
          </span>
        </div>
      </div>

      {/* Tasks */}
      <div className="p-6">
        <div className="space-y-2">
          {tasks.map((task, index) => {
            const completed = !!completedTasks[task];

            return (
              <label
                key={task}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition ${
                  completed
                    ? "border-green-100 bg-green-50"
                    : "border-slate-100 hover:bg-slate-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => onToggle(task)}
                  className="h-4 w-4 accent-blue-600"
                />

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-500">
                  {index + 1}
                </span>

                <span
                  className={`text-sm ${
                    completed
                      ? "text-green-700 line-through"
                      : "text-slate-700"
                  }`}
                >
                  {task}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </section>
  );
}