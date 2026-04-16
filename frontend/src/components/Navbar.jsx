import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Services", "Contact"];

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F2EC]/90 dark:bg-[#080810]/90 backdrop-blur-xl border-b border-gold-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex items-baseline gap-1 shrink-0">
          <span className="font-display text-xl font-medium text-neutral-900 dark:text-neutral-100">
            Dev
          </span>
          <span className="text-gold text-2xl leading-none font-display">
            _
          </span>
          <span className="text-[10px] font-light text-neutral-400 tracking-[2px] uppercase ml-0.5">
            Closure
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-1 flex-1 justify-center list-none">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-[13px] text-neutral-500 dark:text-neutral-400 hover:text-gold px-3.5 py-2 rounded-lg hover:bg-gold-faint transition-all duration-200"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 text-[13px] text-neutral-500 dark:text-neutral-400 hover:text-gold border border-gold-border hover:border-gold px-3 py-1.5 rounded-md transition-all duration-200"
          >
            <span>{dark ? "☀" : "☾"}</span>
            <span>{dark ? "Light" : "Dark"}</span>
          </button>
          <button
            onClick={() => scrollTo("Contact")}
            className="bg-gold hover:bg-gold-light text-[#080810] font-medium text-[13px] px-4 py-2 rounded-md transition-all duration-200 hover:-translate-y-0.5"
          >
            Hire Me
          </button>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-neutral-500 dark:text-neutral-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F5F2EC]/98 dark:bg-[#0F0F1A]/98 backdrop-blur-xl border-t border-gold-border px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-left text-[14px] text-neutral-600 dark:text-neutral-400 hover:text-gold py-2.5 border-b border-gold-border/50 last:border-0 transition-colors"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="mt-2 text-left text-[13px] text-neutral-500 dark:text-neutral-400 hover:text-gold transition-colors"
          >
            {dark ? "☀ Switch to Light Mode" : "☾ Switch to Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
