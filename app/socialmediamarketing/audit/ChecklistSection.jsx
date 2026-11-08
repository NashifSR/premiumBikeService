// components/audit/ChecklistSection.jsx
import React from 'react';
import ChecklistItem from './ChecklistItem';

export default function ChecklistSection({ category, scores, notes, onScoreChange, onNoteChange }) {
  const passedCount = category.items.filter((i) => scores[i.id] === 'pass').length;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center">
        <h3 className="font-bold text-slate-800 text-sm">{category.title}</h3>
        <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-bold">
          {passedCount} / {category.items.length}
        </span>
      </div>

      <div className="divide-y divide-slate-100">
        {category.items.map((item) => (
          <ChecklistItem
            key={item.id}
            item={item}
            score={scores[item.id]}
            note={notes[item.id]}
            onScoreChange={onScoreChange}
            onNoteChange={onNoteChange}
          />
        ))}
      </div>
    </div>
  );
}