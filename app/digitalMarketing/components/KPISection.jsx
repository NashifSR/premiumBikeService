export default function KPISection({ kpis = [] }) {
  if (!kpis.length) return null;

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 p-6">
        <h2 className="font-bold text-slate-900">
          KPIs & Performance Metrics
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Metrics you should monitor to evaluate performance.
        </p>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-2">
        {kpis.map((kpi) => (
          <div
            key={kpi}
            className="rounded-lg border border-slate-100 p-4 transition hover:border-blue-200 hover:bg-blue-50/30"
          >
            <h3 className="font-semibold text-slate-900">
              {kpi}
            </h3>

            {kpi.description && (
              <p className="mt-1 text-sm leading-5 text-slate-500">
                {kpi.description}
              </p>
            )}

            {kpi.formula && (
              <div className="mt-3 rounded-md bg-slate-50 px-3 py-2">
                <p className="text-xs font-medium text-slate-400">
                  FORMULA
                </p>

                <p className="mt-1 text-xs font-mono text-slate-700">
                  {kpi.formula}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}