const navLinks = [
  "About",
  "Skills",
  "Projects",
  "Services",
  "Testimonials",
  "Contact",
];
const socials = [
  { l: "GH", h: "https://github.com/Emmirez", title: "GitHub" },
  {
    l: "in",
    h: "https://www.linkedin.com/in/obaro-owhekora-26a8333b7",
    title: "LinkedIn",
  },
  { l: "TT", h: "https://www.tiktok.com/@devclosure", title: "TikTok" },
  { l: "Be", h: "https://www.behance.net/owhekoraobaro", title: "Behance" },
];

export default function Footer() {
  const scrollTo = (id) =>
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-gold-border bg-[#F5F2EC] dark:bg-[#080810]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-display text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                Dev
              </span>
              <span className="text-gold text-3xl leading-none font-display">
                _
              </span>
              <span className="text-[10px] font-light text-neutral-400 tracking-[2px] uppercase ml-0.5">
                Closure
              </span>
            </div>
            <p className="text-[13px] text-neutral-500 dark:text-neutral-400 max-w-xs leading-relaxed">
              Full-stack developer building polished digital products with
              React, Node.js, and a love for clean UI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            {/* Nav links */}
            <div>
              <p className="text-[10px] text-gold tracking-[2px] uppercase font-medium mb-3">
                Navigation
              </p>
              <ul className="flex flex-col gap-2">
                {navLinks.slice(0, 3).map((l) => (
                  <li key={l}>
                    <button
                      onClick={() => scrollTo(l)}
                      className="text-[13px] text-neutral-500 dark:text-neutral-400 hover:text-gold transition-colors duration-200"
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] text-gold tracking-[2px] uppercase font-medium mb-3">
                More
              </p>
              <ul className="flex flex-col gap-2">
                {navLinks.slice(3).map((l) => (
                  <li key={l}>
                    <button
                      onClick={() => scrollTo(l)}
                      className="text-[13px] text-neutral-500 dark:text-neutral-400 hover:text-gold transition-colors duration-200"
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] text-gold tracking-[2px] uppercase font-medium mb-3">
                Projects
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  {
                    name: "Trendova Shop",
                    url: "https://trendova-shop.vercel.app/",
                  },
                  { name: "TaskDesk", url: "https://taskdesk-rho.vercel.app/" },
                  { name: "AxionTradeX", url: "https://axiontradex.com/" },
                  {
                    name: "ByVault Finance",
                    url: "https://www.byvaultonline.com/",
                  },
                ].map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[13px] text-neutral-500 dark:text-neutral-400 hover:text-gold transition-colors duration-200"
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="gold-divider mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-neutral-400">
            © {new Date().getFullYear()} Dev_Closure — Crafted with precision &
            care.
          </p>

          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.l}
                href={s.h}
                target="_blank"
                rel="noreferrer"
                title={s.title}
                className="w-8 h-8 flex items-center justify-center rounded-md border border-gold-border hover:border-gold text-neutral-400 hover:text-gold hover:bg-gold-faint text-[12px] transition-all duration-200"
              >
                {s.l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
