"use client";

import React from "react";
import Checklist from "../components/Checklist";
import useChecklist from "../hooks/useChecklist";

const IRiskManagement = () => {
  const {
    items,
    loading,
    error,
  } = useChecklist("risk-management");

  return (<section className="space-y-6">

    <h2 className="text-4xl font-bold text-center text-zinc-900">
      Risk Management Checklist
    </h2>

    {loading && (
      <div className="rounded-xl border border-zinc-300 bg-white p-6">
        <p className="text-sm text-zinc-500">
          Loading risk management checklist...
        </p>
      </div>
    )}

    {error && (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <p className="text-sm text-red-700">
          {error}
        </p>
      </div>
    )}

    {!loading && !error && (
      <Checklist
        description="Define your risk, position size, stop loss, and reward before entering the trade."
        items={items}
      />
    )}

  </section>

  );
};

export default IRiskManagement;
