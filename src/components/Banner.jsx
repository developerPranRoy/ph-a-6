const Banner = () => {
  return (
    <section className="mesh-bg pt-32 pb-20 px-4 relative overflow-hidden">
      <div
        className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }}
      />

      <div className="max-w-7xl  grid mx-auto lg:grid-cols-2 gap-14 items-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10">
            <span className="glow-dot" />
            <span className="section-label">The SaaS Toolkit for Builders</span>
          </div>

          <h1 className="font-syne text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            Ship Faster.{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
              }}
            >
              Grow Smarter.
            </span>
          </h1>

          <p className="text-lg text-[#64748b] leading-relaxed mb-8 max-w-lg">
            DigiTools bundles the best SaaS tools you need — from AI writing to uptime
            monitoring — so you can focus on building, not shopping.
          </p>


          <div className="flex flex-wrap gap-3 mb-8">
            <button className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/25 cursor-pointer">
              Explore Products →
            </button>
            <button className="px-6 py-3 rounded-xl bg-[#161d2e] border border-[#1e2d4a] hover:border-blue-500/50 font-semibold transition-all cursor-pointer">
              Watch Demo
            </button>
          </div>


          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {["🧑‍💻", "👩‍🎨", "🧑‍🚀", "👨‍💼", "👩‍💻"].map((e, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-[#161d2e] border-2 border-[#0a0c14] flex items-center justify-center text-sm"
                >
                  {e}
                </div>
              ))}
            </div>
            <p className="text-sm text-[#64748b]">
              <span className="text-white font-semibold">12,000+</span> builders trust us
            </p>
          </div>
        </div>


        <div
          className="fade-up flex justify-center"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="relative w-full max-w-md">

            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-20 pointer-events-none"
              style={{ background: "linear-gradient(135deg, #3b82f6, #a78bfa)" }}
            />

            <div className="relative rounded-3xl border border-[#1e2d4a] bg-[#161d2e] p-6 shadow-2xl">

              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-semibold text-[#64748b]">
                  Dashboard Overview
                </span>
                <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">
                  ● Live
                </span>
              </div>


              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Revenue", val: "$48,290", trend: "+12.4%", up: true },
                  { label: "Users", val: "12,041", trend: "+8.1%", up: true },
                  { label: "Churn Rate", val: "1.2%", trend: "-0.3%", up: false },
                  { label: "MRR", val: "$9,840", trend: "+5.7%", up: true },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-[#111827] p-3 border border-[#1e2d4a]"
                  >
                    <p className="text-xs text-[#64748b] mb-1">{s.label}</p>
                    <p className="text-lg font-extrabold font-syne">{s.val}</p>
                    <p
                      className={`text-xs mt-0.5 ${s.up ? "text-green-400" : "text-red-400"
                        }`}
                    >
                      {s.trend} this week
                    </p>
                  </div>
                ))}
              </div>


              <div className="rounded-xl bg-[#111827] border border-[#1e2d4a] px-4 py-3">
                <p className="text-xs text-[#64748b] mb-3">Monthly Revenue</p>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 55, 45, 70, 60, 85, 65, 90, 75, 95, 80, 110].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${(h / 110) * 100}%`,
                        background:
                          i === 11 ? "#3b82f6" : "rgba(59,130,246,0.22)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
