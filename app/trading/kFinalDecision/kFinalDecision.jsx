"use client";

import React from "react";
import Checklist from "../components/Checklist";
import useChecklist from "../hooks/useChecklist";

const KFinalDecision = () => {
const {
items,
loading,
error,
} = useChecklist("final-decision");

return ( <section className="space-y-6">

  <h2 className="text-4xl font-bold text-center text-zinc-900">
    Final Decision Checklist
  </h2>

  {loading && (
    <div className="rounded-xl border border-zinc-300 bg-white p-6">
      <p className="text-sm text-zinc-500">
        Loading final decision checklist...
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
      description="Review the complete trade plan and decide whether the setup meets all of your rules before taking action."
      items={items}
    />
  )}

</section>

);
};

export default KFinalDecision;
