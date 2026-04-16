const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Full-stack web applications built from architecture to deployment — scalable, performant, and production-ready. React frontends, Node backends, database design.",
    price: "From $500",
    features: [
      "React / Next.js",
      "API development",
      "Database design",
      "Deployment & hosting",
    ],
  },
  {
    icon: "✦",
    title: "UI / UX Design",
    description:
      "Pixel-perfect interfaces designed with precision using Tailwind CSS and modern component patterns. Clean, accessible, and brand-aligned layouts that users love.",
    price: "From $300",
    features: [
      "Component systems",
      "Responsive layouts",
      "Dark & light modes",
      "Figma to code",
    ],
  },
  {
    icon: "🔗",
    title: "API Integration",
    description:
      "Seamless third-party integrations — payment gateways, crypto APIs, financial data feeds, authentication providers, and custom REST or GraphQL API design.",
    price: "From $400",
    features: [
      "REST / GraphQL APIs",
      "Payment gateways",
      "Crypto & finance APIs",
      "Auth systems",
    ],
  },
  {
    icon: "🎨",
    title: "Graphic Design",
    description:
      "Creative visual assets for brands and products — logos, brand identities, social media graphics, and marketing materials that communicate your message with impact.",
    price: "From $150",
    features: [
      "Logo & brand identity",
      "Social media graphics",
      "Marketing materials",
      "Print & digital assets",
    ],
  },
  {
    icon: "💡",
    title: "Tech Consulting",
    description:
      "Strategic technical advice for projects and startups — stack selection, code reviews, architecture planning, performance audits, and developer mentorship.",
    price: "$30 / hr",
    features: [
      "Stack selection",
      "Code reviews",
      "Architecture planning",
      "Performance audits",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-24">
      <p className="section-tag-line text-gold text-[11px] tracking-[2.5px] uppercase font-medium mb-3">
        What I Offer
      </p>
      <h2 className="font-display text-[clamp(32px,3.5vw,48px)] font-light leading-[1.1] text-neutral-900 dark:text-neutral-50 mb-14">
        Services Built for <span className="text-gradient-gold">Results</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="border border-gold-border hover:border-gold/50 rounded-2xl p-6 bg-white dark:bg-[#13131E] card-hover group relative overflow-hidden"
          >
            {/* Top gold shimmer line on hover */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-12 h-12 rounded-xl bg-gold-faint border border-gold-border flex items-center justify-center text-xl mb-5 group-hover:bg-gold-glow transition-colors duration-200">
              {s.icon}
            </div>

            <h3 className="text-[16px] font-medium text-neutral-800 dark:text-neutral-200 mb-3">
              {s.title}
            </h3>
            <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
              {s.description}
            </p>

            <ul className="flex flex-col gap-1.5 mb-5">
              {s.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-[12px] text-neutral-500 dark:text-neutral-400"
                >
                  <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <p className="text-gold text-[13px] font-semibold">{s.price}</p>
          </div>
        ))}
      </div>

      {/* CTA banner */}
      <div className="mt-10 border border-gold-border rounded-2xl p-8 bg-white dark:bg-[#13131E] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-1">
            Have a project in mind?
          </p>
          <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
            Let's discuss your requirements and build something great together.
          </p>
        </div>
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="shrink-0 bg-gold hover:bg-gold-light text-[#080810] font-medium text-sm px-7 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
        >
          Start a Project →
        </button>
      </div>
    </section>
  );
}
