"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  CheckCircle,
  XCircle,
  MinusCircle,
  Save,
  Plus,
  Trash2,
  Printer,
  Copy,
  ClipboardList,
  FileText,
  History,
  ChevronDown,
  RotateCcw,
} from "lucide-react";
import { SEO_CHECKLIST_DATA as DATA } from "./data/seoChecklistData";

const IMPACT = { high: 3, medium: 2, low: 1 };
const KEYS = {
  audits: "seo_audits",
  draft: "seo_audit_draft",
  brand: "seo_audit_brand",
};
const grade = (p) =>
  p >= 90 ? "A" : p >= 80 ? "B" : p >= 70 ? "C" : p >= 60 ? "D" : "F";
const tone = (p) => (p >= 75 ? "#059669" : p >= 50 ? "#d97706" : "#e11d48");
const fmtDate = (ts) =>
  new Date(ts).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
const read = (k, d) => {
  try {
    const v = localStorage.getItem(k);
    return v ? JSON.parse(v) : d;
  } catch {
    return d;
  }
};
const write = (k, v) => {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {}
};

function compute(cats, scores) {
  let pass = 0,
    fail = 0,
    na = 0,
    total = 0;
  const rows = cats.map((c) => {
    let p = 0,
      f = 0;
    c.items.forEach((it) => {
      total++;
      const s = scores[it.id];
      if (s === "pass") p++;
      else if (s === "fail") f++;
      else if (s === "na") na++;
    });
    pass += p;
    fail += f;
    return {
      id: c.id,
      title: c.title,
      pass: p,
      fail: f,
      pct: p + f ? Math.round((p / (p + f)) * 100) : null,
    };
  });
  return {
    pass,
    fail,
    na,
    total,
    done: pass + fail + na,
    rows,
    pct: pass + fail ? Math.round((pass / (pass + fail)) * 100) : 0,
  };
}

function Gauge({ pct, on = true, size = 150 }) {
  const r = size / 2 - 12,
    c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} role="img" aria-label={`Score ${pct}%`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="12"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={tone(pct)}
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - (on ? pct : 0) / 100)}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset .6s ease" }}
      />
      <text
        x="50%"
        y="48%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={size * 0.3}
        fontWeight="800"
        fill="#0f172a"
      >
        {on ? grade(pct) : "–"}
      </text>
      <text
        x="50%"
        y="68%"
        textAnchor="middle"
        fontSize={size * 0.1}
        fill="#64748b"
      >
        {on ? `${pct}%` : "no data"}
      </text>
    </svg>
  );
}

