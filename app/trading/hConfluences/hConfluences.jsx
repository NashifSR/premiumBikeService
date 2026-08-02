"use client";

import React from "react";
import Checklist from "../components/Checklist";
import useChecklist from "../hooks/useChecklist";

const HConfluences = () => {
const {
items,
loading,
error,
} = useChecklist("confluences");

return ( <section className="space-y-6">

  <h2 className="text-4xl font-bold text-center text-zinc-900">
    Confluence Checklist
  </h2>

  {loading && (
    <div className="rounded-xl border border-zinc-300 bg-white p-6">
      <p className="text-sm text-zinc-500">
        Loading confluence checklist...
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
      description="Look for multiple independent factors that support the same trade idea before taking the setup."
      items={items}
    />
  )}

</section>

);
};

export default HConfluences;
