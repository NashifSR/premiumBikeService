"use client";

export default function Workflow({ workflow = [] }) {
    return (
        <section className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            {/* Header */}
            <div className="border-b border-slate-100 px-6 py-5">
                <h2 className="font-bold text-slate-900">
                    Recommended Workflow
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                    Follow these steps when executing this type of marketing work.
                </p>
            </div>

            {/* Table Content */}
            <div className="p-6">
                {workflow.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                    <th className="py-3 px-4 w-16">Step</th>
                                    <th className="py-3 px-4">Task & Description</th>
                                    <th className="py-3 px-4 w-28 text-right">Duration</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-sm">
                                {workflow.map((item, index) => (
                                    <tr
                                        key={`${item.title}-${index}`}
                                        className="transition hover:bg-slate-50"
                                    >
                                        {/* Step Number */}
                                        <td className="py-4 px-4 align-top">
                                            <span className="h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600">
                                                {item.step ?? index + 1}
                                            </span>
                                        </td>

                                        {/* Title & Description */}
                                        <td className="py-4 px-4 align-top">
                                            <div className="font-semibold text-slate-800">
                                                {item.title}
                                            </div>
                                            {item.description && (
                                                <p className="mt-1 text-slate-500 leading-relaxed text-xs sm:text-sm">
                                                    {item.description}
                                                </p>
                                            )}
                                        </td>

                                        {/* Duration */}
                                        <td className="py-4 px-4 align-top text-right text-slate-400 text-xs whitespace-nowrap">
                                            {item.duration || "—"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-sm text-slate-500">
                        No workflow has been added for this work area yet.
                    </p>
                )}
            </div>
        </section>
    );
}