function Bars({ rows, onPick }) {
  return (
    <div className="space-y-2.5">
      {rows.map((c) => (
        <button
          key={c.id}
          onClick={() => onPick?.(c.id)}
          disabled={!onPick}
          className="w-full text-left"
        >
          <div className="flex justify-between text-xs mb-1">
            <span className="font-medium text-slate-700">{c.title}</span>
            <span
              className="font-semibold tabular-nums"
              style={{ color: c.pct == null ? "#94a3b8" : tone(c.pct) }}
            >
              {c.pct == null ? "not started" : `${c.pct}%`}
            </span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${c.pct ?? 0}%`, background: tone(c.pct ?? 0) }}
            />
          </div>
        </button>
      ))}
    </div>
  );
}

const OPTS = [
  ["pass", "Pass", CheckCircle, "bg-emerald-600 text-white border-emerald-600"],
  ["fail", "Fix", XCircle, "bg-rose-600 text-white border-rose-600"],
  ["na", "N/A", MinusCircle, "bg-slate-600 text-white border-slate-600"],
];

function Row({ item, score, note, onScore, onNote }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      id={`item-${item.id}`}
      className={`p-4 ${score === "fail" ? "bg-rose-50/50" : ""}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-semibold text-sm text-slate-900">
              {item.name}
            </h4>
            {item.impact === "high" && (
              <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                High impact
              </span>
            )}
            {item.effort === "low" && (
              <span className="text-[10px] font-bold bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded">
                Quick win
              </span>
            )}
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="mt-1 text-xs font-semibold text-indigo-600 flex items-center gap-1"
          >
            How to check{" "}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
        <div
          className="flex gap-1.5 shrink-0"
          role="group"
          aria-label={`Rate ${item.name}`}
        >
          {OPTS.map(([v, label, Icon, on]) => (
            <button
              key={v}
              onClick={() => onScore(item.id, v)}
              aria-pressed={score === v}
              className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${score === v ? on : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>
      {open && (
        <dl className="mt-3 bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs space-y-2 max-w-prose">
          {[
            ["Why it matters", item.why],
            ["How to check", item.check],
            ["Pass when", item.pass],
            ["How to fix", item.fix],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-bold text-slate-700">{k}</dt>
              <dd className="text-slate-600">{v}</dd>
            </div>
          ))}
        </dl>
      )}
      {score === "fail" && (
        <textarea
          value={note || ""}
          onChange={(e) => onNote(item.id, e.target.value)}
          rows={2}
          placeholder="What did you find? This appears in the client report."
          className="mt-3 w-full text-xs border border-rose-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      )}
    </div>
  );
}

export default function SeoAudit() {
  const [tab, setTab] = useState("audit");
  const [meta, setMeta] = useState({ site: "", url: "", auditor: "" });
  const [scores, setScores] = useState({});
  const [notes, setNotes] = useState({});
  const [local, setLocal] = useState(true);
  const [currentId, setCurrentId] = useState(null);
  const [audits, setAudits] = useState([]);
  const [brand, setBrand] = useState({
    agency: "Your Agency Name",
    tagline: "SEO Audit Report",
  });
  const [filter, setFilter] = useState("all");
  const [toast, setToast] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAudits(read(KEYS.audits, []));
    setBrand((b) => read(KEYS.brand, b));
    const d = read(KEYS.draft, null);
    if (d) {
      setMeta(d.meta);
      setScores(d.scores);
      setNotes(d.notes);
      setLocal(d.local ?? true);
      setCurrentId(d.currentId || null);
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) write(KEYS.draft, { meta, scores, notes, local, currentId });
  }, [meta, scores, notes, local, currentId, ready]);
  useEffect(() => {
    if (ready) write(KEYS.brand, brand);
  }, [brand, ready]);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  const cats = useMemo(
    () => DATA.filter((c) => local || c.id !== "local"),
    [local],
  );
  const st = useMemo(() => compute(cats, scores), [cats, scores]);
  const has = st.pass + st.fail > 0;

  const { issues, wins } = useMemo(() => {
    const issues = [],
      wins = [];
    cats.forEach((c) =>
      c.items.forEach((it) => {
        if (scores[it.id] === "fail")
          issues.push({
            ...it,
            category: c.title,
            note: notes[it.id] || "",
            w: IMPACT[it.impact],
            quick: it.effort === "low",
          });
        if (scores[it.id] === "pass") wins.push({ ...it, category: c.title });
      }),
    );
    issues.sort((a, b) => b.w - a.w || Number(b.quick) - Number(a.quick));
    return { issues, wins };
  }, [cats, scores, notes]);

  const setScore = (id, v) =>
    setScores((p) => ({ ...p, [id]: p[id] === v ? null : v }));
  const setNote = (id, t) => setNotes((p) => ({ ...p, [id]: t }));

  const save = () => {
    if (!meta.site.trim()) return setToast("Add a site name before saving");
    const id = currentId || Date.now().toString();
    const a = {
      id,
      ts: Date.now(),
      meta,
      scores,
      notes,
      local,
      pct: st.pct,
      fail: st.fail,
    };
    const next = [a, ...audits.filter((x) => x.id !== id)];
    setAudits(next);
    write(KEYS.audits, next);
    setCurrentId(id);
    setToast(`Saved “${meta.site}”`);
  };
  const reset = () => {
    if (
      has &&
      !window.confirm("Start a new audit? Unsaved changes will be lost.")
    )
      return;
    setMeta({ site: "", url: "", auditor: meta.auditor });
    setScores({});
    setNotes({});
    setCurrentId(null);
    setTab("audit");
  };
  const open = (a) => {
    setMeta(a.meta);
    setScores(a.scores);
    setNotes(a.notes || {});
    setLocal(a.local ?? true);
    setCurrentId(a.id);
    setTab("audit");
  };
  const remove = (id) => {
    if (!window.confirm("Delete this audit?")) return;
    const next = audits.filter((a) => a.id !== id);
    setAudits(next);
    write(KEYS.audits, next);
    if (currentId === id) setCurrentId(null);
  };
  const nextUnrated = () => {
    for (const c of cats)
      for (const it of c.items)
        if (!scores[it.id]) {
          setFilter("all");
          return setTimeout(
            () =>
              document
                .getElementById(`item-${it.id}`)
                ?.scrollIntoView({ behavior: "smooth", block: "center" }),
            50,
          );
        }
    setToast("Every item is rated");
  };
  const copy = async () => {
    const t = [
      `${meta.site || "Site"} – SEO audit: ${st.pct}% (${grade(st.pct)})`,
      ...st.rows.map((c) => `• ${c.title}: ${c.pct ?? "–"}%`),
      "",
      "Priority fixes:",
      ...issues.map(
        (x, n) => `${n + 1}. ${x.name}${x.note ? ` – ${x.note}` : ""}`,
      ),
    ];
    try {
      await navigator.clipboard.writeText(t.join("\n"));
      setToast("Summary copied");
    } catch {
      setToast("Copy failed");
    }
  };

  const visible = filter === "all" ? cats : cats.filter((c) => c.id === filter);
  const TABS = [
    ["audit", "Audit", ClipboardList],
    ["report", "Report", FileText],
    ["history", `Saved (${audits.length})`, History],
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md print:hidden">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h1 className="font-bold text-base truncate">
              {meta.site || "New SEO audit"}
            </h1>
            <p className="text-[11px] text-slate-400">
              {st.done} of {st.total} rated · draft saves automatically
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={reset}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              New
            </button>
            <button
              onClick={save}
              className="bg-emerald-600 hover:bg-emerald-500 px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1"
            >
              <Save className="w-3.5 h-3.5" />
              {currentId ? "Update" : "Save"}
            </button>
          </div>
        </div>
        <nav
          className="max-w-5xl mx-auto px-4 flex gap-1"
          aria-label="Sections"
        >
          {TABS.map(([k, label, Icon]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              aria-current={tab === k}
              className={`px-3 py-2 text-xs font-semibold flex items-center gap-1.5 border-b-2 ${tab === k ? "border-indigo-400 text-white" : "border-transparent text-slate-400 hover:text-slate-200"}`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {tab === "audit" && (
          <div className="grid lg:grid-cols-[1fr_300px] gap-6 items-start">
            <div className="space-y-5 min-w-0">
              <section className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    ["site", "Site name *", "Acme Roasters"],
                    ["url", "Website URL", "acme.com"],
                    ["auditor", "Auditor", "Your name"],
                  ].map(([k, label, ph]) => (
                    <label key={k} className="block">
                      <span className="block text-xs font-semibold text-slate-600 mb-1">
                        {label}
                      </span>
                      <input
                        value={meta[k]}
                        onChange={(e) =>
                          setMeta({ ...meta, [k]: e.target.value })
                        }
                        placeholder={ph}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </label>
                  ))}
                </div>
                <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={local}
                    onChange={(e) => {
                      setLocal(e.target.checked);
                      setFilter("all");
                    }}
                    className="rounded text-indigo-600"
                  />
                  Include Local SEO (turn off for sites without a physical
                  location or service area)
                </label>
              </section>

              <div className="sticky top-[88px] z-40 -mx-4 px-4 py-2 bg-slate-50/95 backdrop-blur flex gap-2 overflow-x-auto border-b border-slate-200">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${filter === "all" ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600"}`}
                >
                  All
                </button>
                {st.rows.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setFilter(c.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap flex items-center gap-1.5 ${filter === c.id ? "bg-indigo-600 text-white" : "bg-white border border-slate-200 text-slate-600"}`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: c.pct == null ? "#cbd5e1" : tone(c.pct),
                      }}
                    />
                    {c.title}
                  </button>
                ))}
                <button
                  onClick={nextUnrated}
                  className="ml-auto px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-indigo-50 text-indigo-700 border border-indigo-200"
                >
                  Next unrated
                </button>
              </div>

              {visible.map((cat) => {
                const r = st.rows.find((x) => x.id === cat.id);
                return (
                  <section
                    key={cat.id}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                  >
                    <div className="bg-slate-100 px-4 py-2.5 flex justify-between items-center border-b border-slate-200">
                      <h3 className="font-bold text-sm">{cat.title}</h3>
                      <span className="text-xs font-semibold text-slate-600">
                        {r.pass + r.fail} / {cat.items.length} rated
                        {r.pct != null && ` · ${r.pct}%`}
                      </span>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {cat.items.map((it) => (
                        <Row
                          key={it.id}
                          item={it}
                          score={scores[it.id]}
                          note={notes[it.id]}
                          onScore={setScore}
                          onNote={setNote}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>

            <aside className="lg:sticky lg:top-[100px] space-y-4">
              <section className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center">
                <Gauge pct={st.pct} on={has} />
                <div className="mt-2 flex gap-4 text-xs font-semibold">
                  <span className="text-emerald-700">{st.pass} pass</span>
                  <span className="text-rose-700">{st.fail} to fix</span>
                  <span className="text-slate-500">{st.na} n/a</span>
                </div>
                <div className="w-full mt-4">
                  <Bars rows={st.rows} onPick={setFilter} />
                </div>
              </section>
              <button
                onClick={() => setTab("report")}
                disabled={!has}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-lg py-2.5 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Preview report
              </button>
            </aside>
          </div>
        )}

        {tab === "report" && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-end print:hidden">
              <button
                onClick={copy}
                disabled={!has}
                className="bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                Copy summary
              </button>
              <button
                onClick={() => window.print()}
                disabled={!has}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Save as PDF
              </button>
            </div>
            {!has ? (
              <div className="bg-white rounded-xl border border-dashed border-slate-300 py-16 text-center text-sm text-slate-500">
                Rate a few items in the Audit tab and your report appears here.
              </div>
            ) : (
              <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 space-y-8 print:border-0 print:p-0">
                <div className="flex flex-wrap justify-between gap-4 border-b border-slate-200 pb-5">
                  <div>
                    <input
                      value={brand.agency}
                      onChange={(e) =>
                        setBrand({ ...brand, agency: e.target.value })
                      }
                      aria-label="Agency name"
                      className="text-xl font-extrabold bg-transparent focus:outline-none focus:bg-slate-50 rounded px-1 -mx-1 w-full"
                    />
                    <input
                      value={brand.tagline}
                      onChange={(e) =>
                        setBrand({ ...brand, tagline: e.target.value })
                      }
                      aria-label="Report subtitle"
                      className="text-sm text-slate-500 bg-transparent focus:outline-none focus:bg-slate-50 rounded px-1 -mx-1 w-full"
                    />
                  </div>
                  <div className="text-sm sm:text-right">
                    <div className="font-bold">{meta.site}</div>
                    {meta.url && (
                      <div className="text-slate-500">{meta.url}</div>
                    )}
                    <div className="text-slate-500">
                      {fmtDate(Date.now())}
                      {meta.auditor && ` · ${meta.auditor}`}
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-[170px_1fr] gap-6 items-center">
                  <div className="flex justify-center">
                    <Gauge pct={st.pct} />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">
                      {st.pct >= 75
                        ? "Strong foundation"
                        : st.pct >= 50
                          ? "Room to grow"
                          : "Needs attention"}
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      {st.pass} of {st.pass + st.fail} checks passed.{" "}
                      {issues.length
                        ? `${issues.length} fix${issues.length > 1 ? "es" : ""} found, ordered by expected impact.`
                        : "No issues were flagged."}
                    </p>
                    <div className="mt-4">
                      <Bars rows={st.rows} />
                    </div>
                  </div>
                </div>

                <section>
                  <h3 className="font-bold text-base mb-3">Action plan</h3>
                  {issues.length === 0 ? (
                    <p className="text-sm text-slate-500">
                      Nothing to fix right now.
                    </p>
                  ) : (
                    <ol className="space-y-2.5">
                      {issues.map((x, n) => (
                        <li
                          key={x.id}
                          className="border border-slate-200 rounded-lg p-3.5 break-inside-avoid"
                        >
                          <div className="flex items-center gap-2 flex-wrap text-[11px]">
                            <span className="font-bold text-slate-400">
                              {n + 1}
                            </span>
                            <span
                              className={`px-1.5 py-0.5 rounded font-bold ${x.w === 3 ? "bg-rose-100 text-rose-800" : x.w === 2 ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-600"}`}
                            >
                              {x.w === 3
                                ? "High"
                                : x.w === 2
                                  ? "Medium"
                                  : "Low"}{" "}
                              impact
                            </span>
                            {x.quick && (
                              <span className="px-1.5 py-0.5 rounded font-bold bg-sky-100 text-sky-800">
                                Quick win
                              </span>
                            )}
                            <span className="text-slate-500">{x.category}</span>
                          </div>
                          <h4 className="font-semibold text-sm mt-1">
                            {x.name}
                          </h4>
                          <p className="text-xs text-slate-600 mt-0.5">
                            <b>Why it matters:</b> {x.why}
                          </p>
                          {x.note && (
                            <p className="text-xs bg-slate-50 rounded p-2 mt-2 text-slate-700">
                              <b>Finding:</b> {x.note}
                            </p>
                          )}
                          <p className="text-xs text-slate-700 mt-2">
                            <b>Recommended fix:</b> {x.fix}
                          </p>
                        </li>
                      ))}
                    </ol>
                  )}
                </section>

                {wins.length > 0 && (
                  <section className="break-inside-avoid">
                    <h3 className="font-bold text-base mb-3">
                      What’s already working
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
                      {wins.map((w) => (
                        <li key={w.id} className="flex gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          {w.name}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </article>
            )}
          </div>
        )}

        {tab === "history" && (
          <section className="bg-white rounded-xl border border-slate-200 p-4">
            <h2 className="font-bold text-sm mb-3">Saved audits</h2>
            {audits.length === 0 ? (
              <p className="py-8 text-center text-xs text-slate-400">
                No saved audits yet. Finish an audit and select Save.
              </p>
            ) : (
              <ul className="divide-y divide-slate-100">
                {audits.map((a) => (
                  <li key={a.id} className="py-3 flex items-center gap-3">
                    <span
                      className="w-11 h-11 rounded-lg grid place-items-center font-extrabold text-white shrink-0"
                      style={{ background: tone(a.pct) }}
                    >
                      {grade(a.pct)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm truncate">
                        {a.meta.site}
                      </div>
                      <div className="text-xs text-slate-500">
                        {fmtDate(a.ts)} · {a.pct}% · {a.fail} to fix
                      </div>
                    </div>
                    <button
                      onClick={() => open(a)}
                      className="text-xs font-semibold text-indigo-600 flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Open
                    </button>
                    <button
                      onClick={() => remove(a.id)}
                      aria-label="Delete audit"
                      className="text-slate-400 hover:text-rose-600 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </main>

      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg print:hidden"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
