const statsData = [
  { value: "9",     suffix: " Tools",  label: "Curated Products",  icon: "🧩" },
  { value: "12k",   suffix: "+",       label: "Active Builders",   icon: "👥" },
  { value: "99.9",  suffix: "%",       label: "Avg Uptime SLA",    icon: "⚡" },
  { value: "$0",    suffix: "",        label: "Free to Start",     icon: "🎁" },
];

const Stats = () => {
  return (
    <section
      className="py-16 px-4 border-y border-[#1e2d4a]"
      style={{ background: "#111827" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((s, i) => (
            <div key={i} className="stat-card text-center relative overflow-hidden pt-4">
              {/* Icon */}
              <div className="text-3xl mb-3">{s.icon}</div>
              {/* Number */}
              <div className="text-3xl font-extrabold font-syne text-white mb-1">
                {s.value}
                <span className="text-blue-400">{s.suffix}</span>
              </div>
              {/* Label */}
              <div className="text-sm text-[#64748b]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
