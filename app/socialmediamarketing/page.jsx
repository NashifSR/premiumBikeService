"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  CheckCircle,
  XCircle,
  MinusCircle,
  Save,
  Download,
  Upload,
  Plus,
  Trash2,
  Printer,
  Copy,
  ClipboardList,
  FileText,
  History,
  RotateCcw,
  ArrowDown,
  Pencil,
} from "lucide-react";
import { INITIAL_CHECKLIST_DATA as DATA } from "./audit/data/checklistData";

/* Optional fields on each checklist item: impact: "high"|"medium"|"low", effort: "low"|"medium"|"high"
   Items without them default to impact "medium". */

const IMPACT = { high: 3, medium: 2, low: 1 };
const KEYS = {
  audits: "fb_page_audits",
  draft: "fb_audit_draft",
  brand: "fb_audit_brand",
};
const TOTAL = DATA.reduce((n, c) => n + c.items.length, 0);

const grade = (p) =>
  p >= 90 ? "A" : p >= 80 ? "B" : p >= 70 ? "C" : p >= 60 ? "D" : "F";
const tone = (p) => (p >= 75 ? "#059669" : p >= 50 ? "#d97706" : "#e11d48");
const fmtDate = (ts) =>
  new Date(ts).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const read = (k, fallback) => {
  try {
    const v = localStorage.getItem(k);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};
const write = (k, v) => {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {}
};

function compute(scores) {
  let pass = 0,
    fail = 0,
    na = 0;
  const cats = DATA.map((c) => {
    let p = 0,
      f = 0;
    c.items.forEach((i) => {
      const s = scores[i.id];
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
      total: c.items.length,
      pct: p + f ? Math.round((p / (p + f)) * 100) : null,
    };
  });
  return {
    pass,
    fail,
    na,
    done: pass + fail + na,
    cats,
    pct: pass + fail ? Math.round((pass / (pass + fail)) * 100) : 0,
  };
}

/* ---------- Charts (pure SVG, no dependencies) ---------- */

function Gauge({ pct, size = 150, evaluated = true }) {
  const r = size / 2 - 12,
    c = 2 * Math.PI * r;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={`Score ${pct}%`}
    >
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
        strokeDashoffset={c * (1 - (evaluated ? pct : 0) / 100)}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset .6s ease, stroke .3s" }}
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
        {evaluated ? grade(pct) : "–"}
      </text>
      <text
        x="50%"
        y="68%"
        textAnchor="middle"
        fontSize={size * 0.1}
        fill="#64748b"
      >
        {evaluated ? `${pct}%` : "no data"}
      </text>
    </svg>
  );
}

function Radar({ cats, size = 260 }) {
  const n = cats.length;
  if (n < 3) return null;
  const cx = size / 2,
    cy = size / 2,
    R = size / 2 - 42;
  const pt = (i, v) => {
    const a = (-90 + (360 / n) * i) * (Math.PI / 180);
    return [cx + R * (v / 100) * Math.cos(a), cy + R * (v / 100) * Math.sin(a)];
  };
  const poly = (v) => cats.map((c, i) => pt(i, v(c)).join(",")).join(" ");
  return (
    <svg
      width="100%"
      viewBox={`0 0 ${size} ${size}`}
      style={{ maxWidth: size }}
      role="img"
      aria-label="Score by category"
    >
      {[25, 50, 75, 100].map((l) => (
        <polygon key={l} points={poly(() => l)} fill="none" stroke="#e2e8f0" />
      ))}
      {cats.map((_, i) => {
        const [x, y] = pt(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#e2e8f0" />;
      })}
      <polygon
        points={poly((c) => c.pct ?? 0)}
        fill="#4f46e533"
        stroke="#4f46e5"
        strokeWidth="2"
      />
      {cats.map((c, i) => {
        const [x, y] = pt(i, 100);
        const [lx, ly] = pt(i, 122);
        return (
          <g key={c.id}>
            <circle
              cx={pt(i, c.pct ?? 0)[0]}
              cy={pt(i, c.pct ?? 0)[1]}
              r="3"
              fill="#4f46e5"
            />
            <text
              x={lx}
              y={ly}
              fontSize="9"
              fill="#475569"
              textAnchor={
                lx < cx - 5 ? "end" : lx > cx + 5 ? "start" : "middle"
              }
              dominantBaseline="middle"
            >
              {c.title.length > 16 ? c.title.slice(0, 15) + "…" : c.title}
            </text>
            <title>{`${c.title}: ${c.pct ?? "–"}%`}</title>
          </g>
        );
      })}
    </svg>
  );
}

function CategoryBars({ cats, onPick }) {
  return (
    <div className="space-y-2.5">
      {cats.map((c) => (
        <button
          key={c.id}
          onClick={() => onPick?.(c.id)}
          className="w-full text-left group"
          disabled={!onPick}
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

function Trend({ points }) {
  if (points.length < 2)
    return (
      <p className="text-xs text-slate-400 py-6 text-center">
        Save at least two audits for the same page to see a trend.
      </p>
    );
  const W = 520,
    H = 150,
    pad = 28;
  const x = (i) => pad + (i * (W - pad * 2)) / (points.length - 1);
  const y = (v) => H - pad - (v / 100) * (H - pad * 2);
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      role="img"
      aria-label="Score over time"
    >
      {[0, 50, 100].map((v) => (
        <g key={v}>
          <line x1={pad} x2={W - pad} y1={y(v)} y2={y(v)} stroke="#e2e8f0" />
          <text x={4} y={y(v) + 3} fontSize="9" fill="#94a3b8">
            {v}
          </text>
        </g>
      ))}
      <polyline
        fill="none"
        stroke="#4f46e5"
        strokeWidth="2.5"
        points={points.map((p, i) => `${x(i)},${y(p.pct)}`).join(" ")}
      />
      {points.map((p, i) => (
        <g key={p.id}>
          <circle
            cx={x(i)}
            cy={y(p.pct)}
            r="4"
            fill="#fff"
            stroke="#4f46e5"
            strokeWidth="2"
          />
          <text
            x={x(i)}
            y={y(p.pct) - 9}
            fontSize="10"
            textAnchor="middle"
            fontWeight="700"
            fill="#0f172a"
          >
            {p.pct}%
          </text>
          <text
            x={x(i)}
            y={H - 8}
            fontSize="9"
            textAnchor="middle"
            fill="#64748b"
          >
            {fmtDate(p.ts)}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ---------- Checklist row ---------- */

const OPTIONS = [
  {
    v: "pass",
    label: "Pass",
    Icon: CheckCircle,
    on: "bg-emerald-600 text-white border-emerald-600",
  },
  {
    v: "fail",
    label: "Fix",
    Icon: XCircle,
    on: "bg-rose-600 text-white border-rose-600",
  },
  {
    v: "na",
    label: "N/A",
    Icon: MinusCircle,
    on: "bg-slate-600 text-white border-slate-600",
  },
];

function Row({ item, score, note, onScore, onNote }) {
  return (
    <div
      id={`item-${item.id}`}
      className={`p-4 transition-colors ${score === "fail" ? "bg-rose-50/50" : ""}`}
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
          <p className="text-xs text-slate-500 mt-0.5 max-w-prose">
            {item.description}
          </p>
        </div>
        <div
          className="flex gap-1.5 shrink-0"
          role="group"
          aria-label={`Rate ${item.name}`}
        >
          {OPTIONS.map(({ v, label, Icon, on }) => (
            <button
              key={v}
              onClick={() => onScore(item.id, v)}
              aria-pressed={score === v}
              className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${score === v ? on : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>
      {score === "fail" && (
        <textarea
          value={note || ""}
          onChange={(e) => onNote(item.id, e.target.value)}
          rows={2}
          placeholder="What did you see? Add evidence or a recommendation for the client."
          className="mt-3 w-full text-xs border border-rose-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      )}
    </div>
  );
}

/* ---------- Main ---------- */

export default function SocialMediaMarketing() {
  const [tab, setTab] = useState("audit");
  const [meta, setMeta] = useState({
    pageName: "",
    pageUrl: "",
    auditorName: "",
  });
  const [scores, setScores] = useState({});
  const [notes, setNotes] = useState({});
  const [currentId, setCurrentId] = useState(null);
  const [audits, setAudits] = useState([]);
  const [brand, setBrand] = useState({
    agency: "Your Agency Name",
    tagline: "Facebook Page Audit",
  });
  const [filter, setFilter] = useState("all");
  const [trendPage, setTrendPage] = useState("");
  const [compare, setCompare] = useState([]);
  const [toast, setToast] = useState("");
  const [ready, setReady] = useState(false);
  const fileRef = useRef(null);

  useEffect(() => {
    setAudits(read(KEYS.audits, []));
    setBrand((b) => read(KEYS.brand, b));
    const d = read(KEYS.draft, null);
    if (d) {
      setMeta(d.meta);
      setScores(d.scores);
      setNotes(d.notes);
      setCurrentId(d.currentId || null);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) write(KEYS.draft, { meta, scores, notes, currentId });
  }, [meta, scores, notes, currentId, ready]);
  useEffect(() => {
    if (ready) write(KEYS.brand, brand);
  }, [brand, ready]);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  const stats = useMemo(() => compute(scores), [scores]);
  const hasData = stats.pass + stats.fail > 0;

  const issues = useMemo(() => {
    const list = [];
    DATA.forEach((c) =>
      c.items.forEach((i) => {
        if (scores[i.id] === "fail")
          list.push({
            ...i,
            category: c.title,
            note: notes[i.id] || "",
            w: IMPACT[i.impact] || 2,
            quick: i.effort === "low",
          });
      }),
    );
    return list.sort((a, b) => b.w - a.w || Number(b.quick) - Number(a.quick));
  }, [scores, notes]);

  const setScore = (id, v) =>
    setScores((p) => ({ ...p, [id]: p[id] === v ? null : v }));
  const setNote = (id, t) => setNotes((p) => ({ ...p, [id]: t }));

  const save = () => {
    if (!meta.pageName.trim()) return setToast("Add a page name before saving");
    const id = currentId || Date.now().toString();
    const audit = {
      id,
      ts: Date.now(),
      ...meta,
      scores,
      notes,
      pct: stats.pct,
      pass: stats.pass,
      fail: stats.fail,
      total: TOTAL,
      cats: stats.cats,
    };
    const next = [audit, ...audits.filter((a) => a.id !== id)];
    setAudits(next);
    write(KEYS.audits, next);
    setCurrentId(id);
    setToast(`Saved “${meta.pageName}”`);
  };

  const reset = () => {
    if (
      hasData &&
      !window.confirm("Start a new audit? Unsaved changes will be lost.")
    )
      return;
    setMeta({ pageName: "", pageUrl: "", auditorName: meta.auditorName });
    setScores({});
    setNotes({});
    setCurrentId(null);
    setTab("audit");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openAudit = (a) => {
    setMeta({
      pageName: a.pageName,
      pageUrl: a.pageUrl || "",
      auditorName: a.auditorName || "",
    });
    setScores(a.scores);
    setNotes(a.notes || {});
    setCurrentId(a.id);
    setTab("audit");
  };

  const removeAudit = (id) => {
    if (!window.confirm("Delete this audit?")) return;
    const next = audits.filter((a) => a.id !== id);
    setAudits(next);
    write(KEYS.audits, next);
    setCompare((c) => c.filter((x) => x !== id));
    if (currentId === id) setCurrentId(null);
  };

  const jumpToNext = () => {
    for (const c of DATA)
      for (const i of c.items) {
        if (!scores[i.id]) {
          if (filter !== "all" && filter !== c.id) setFilter("all");
          return setTimeout(
            () =>
              document
                .getElementById(`item-${i.id}`)
                ?.scrollIntoView({ behavior: "smooth", block: "center" }),
            50,
          );
        }
      }
    setToast("Every item is evaluated");
  };

  const copySummary = async () => {
    const lines = [
      `${meta.pageName || "Page"} – Facebook audit: ${stats.pct}% (${grade(stats.pct)})`,
      ...stats.cats.map((c) => `• ${c.title}: ${c.pct ?? "–"}%`),
      "",
      "Priority fixes:",
      ...issues.map(
        (i, n) => `${n + 1}. ${i.name}${i.note ? ` – ${i.note}` : ""}`,
      ),
    ];
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setToast("Summary copied");
    } catch {
      setToast("Copy failed");
    }
  };

  const exportJSON = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob([JSON.stringify(audits, null, 2)], { type: "application/json" }),
    );
    a.download = "fb_audits_backup.json";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const importJSON = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const incoming = JSON.parse(r.result);
        if (!Array.isArray(incoming)) throw new Error();
        const merged = [
          ...incoming.filter((x) => x?.id && x.scores),
          ...audits.filter((a) => !incoming.some((x) => x.id === a.id)),
        ].sort((a, b) => (b.ts || 0) - (a.ts || 0));
        setAudits(merged);
        write(KEYS.audits, merged);
        setToast(`Imported ${incoming.length} audit(s)`);
      } catch {
        setToast("That file isn't a valid backup");
      }
    };
    r.readAsText(f);
    e.target.value = "";
  };

  const loadSample = () => {
    const s = {},
      n = {};
    DATA.forEach((c) =>
      c.items.forEach((i, idx) => {
        const ok = (idx * 7 + c.id.length) % 10 > 2;
        s[i.id] = ok ? "pass" : "fail";
        if (!ok) n[i.id] = "Sample finding.";
      }),
    );
    setScores(s);
    setNotes(n);
    setMeta((m) => ({ ...m, pageName: m.pageName || "Sample Business Page" }));
  };

  const pageNames = [...new Set(audits.map((a) => a.pageName))];
  const activeTrendPage = trendPage || meta.pageName || pageNames[0] || "";
  const trend = audits
    .filter((a) => a.pageName === activeTrendPage)
    .sort((a, b) => a.ts - b.ts);
  const compared = audits.filter((a) => compare.includes(a.id));
  const visible = filter === "all" ? DATA : DATA.filter((c) => c.id === filter);
  const TABS = [
    ["audit", "Audit", ClipboardList],
    ["report", "Client report", FileText],
    ["history", `History (${audits.length})`, History],
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md print:hidden">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h1 className="font-bold text-base truncate">
              {meta.pageName || "New audit"}
            </h1>
            <p className="text-[11px] text-slate-400">
              {stats.done} of {TOTAL} evaluated · draft saves automatically
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
              className={`px-3 py-2 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition ${tab === k ? "border-indigo-400 text-white" : "border-transparent text-slate-400 hover:text-slate-200"}`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* ============ AUDIT ============ */}
        {tab === "audit" && (
          <div className="grid lg:grid-cols-[1fr_300px] gap-6 items-start">
            <div className="space-y-5 min-w-0">
              <section className="bg-white rounded-xl border border-slate-200 p-4 grid sm:grid-cols-3 gap-3">
                {[
                  ["pageName", "Page name *", "Acme Roasters"],
                  ["pageUrl", "Page URL", "facebook.com/acme"],
                  ["auditorName", "Auditor", "Your name"],
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
              </section>

              <div className="sticky top-[88px] z-40 -mx-4 px-4 py-2 bg-slate-50/95 backdrop-blur flex gap-2 overflow-x-auto border-b border-slate-200">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${filter === "all" ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600"}`}
                >
                  All
                </button>
                {stats.cats.map((c) => (
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
                  onClick={jumpToNext}
                  className="ml-auto px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center gap-1"
                >
                  <ArrowDown className="w-3 h-3" />
                  Next unrated
                </button>
              </div>

              {visible.map((cat) => {
                const cs = stats.cats.find((c) => c.id === cat.id);
                return (
                  <section
                    key={cat.id}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                  >
                    <div className="bg-slate-100 px-4 py-2.5 flex justify-between items-center border-b border-slate-200">
                      <h3 className="font-bold text-sm">{cat.title}</h3>
                      <span className="text-xs font-semibold text-slate-600">
                        {cs.pass + cs.fail} / {cs.total} rated
                        {cs.pct != null && ` · ${cs.pct}%`}
                      </span>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {cat.items.map((item) => (
                        <Row
                          key={item.id}
                          item={item}
                          score={scores[item.id]}
                          note={notes[item.id]}
                          onScore={setScore}
                          onNote={setNote}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}

              <button
                onClick={loadSample}
                className="text-xs text-slate-400 hover:text-slate-600 underline"
              >
                Load sample data (for demos)
              </button>
            </div>

            {/* Live score panel */}
            <aside className="lg:sticky lg:top-[100px] space-y-4">
              <section className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center">
                <Gauge pct={stats.pct} evaluated={hasData} />
                <div className="mt-2 flex gap-4 text-xs font-semibold">
                  <span className="text-emerald-700">{stats.pass} pass</span>
                  <span className="text-rose-700">{stats.fail} to fix</span>
                  <span className="text-slate-500">{stats.na} n/a</span>
                </div>
                <div className="w-full mt-4">
                  <CategoryBars cats={stats.cats} onPick={setFilter} />
                </div>
              </section>
              <button
                onClick={() => setTab("report")}
                disabled={!hasData}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-lg py-2.5 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Preview client report
              </button>
            </aside>
          </div>
        )}

        {/* ============ REPORT ============ */}
        {tab === "report" && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-end print:hidden">
              <button
                onClick={copySummary}
                disabled={!hasData}
                className="bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                Copy summary
              </button>
              <button
                onClick={() => window.print()}
                disabled={!hasData}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Save as PDF
              </button>
            </div>

            {!hasData ? (
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
                    <Pencil className="w-3 h-3 text-slate-300 mt-1 print:hidden" />
                  </div>
                  <div className="text-sm text-right">
                    <div className="font-bold">{meta.pageName}</div>
                    {meta.pageUrl && (
                      <div className="text-slate-500">{meta.pageUrl}</div>
                    )}
                    <div className="text-slate-500">
                      {fmtDate(Date.now())}
                      {meta.auditorName && ` · ${meta.auditorName}`}
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-[170px_1fr_1fr] gap-6 items-center">
                  <div className="flex justify-center">
                    <Gauge pct={stats.pct} />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">
                      {stats.pct >= 75
                        ? "Strong foundation"
                        : stats.pct >= 50
                          ? "Room to grow"
                          : "Needs attention"}
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      {stats.pass} of {stats.pass + stats.fail} checks passed.{" "}
                      {issues.length
                        ? `We found ${issues.length} fix${issues.length > 1 ? "es" : ""}, ordered by expected impact.`
                        : "No issues were flagged."}
                    </p>
                    <div className="mt-4">
                      <CategoryBars cats={stats.cats} />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Radar cats={stats.cats} />
                  </div>
                </div>

                <section>
                  <h3 className="font-bold text-base mb-3">Action plan</h3>
                  {issues.length === 0 ? (
                    <p className="text-sm text-slate-500">
                      Nothing to fix. Keep doing what you’re doing.
                    </p>
                  ) : (
                    <ol className="space-y-2.5">
                      {issues.map((i, n) => (
                        <li
                          key={i.id}
                          className="border border-slate-200 rounded-lg p-3.5 break-inside-avoid"
                        >
                          <div className="flex items-center gap-2 flex-wrap text-[11px]">
                            <span className="font-bold text-slate-400">
                              {n + 1}
                            </span>
                            <span
                              className={`px-1.5 py-0.5 rounded font-bold ${i.w === 3 ? "bg-rose-100 text-rose-800" : i.w === 2 ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-600"}`}
                            >
                              {i.w === 3
                                ? "High"
                                : i.w === 2
                                  ? "Medium"
                                  : "Low"}{" "}
                              impact
                            </span>
                            {i.quick && (
                              <span className="px-1.5 py-0.5 rounded font-bold bg-sky-100 text-sky-800">
                                Quick win
                              </span>
                            )}
                            <span className="text-slate-500">{i.category}</span>
                          </div>
                          <h4 className="font-semibold text-sm mt-1">
                            {i.name}
                          </h4>
                          <p className="text-xs text-slate-600 mt-0.5">
                            {i.description}
                          </p>
                          {i.note && (
                            <p className="text-xs bg-slate-50 rounded p-2 mt-2 text-slate-700">
                              {i.note}
                            </p>
                          )}
                        </li>
                      ))}
                    </ol>
                  )}
                </section>
              </article>
            )}
          </div>
        )}

        {/* ============ HISTORY ============ */}
        {tab === "history" && (
          <div className="space-y-6">
            <section className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                <h2 className="font-bold text-sm">Score over time</h2>
                {pageNames.length > 0 && (
                  <select
                    value={activeTrendPage}
                    onChange={(e) => setTrendPage(e.target.value)}
                    className="text-xs border border-slate-300 rounded-lg px-2 py-1"
                  >
                    {pageNames.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                )}
              </div>
              <Trend points={trend} />
            </section>

            <section className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                <h2 className="font-bold text-sm">Saved audits</h2>
                <div className="flex gap-3 text-xs font-semibold text-indigo-600">
                  <button
                    onClick={() => fileRef.current?.click()}
                    className="flex items-center gap-1"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Import
                  </button>
                  {audits.length > 0 && (
                    <button
                      onClick={exportJSON}
                      className="flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Back up
                    </button>
                  )}
                  <input
                    ref={fileRef}
                    type="file"
                    accept="application/json"
                    onChange={importJSON}
                    className="hidden"
                  />
                </div>
              </div>
              {audits.length === 0 ? (
                <p className="py-8 text-center text-xs text-slate-400">
                  No saved audits yet. Complete an audit and select Save.
                </p>
              ) : (
                <ul className="divide-y divide-slate-100">
                  {audits.map((a) => (
                    <li key={a.id} className="py-3 flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={compare.includes(a.id)}
                        onChange={() =>
                          setCompare((c) =>
                            c.includes(a.id)
                              ? c.filter((x) => x !== a.id)
                              : [...c, a.id],
                          )
                        }
                        aria-label={`Compare ${a.pageName}`}
                        className="rounded text-indigo-600"
                      />
                      <span
                        className="w-11 h-11 rounded-lg grid place-items-center font-extrabold text-white shrink-0"
                        style={{ background: tone(a.pct) }}
                      >
                        {grade(a.pct)}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm truncate">
                          {a.pageName}
                        </div>
                        <div className="text-xs text-slate-500">
                          {fmtDate(a.ts)} · {a.pct}% · {a.fail} to fix
                          {a.auditorName && ` · ${a.auditorName}`}
                        </div>
                      </div>
                      <button
                        onClick={() => openAudit(a)}
                        className="text-xs font-semibold text-indigo-600 flex items-center gap-1"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Open
                      </button>
                      <button
                        onClick={() => removeAudit(a.id)}
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

            {compared.length >= 2 && (
              <section className="bg-white rounded-xl border border-slate-200 p-4 overflow-x-auto">
                <h2 className="font-bold text-sm mb-3">Comparison</h2>
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="p-2 font-semibold text-slate-500">
                        Category
                      </th>
                      {compared.map((a) => (
                        <th key={a.id} className="p-2 min-w-[120px]">
                          {a.pageName}
                          <div className="font-normal text-slate-400">
                            {fmtDate(a.ts)}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-2 font-semibold">Overall</td>
                      {compared.map((a) => (
                        <td
                          key={a.id}
                          className="p-2 font-bold"
                          style={{ color: tone(a.pct) }}
                        >
                          {grade(a.pct)} · {a.pct}%
                        </td>
                      ))}
                    </tr>
                    {DATA.map((c) => (
                      <tr key={c.id}>
                        <td className="p-2 text-slate-600">{c.title}</td>
                        {compared.map((a) => {
                          const v = a.cats?.find((x) => x.id === c.id)?.pct;
                          return (
                            <td
                              key={a.id}
                              className="p-2 font-medium"
                              style={{ color: v == null ? "#94a3b8" : tone(v) }}
                            >
                              {v == null ? "–" : `${v}%`}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}
          </div>
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
