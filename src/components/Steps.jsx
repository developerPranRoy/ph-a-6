const stepsData = [
  {
    number: "01",
    icon: "🔍",
    title: "Browse Tools",
    description:
      "Explore our curated catalogue of SaaS products built for modern teams and solo builders.",
  },
  {
    number: "02",
    icon: "🛒",
    title: "Add to Cart",
    description:
      "Select the tools that fit your workflow and add them to your cart in one click.",
  },
  {
    number: "03",
    icon: "💳",
    title: "Checkout Securely",
    description:
      "One-click secure checkout. Get instant access to every tool you purchased.",
  },
  {
    number: "04",
    icon: "🚀",
    title: "Launch Faster",
    description:
      "Integrate seamlessly into your workflow and start shipping better products today.",
  },
];

const Steps = () => {
  return (
    <section
      className="py-20 px-4 border-t border-[#1e2d4a]"
      style={{ background: "#111827" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="section-label block mb-3">How It Works</span>
          <h2 className="text-4xl font-extrabold font-syne">
            Four steps to{" "}
            <span className="text-blue-400">ship faster</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stepsData.map((step, i) => (
            <div
              key={i}
              className="relative rounded-2xl bg-[#161d2e] border border-[#1e2d4a] p-6 flex flex-col gap-4"
            >
              {/* Icon + Step number */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <span className="text-5xl font-black font-syne text-[#1e2d4a]">
                  {step.number}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-bold text-white font-syne mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector arrow (desktop only, not on last) */}
              {i < stepsData.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#1e2d4a] border border-blue-500/30 flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
