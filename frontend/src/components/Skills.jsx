const skillGroups = [
  {
    icon: "⚛",
    category: "Frontend",
    title: "UI Engineering",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "HTML5 / CSS3",
    ],
  },
  {
    icon: "⚙",
    category: "Backend",
    title: "Server & APIs",
    skills: ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "GraphQL", "MySQL"],
  },
  {
    icon: "🗄",
    category: "Database",
    title: "Data Layer",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Redis",
      "Prisma",
      "Supabase",
      "MySQL"
    ],
  },
  {
    icon: "🛠",
    category: "Tools & DevOps",
    title: "Infrastructure",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Docker",
      "AWS basics",
      "Figma",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <p className="section-tag-line text-gold text-[11px] tracking-[2.5px] uppercase font-medium mb-3">
        Technical Skills
      </p>
      <h2 className="font-display text-[clamp(32px,3.5vw,48px)] font-light leading-[1.1] text-neutral-900 dark:text-neutral-50 mb-14">
        Built with the <span className="text-gradient-gold">Right Stack</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillGroups.map((g) => (
          <div
            key={g.category}
            className="border border-gold-border hover:border-gold/50 rounded-2xl p-6 bg-white dark:bg-[#13131E] card-hover group"
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-gold-faint border border-gold-border flex items-center justify-center text-xl mb-5 group-hover:bg-gold-glow transition-colors duration-200">
              {g.icon}
            </div>
            <p className="text-[10px] text-gold tracking-[2px] uppercase font-medium mb-1">
              {g.category}
            </p>
            <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-200 mb-4">
              {g.title}
            </p>

            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="text-[11px] px-2.5 py-1 rounded-full border border-gold-border text-neutral-500 dark:text-neutral-400 bg-gold-faint"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency bars */}
      <div className="mt-12 border border-gold-border rounded-2xl p-8 bg-white dark:bg-[#13131E]">
        <p className="text-[11px] text-gold tracking-[2px] uppercase font-medium mb-6">
          Proficiency Levels
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
          {[
            { name: "React / Next.js", pct: 90 },
            { name: "Node.js / Express", pct: 82 },
            { name: "TypeScript", pct: 78 },
            { name: "MongoDB / PostgreSQL", pct: 75 },
            { name: "Tailwind CSS", pct: 92 },
            { name: "Python / FastAPI", pct: 68 },
          ].map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-[13px] text-neutral-600 dark:text-neutral-300">
                  {skill.name}
                </span>
                <span className="text-[12px] text-gold font-medium">
                  {skill.pct}%
                </span>
              </div>
              <div className="h-1 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold-dark to-gold-light transition-all duration-1000"
                  style={{ width: `${skill.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
