"use client";

import React from "react";
import Checklist from "../components/Checklist";
import useChecklist from "../hooks/useChecklist";

const FEntryConfirmation = () => {
const {
items,
loading,
error,
} = useChecklist("entry-confirmation");

return ( <section className="space-y-6">

  <h2 className="text-4xl font-bold text-center text-zinc-900">
    Entry Confirmation Checklist
  </h2>

  {loading && (
    <div className="rounded-xl border border-zinc-300 bg-white p-6">
      <p className="text-sm text-zinc-500">
        Loading entry confirmation checklist...
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
      description="Look for clear entry confirmation at your key area before committing to the trade."
      items={items}
    />
  )}

</section>

);
};

export default FEntryConfirmation;
