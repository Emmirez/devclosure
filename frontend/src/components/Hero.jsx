import React from "react";
const socials = [
  { label: "GH", title: "GitHub", href: "https://github.com/Emmirez" },
  {
    label: "in",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/obaro-owhekora-26a8333b7",
  },
  { label: "TT", title: "Tiktok", href: "https://www.tiktok.com/@devclosure" },
  {
    label: "Be",
    title: "Behance",
    href: "https://www.behance.net/owhekoraobaro",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Ambient orbs */}
      <div className="orb w-[500px] h-[500px] bg-gold/10 top-[-100px] right-[-80px]" />
      <div className="orb w-[350px] h-[350px] bg-gold/6 bottom-[50px] left-[-60px]" />

      <div className="max-w-6xl mx-auto px-6 w-full py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 border border-green-500/30 bg-green-500/8 text-green-400 text-[11px] font-medium px-3 py-1.5 rounded-full mb-6 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse2" />
            Available for new projects
          </div>

          <p className="section-tag-line text-gold text-[11px] tracking-[2.5px] uppercase font-medium mb-3">
            Full Stack Web Developer
          </p>

          <h1 className="font-display text-[clamp(42px,5vw,72px)] font-light leading-[1.05] tracking-[-1px] text-neutral-900 dark:text-neutral-50 mb-6">
            Crafting Digital
            <br />
            Experiences
            <br />
            <em className="text-gradient-gold not-italic">with Precision.</em>
          </h1>

          <p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-[480px] mb-8">
            I build scalable, high-performance web applications that blend
            technical excellence with refined UI design — from robust backend
            systems to pixel-perfect interfaces users love.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gold hover:bg-gold-light text-[#080810] font-medium text-sm px-7 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-gold-border hover:border-gold text-gold hover:bg-gold-glow text-sm px-7 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Let's Talk →
            </button>
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.title}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gold-border hover:border-gold text-neutral-400 hover:text-gold hover:bg-gold-faint text-[13px] font-medium transition-all duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — avatar visual */}
        <div className="flex justify-center animate-fade-up-2">
          <div className="relative">
            {/* Outer decorative ring */}
            <div className="w-[320px] h-[320px] lg:w-[380px] lg:h-[380px] rounded-full border border-gold/30 flex items-center justify-center relative">
              {/* Inner ring */}
              <div className="w-[280px] h-[280px] lg:w-[340px] lg:h-[340px] rounded-full border border-gold/20 flex items-center justify-center">
                {/* Avatar */}
                <div className="w-[240px] h-[240px] lg:w-[296px] lg:h-[296px] rounded-full border border-gold/25 overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover [object-position:center_60%]"
                  />
                </div>
              </div>

              {/* Rotating dots */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ animation: "spin 18s linear infinite" }}
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold/60" />
              </div>
            </div>

            {/* Stat badges */}
            <div className="absolute top-4 -left-6 bg-gold text-[#080810] rounded-xl px-4 py-2.5 shadow-card">
              <span className="block text-lg font-semibold leading-none">
                30+
              </span>
              <span className="text-[10px] font-medium opacity-80">
                Live Projects
              </span>
            </div>
            <div className="absolute bottom-8 -right-6 bg-gold text-[#080810] rounded-xl px-4 py-2.5 shadow-card">
              <span className="block text-lg font-semibold leading-none">
                3+
              </span>
              <span className="text-[10px] font-medium opacity-80">
                Years Exp.
              </span>
            </div>
            <div className="absolute -bottom-2 left-4 bg-[#13131E] dark:bg-[#1A1A2A] border border-gold-border rounded-xl px-4 py-2.5 shadow-card">
              <span className="block text-sm font-medium text-gold leading-none">
                Part-time
              </span>
              <span className="text-[10px] text-neutral-400">
                Freelance work
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
