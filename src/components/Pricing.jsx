import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    label: "Free forever",
    features: [
      "2 tools access",
      "Community support",
      "1 workspace",
      "100 API calls/mo",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    monthlyPrice: 39,
    yearlyPrice: 29,
    features: [
      "All 9 tools",
      "Priority support",
      "5 workspaces",
      "Unlimited API calls",
      "Analytics dashboard",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Team",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Everything in Pro",
      "Unlimited workspaces",
      "SSO + SAML",
      "Audit logs",
      "Custom integrations",
      "Dedicated CSM",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-20 px-4 border-t border-[#1e2d4a]" id="pricing">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <span className="section-label block mb-3">Pricing</span>
          <h2 className="text-4xl font-extrabold font-syne mb-4">
            Simple,{" "}
            <span className="text-blue-400">transparent</span> pricing
          </h2>
          <p className="text-[#64748b] mb-6">No hidden fees. Cancel anytime.</p>


          <div className="inline-flex items-center gap-3 bg-[#161d2e] border border-[#1e2d4a] rounded-full px-5 py-2.5">
            <span className={`text-sm font-medium ${!annual ? "text-white" : "text-[#64748b]"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${annual ? "bg-blue-500" : "bg-[#1e2d4a]"
                }`}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white toggle-thumb ${annual ? "translate-x-5" : "translate-x-0"
                  }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-white" : "text-[#64748b]"}`}>
              Annual{" "}
              <span className="text-green-400 text-xs font-semibold">-25%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const price = annual ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div
                key={i}
                className={`relative rounded-2xl border p-7 flex flex-col gap-5 card-hover
                  ${plan.highlight
                    ? "border-blue-500/50 shadow-xl shadow-blue-500/10"
                    : "border-[#1e2d4a] bg-[#161d2e]"
                  }`}
                style={
                  plan.highlight
                    ? {
                      background:
                        "linear-gradient(160deg, rgba(59,130,246,0.08) 0%, #161d2e 60%)",
                    }
                    : {}
                }
              >

                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-blue-500/30">
                      Most Popular
                    </span>
                  </div>
                )}


                <div>
                  <h3 className="text-xl font-bold text-white font-syne mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1.5">
                    <span className="text-4xl font-extrabold font-syne text-white">
                      {price === 0 ? "Free" : `$${price}`}
                    </span>
                    {price > 0 && (
                      <span className="text-sm text-[#64748b] mb-1">
                        /mo{annual ? " billed annually" : ""}
                      </span>
                    )}
                  </div>
                </div>


                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#64748b]">
                      <svg
                        className="w-4 h-4 text-blue-400 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>


                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.01] cursor-pointer
                    ${plan.highlight
                      ? "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20"
                      : "bg-[#111827] hover:bg-[#1e2d4a] text-white border border-[#1e2d4a]"
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
