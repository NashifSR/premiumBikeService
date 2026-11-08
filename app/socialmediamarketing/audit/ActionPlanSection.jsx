// components/audit/ActionPlanSection.jsx
import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function ActionPlanSection({ failedItems }) {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 space-y-4">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 text-rose-500" />
          <span>Automated Action Plan ({failedItems.length} Issues)</span>
        </h2>
      </div>

      {failedItems.length === 0 ? (
        <div className="py-6 text-center text-slate-400 text-xs">
          No issues flagged yet. Any item marked as "Fix" will automatically populate a recommended action item here.
        </div>
      ) : (
        <div className="space-y-3">
          {failedItems.map((failedItem, index) => (
            <div
              key={failedItem.id}
              className="bg-rose-50/60 border border-rose-200 rounded-lg p-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold bg-rose-200 text-rose-800 px-2 py-0.5 rounded">
                    Priority {index + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{failedItem.categoryTitle}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Fix {failedItem.name}</h4>
                <p className="text-xs text-slate-600">Standard: {failedItem.description}</p>
                {failedItem.customNote && (
                  <p className="text-xs text-rose-700 bg-rose-100/60 p-1.5 rounded mt-1 font-medium">
                    Note: {failedItem.customNote}
                  </p>
                )}
              </div>
              <div className="text-xs font-medium text-rose-600 bg-white border border-rose-200 px-3 py-1.5 rounded-md shadow-2xs self-end sm:self-center">
                Action Required
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}