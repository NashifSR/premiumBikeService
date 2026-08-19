export default function QuickActions() {
  const actions = [
    {
      label: "Create Checklist",
      icon: "☑",
    },
    {
      label: "Content Calendar",
      icon: "📅",
    },
    {
      label: "Marketing Report",
      icon: "📊",
    },
    {
      label: "Resource Library",
      icon: "🔗",
    },
  ];

  return (
    <div className="rounded-xl bg-slate-900 p-6">
      <h2 className="font-bold text-white">
        Quick Actions
      </h2>

      <div className="mt-4 space-y-2">
        {actions.map((action) => (
          <button
            key={action.label}
            className="flex w-full items-center gap-3 rounded-lg bg-white/10 px-3 py-2.5 text-left text-sm text-white transition hover:bg-white/20"
          >
            <span>{action.icon}</span>
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}