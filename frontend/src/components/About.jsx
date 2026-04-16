const timeline = [
  { year: "2024 — Present", role: "Freelance Full Stack Developer", company: "Self-Employed / Part-time Projects" },
  { year: "2023 — 2024", role: "Frontend Developer", company: "Client Projects & Collaborations" },
  { year: "2022 — 2023", role: "Junior Developer", company: "Learning & Building" },
];

const stats = [
  { num: "30+", label: "Live Projects" },
  { num: "50+", label: "Clients Helped" },
  { num: "3+", label: "Years Exp." },
  { num: "100%", label: "Commitment" },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="section-tag-line text-gold text-[11px] tracking-[2.5px] uppercase font-medium mb-3">About Me</p>
          <h2 className="font-display text-[clamp(32px,3.5vw,48px)] font-light leading-[1.1] text-neutral-900 dark:text-neutral-50 mb-6">
            The Journey Behind<br />
            the <span className="text-gradient-gold">Code</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed mb-4">
            I'm a full-stack web developer who builds real-world products with clean code and 
            a sharp eye for design. I've shipped live applications — from luxury e-commerce 
            stores to crypto trading platforms and fintech dashboards — all with attention to 
            performance, UX, and scalability.
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed mb-8">
            Alongside building my own projects, I've worked part-time on client projects 
            across e-commerce, finance, and SaaS — collaborating closely to turn ideas into 
            polished, deployed products. I thrive at the intersection of great engineering 
            and beautiful interfaces.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="block font-display text-3xl text-gold font-light">{s.num}</span>
                <span className="text-[11px] text-neutral-400 tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — timeline */}
        <div>
          <p className="text-[11px] text-gold tracking-[2px] uppercase mb-5 font-medium">Experience Timeline</p>
          <div className="flex flex-col gap-0">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-4">
                {/* Dot + line */}
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold mt-1 shrink-0" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-gold/20 my-1.5" />}
                </div>
                {/* Content */}
                <div className="pb-7">
                  <p className="text-[11px] text-gold tracking-wider mb-1 font-medium">{t.year}</p>
                  <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-200 mb-0.5">{t.role}</p>
                  <p className="text-[13px] text-neutral-400">{t.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Values card */}
          <div className="mt-4 border border-gold-border rounded-2xl p-6 bg-white dark:bg-[#13131E] card-hover">
            <p className="text-[11px] text-gold tracking-[2px] uppercase mb-4 font-medium">What drives me</p>
            <div className="grid grid-cols-2 gap-3">
              {["Clean code","Performance","UX-first thinking","Continuous learning","Open collaboration","Shipping fast"].map((v) => (
                <div key={v} className="flex items-center gap-2 text-[13px] text-neutral-500 dark:text-neutral-400">
                  <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                  {v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
