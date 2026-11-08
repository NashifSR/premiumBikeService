// components/audit/ChecklistItem.jsx
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export default function ChecklistItem({ item, score, note, onScoreChange, onNoteChange }) {
  return (
    <div className="p-3.5 hover:bg-slate-50 transition">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-0.5 pr-2">
          <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">{item.name}</h4>
          <p className="text-xs text-slate-500 leading-normal">{item.description}</p>
        </div>

        <div className="flex items-center space-x-1.5 shrink-0 pt-0.5">
          <button
            onClick={() => onScoreChange(item.id, 'pass')}
            className={`px-2.5 py-1 rounded text-xs font-bold flex items-center space-x-1 border transition ${
              score === 'pass'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Pass</span>
          </button>
          <button
            onClick={() => onScoreChange(item.id, 'fail')}
            className={`px-2.5 py-1 rounded text-xs font-bold flex items-center space-x-1 border transition ${
              score === 'fail'
                ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            <span>Fix</span>
          </button>
        </div>
      </div>

      {score === 'fail' && (
        <div className="mt-2.5">
          <input
            type="text"
            placeholder="Add specific issue note..."
            value={note || ''}
            onChange={(e) => onNoteChange(item.id, e.target.value)}
            className="w-full text-xs px-2.5 py-1 border border-rose-200 rounded bg-rose-50/50 text-slate-700 focus:outline-none focus:ring-1 focus:ring-rose-400"
          />
        </div>
      )}
    </div>
  );
}