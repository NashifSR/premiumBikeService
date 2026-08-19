export default function WorkAreaCard({
  role,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center gap-3 rounded-lg border p-3 text-left transition ${
        selected
          ? "border-blue-500 bg-blue-50/40 ring-1 ring-blue-500"
          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      {/* Icon */}
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg ${
          selected
            ? "bg-blue-100"
            : "bg-slate-100"
        }`}
      >
        {role.icon}
      </span>

      {/* Main Info */}
      <div className="min-w-0 flex-1">

        <div className="flex items-center gap-2">
          <h3
            className={`truncate text-sm font-semibold ${
              selected
                ? "text-blue-700"
                : "text-slate-800"
            }`}
          >
            {role.title}
          </h3>

          {selected && (
            <span className="shrink-0 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
              Active
            </span>
          )}
        </div>

        {/* Metadata */}
        <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400">
          <span>
            {role.tasks?.length || 0} tasks
          </span>

          <span>•</span>

          <span>
            {role.kpis?.length || 0} KPIs
          </span>

          <span>•</span>

          <span>
            {role.tools?.length || 0} tools
          </span>
        </div>

      </div>

      {/* Arrow */}
      <span
        className={`shrink-0 text-sm transition-transform ${
          selected
            ? "translate-x-0 text-blue-500"
            : "text-slate-300 group-hover:translate-x-0.5 group-hover:text-slate-500"
        }`}
      >
        →
      </span>
    </button>
  );
}