import React from "react";

const TradingDashboard = () => {

  const dashboardStats = [
    {
      id: "session",
      title: "Market Session",
      value: "London + New York",
      status: "Active",
      statusColor: "text-green-600",
    },
    {
      id: "liquidity",
      title: "Liquidity",
      value: "High",
      status: "Good",
      statusColor: "text-green-600",
    },
    {
      id: "news",
      title: "News Risk",
      value: "No Major Events",
      status: "Safe",
      statusColor: "text-green-600",
    },
    {
      id: "checklist",
      title: "Checklist",
      value: "0 / 11",
      status: "Pending",
      statusColor: "text-yellow-600",
    },
  ];
  const workflow = [
    {
      id: "macro",
      title: "🌍 Macro Check",
      description: "Check time, news, DXY, gold and market conditions.",
      route: "/trading/macro",
    },
    {
      id: "bias",
      title: "📊 Market Bias",
      description: "Determine bullish, bearish or neutral direction.",
      route: "/trading/bias",
    },
    {
      id: "structure",
      title: "🏗 Market Structure",
      description: "Analyze highs, lows and market movement.",
      route: "/trading/structure",
    },
    {
      id: "areas",
      title: "📍 Key Areas",
      description: "Find support, resistance and important zones.",
      route: "/trading/areas",
    },
    {
      id: "trend",
      title: "📈 Trend Confirmation",
      description: "Confirm trend direction.",
      route: "/trading/trend",
    },
    {
      id: "entry",
      title: "🎯 Entry Confirmation",
      description: "Look for entry signals.",
      route: "/trading/entry",
    },
    {
      id: "patterns",
      title: "🕯 Pattern Recognition",
      description: "Identify chart patterns and candles.",
      route: "/trading/patterns",
    },
    {
      id: "confluence",
      title: "🔗 Confluences",
      description: "Combine multiple confirmations.",
      route: "/trading/confluence",
    },
    {
      id: "risk",
      title: "🛡 Risk Management",
      description: "Calculate position and risk.",
      route: "/trading/risk",
    },
    {
      id: "psychology",
      title: "🧠 Psychology",
      description: "Check emotional state.",
      route: "/trading/psychology",
    },
    {
      id: "final",
      title: "✅ Final Decision",
      description: "Execute or reject the trade.",
      route: "/trading/final",
    },
  ];
  const actions = [
    {
      id: "new",
      title: "📝 Start New Analysis",
      description: "Reset checklist and analyze a new setup.",
      action: "new-analysis",
    },
    {
      id: "reference",
      title: "📚 Trading References",
      description: "Open trading tools and learning resources.",
      action: "references",
    },
    {
      id: "settings",
      title: "⚙ Settings",
      description: "Manage profiles and preferences.",
      action: "settings",
    },
  ];
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">
          Trading Dashboard
        </h1>

        <p className="mt-2 text-zinc-500">
          Analyze the market environment and complete your trade process.
        </p>
      </header>
      {/* Dynamic Stats */}
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <div
            key={stat.id}
            className="rounded-xl border border-zinc-300 bg-white p-5"
          >
            <p className="text-sm text-zinc-500">
              {stat.title}
            </p>
            <h3 className="mt-3 text-xl font-bold">
              {stat.value}
            </h3>
            <p className={`mt-2 text-sm ${stat.statusColor}`}>
              {stat.status}
            </p>
          </div>
        ))}
      </section>
      {/* Dynamic Workflow */}
      <section className="rounded-xl border border-zinc-300 bg-white p-6">
        <h2 className="text-xl font-bold">
          Trade Workflow
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workflow.map((item,index)=>(
            <button
              key={item.id}
              className="rounded-lg border border-zinc-200 p-4 text-left hover:border-blue-500"
            >
              <div className="flex gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 font-bold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      {/* Dynamic Actions */}
      <section className="grid gap-5 md:grid-cols-3">
        {actions.map((action)=>(
          <button
            key={action.id}
            className="rounded-xl border border-zinc-300 bg-white p-5 text-left hover:border-blue-500"
          >
            <h3 className="font-bold">
              {action.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              {action.description}
            </p>
          </button>
        ))}
      </section>
    </div>
  );
};

export default TradingDashboard;