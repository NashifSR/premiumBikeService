"use client";

import React, { useMemo, useState } from "react";
import { ExternalLink, X } from "lucide-react";

const Checklist = ({
  title = "Checklist",
  description = "",
  items = [],
}) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleItem = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const completed = useMemo(
    () => Object.values(checkedItems).filter(Boolean).length,
    [checkedItems]
  );

  const total = items.length;

  const progress = total
    ? Math.round((completed / total) * 100)
    : 0;

  const resetChecklist = () => {
    setCheckedItems({});
  };

  return (
    <>
      <div className="rounded-xl border border-zinc-300 bg-white p-5">

        {/* Header */}
        <div className="flex items-center justify-between gap-4">

          <div>
            <h2 className="text-lg font-bold text-zinc-900">
              {title}
            </h2>

            {description && (
              <p className="mt-1 text-xs text-zinc-500">
                {description}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={resetChecklist}
            className="text-xs font-medium text-zinc-500 hover:text-red-600"
          >
            Reset
          </button>

        </div>


        {/* Progress */}
        <div className="mt-4">

          <div className="mb-1.5 flex justify-between text-xs">

            <span className="font-medium text-zinc-600">
              Progress
            </span>

            <span
              className={
                completed === total && total > 0
                  ? "font-semibold text-green-600"
                  : "text-zinc-500"
              }
            >
              {completed} / {total}
            </span>

          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-zinc-200">

            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />

          </div>

        </div>


        {/* Items */}
        <div className="mt-4 space-y-2">

          {items.map((item, index) => {

            const checked = !!checkedItems[index];

            return (
              <div
                key={index}
                className={`rounded-lg border transition ${
                  checked
                    ? "border-green-200 bg-green-50/50"
                    : "border-zinc-200"
                }`}
              >

                <div className="flex items-center gap-3 px-3 py-2.5">

                  {/* Number */}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      checked
                        ? "bg-green-100 text-green-700"
                        : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {index + 1}
                  </span>


                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleItem(index)}
                    onClick={(e) => e.stopPropagation()}
                    className="h-4 w-4 shrink-0 cursor-pointer accent-blue-600"
                  />


                  {/* Title / Modal Trigger */}
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className={`min-w-0 flex-1 cursor-pointer text-left text-sm font-medium hover:underline ${
                      checked
                        ? "text-green-700"
                        : "text-zinc-900"
                    }`}
                  >
                    {item.title}
                  </button>


                  {/* External Link */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex shrink-0 items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800"
                    >
                      <span className="hidden sm:inline">
                        Check
                      </span>

                      <ExternalLink size={13} />
                    </a>
                  )}

                </div>

              </div>
            );
          })}

        </div>


        {/* Empty State */}
        {total === 0 && (
          <div className="mt-4 rounded-lg bg-zinc-50 p-5 text-center">

            <p className="text-xs text-zinc-500">
              No checklist items found.
            </p>

          </div>
        )}


        {/* Completion */}
        {completed === total && total > 0 && (
          <div className="mt-4 rounded-lg border border-green-200 bg-green-50 px-3 py-2.5 text-xs font-medium text-green-700">
            ✓ Checklist completed.
          </div>
        )}

      </div>


      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelectedItem(null)}
        >

          <div
            className="w-full max-w-lg rounded-xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-zinc-200 p-5">

              <div className="flex gap-3">

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                  ?
                </span>

                <div>
                  <h3 className="text-lg font-bold text-zinc-900">
                    {selectedItem.title}
                  </h3>
                </div>

              </div>

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="rounded-md p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
              >
                <X size={18} />
              </button>

            </div>


            {/* Modal Content */}
            <div className="space-y-4 p-5">

              {/* Description */}
              {selectedItem.description && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                    Description
                  </h4>

                  <p className="mt-1.5 text-sm leading-6 text-zinc-700">
                    {selectedItem.description}
                  </p>
                </div>
              )}


              {/* Advice */}
              {selectedItem.advice && (
                <div className="rounded-lg bg-blue-50 p-4">

                  <h4 className="text-xs font-bold uppercase tracking-wide text-blue-700">
                    💡 Advice
                  </h4>

                  <p className="mt-1.5 text-sm leading-6 text-blue-900">
                    {selectedItem.advice}
                  </p>

                </div>
              )}


              {/* Link */}
              {selectedItem.link && (
                <a
                  href={selectedItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Open Resource
                  <ExternalLink size={14} />
                </a>
              )}

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Checklist;