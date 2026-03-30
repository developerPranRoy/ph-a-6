const footerLinks = [
  {
    title: "Products",
    links: ["ResumeAI Pro", "FlowBoard", "MailForge", "ContentPilot", "VaultPass"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  },
];

const socials = [
  { label: "X", icon: "𝕏" },
  { label: "LinkedIn", icon: "in" },
  { label: "YouTube", icon: "▶" },
  { label: "Email", icon: "✉" },
];

const Footer = () => {
  return (
    <footer
      className="border-t border-[#1e2d4a] pt-16 pb-8 px-4"
      style={{ background: "#111827" }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center text-white font-black text-xs font-syne">
                L
              </div>
              <span className="text-lg font-extrabold font-syne">
                Launch<span className="text-blue-400">Kit</span>
              </span>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed mb-5">
              The all-in-one SaaS toolkit for builders who move fast and ship often.
            </p>

            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-[#161d2e] border border-[#1e2d4a] flex items-center justify-center text-xs text-[#64748b] hover:text-white hover:border-blue-500/50 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>


          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white font-syne mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#64748b] hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1e2d4a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748b]">
            © 2025 LaunchKit Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="glow-dot" />
            <span className="text-xs text-[#64748b]">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
