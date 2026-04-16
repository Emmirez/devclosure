const projects = [
  {
    emoji: "🛍",
    bg: "from-amber-950/40 to-neutral-900",
    title: "Trendova Shop",
    description:
      "A premium luxury e-commerce storefront with smooth shopping experience, product filtering, cart management, and a polished checkout flow. Built for high-end fashion and lifestyle brands.",
    stack: ["React", "Tailwind CSS", "Vercel", "Node.js"],
    live: "https://trendova-shop.vercel.app/",
    github: "https://github.com/Emmirez",
    type: "E-Commerce",
  },
  {
    emoji: "✅",
    bg: "from-sky-950/40 to-neutral-900",
    title: "TaskDesk",
    description:
      "A clean, efficient task management application — TaskFlow — with intuitive drag-and-drop boards, priority levels, and a distraction-free UI to keep teams and individuals productive.",
    stack: ["React", "Tailwind CSS", "Vercel", "Node.js"],
    live: "https://taskdesk-rho.vercel.app/",
    github: "https://github.com/Emmirez",
    type: "Productivity SaaS",
  },
  {
    emoji: "📈",
    bg: "from-green-950/40 to-neutral-900",
    title: "AxionTrade X",
    description:
      "Next-generation crypto trading platform with real-time market data, advanced charting, portfolio tracking, and a sleek fintech UI inspired by premium trading desks.",
    stack: ["React", "Node.js", "Crypto APIs", "MongoDB"],
    live: "https://github.com/Emmirez",
    github: "https://github.com",
    type: "Fintech / Crypto",
  },
  {
    emoji: "💰",
    bg: "from-purple-950/40 to-neutral-900",
    title: "ByVault Finance",
    description:
      "A fintech platform focused on secure digital finance operations — offering users a premium interface for managing financial assets, transactions, and investment portfolios.",
    stack: ["React", "Tailwind CSS", "Finance APIs", "Node.js"],
    live: "https://github.com/Emmirez",
    github: "https://github.com",
    type: "Fintech / Finance",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <p className="section-tag-line text-gold text-[11px] tracking-[2.5px] uppercase font-medium mb-3">
        Portfolio
      </p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
        <h2 className="font-display text-[clamp(32px,3.5vw,48px)] font-light leading-[1.1] text-neutral-900 dark:text-neutral-50">
          Featured <span className="text-gradient-gold">Projects</span>
        </h2>
        <p className="text-[13px] text-neutral-400 max-w-xs text-right hidden sm:block">
          4 live products shipped — e-commerce, fintech, crypto & productivity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="border border-gold-border hover:border-gold/50 rounded-2xl overflow-hidden bg-white dark:bg-[#13131E] card-hover group"
          >
            {/* Project image area */}
            <div
              className={`h-44 flex items-center justify-center bg-gradient-to-br ${p.bg} relative overflow-hidden`}
            >
              <span className="text-6xl z-10">{p.emoji}</span>
              {/* Type badge */}
              <div className="absolute top-3 right-3 bg-gold/90 text-[#080810] text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide">
                {p.type}
              </div>
              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-all duration-300" />
            </div>

            <div className="p-6">
              {/* Stack pills */}
              <div className="flex flex-wrap gap-2 mb-3">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-0.5 rounded-full border border-gold-border text-neutral-400 bg-gold-faint"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                {p.title}
              </h3>
              <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
                {p.description}
              </p>

              <div className="flex gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-gold hover:bg-gold-light text-[#080810] text-[13px] font-medium py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  Live Demo ↗
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center border border-gold-border hover:border-gold text-gold text-[13px] font-medium py-2.5 rounded-lg hover:bg-gold-faint transition-all duration-200"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
