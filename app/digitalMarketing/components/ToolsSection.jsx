export default function ToolsSection({ tools = [] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div>
        <h2 className="font-bold text-slate-900">
          Recommended Tools
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Tools, platforms, and official learning resources.
        </p>
      </div>

      {/* Tools */}
      <div className="mt-5 space-y-3">
        {tools.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-200 p-4 text-center">
            <p className="text-sm text-slate-500">
              No tools have been added for this work area yet.
            </p>
          </div>
        ) : (
          tools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-lg border border-slate-100 p-3 transition hover:border-blue-200 hover:bg-blue-50/50"
            >
              {/* Tool Info */}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-slate-800">
                    {tool.name}
                  </h3>

                  {tool.description && (
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {tool.description}
                    </p>
                  )}
                </div>

                <span className="shrink-0 text-slate-400">
                  ↗
                </span>
              </div>

              {/* Links */}
              <div className="mt-3 flex flex-wrap gap-2">
                {tool.url && (
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-200"
                  >
                    Open Tool ↗
                  </a>
                )}

                {tool.guide && (
                  <a
                    href={tool.guide}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-blue-100"
                  >
                    Official Guide ↗
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}