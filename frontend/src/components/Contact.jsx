import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactDetails = [
  { icon: "✉", label: "Email", value: "obaro@devclosure.dev" },
  { icon: "📍", label: "Location", value: "Lagos, Nigeria (Remote OK)" },
  { icon: "⏱", label: "Response Time", value: "Within 24 hours" },
  { icon: "🟢", label: "Availability", value: "Open to new projects" },
];

const SERVICE_OPTIONS = [
  "Web Development",
  "UI / UX Design",
  "API Integration",
  "Tech Consulting",
  "Graphic Design",
  "Other"
];

// Enhanced Select Component
const EnhancedSelect = ({ value, onChange, options, placeholder, error, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(opt => opt === value);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full rounded-lg border px-4 py-2.5 text-[14px] bg-white dark:bg-[#13131E] text-neutral-800 dark:text-neutral-200 outline-none transition-all duration-200 cursor-pointer flex items-center justify-between ${
          error 
            ? "border-red-400 focus:border-red-400" 
            : "border-gold-border hover:border-gold/60"
        } ${className}`}
      >
        <span className={!selectedOption ? "text-neutral-400" : ""}>
          {selectedOption || placeholder || "Select a service"}
        </span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 w-full mt-1 bg-white dark:bg-[#13131E] border border-gold-border rounded-lg shadow-lg max-h-60 overflow-auto">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`px-4 py-2.5 text-[14px] cursor-pointer transition-colors hover:bg-gold-faint ${
                  value === option ? "text-gold bg-gold-faint" : "text-neutral-800 dark:text-neutral-200"
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "Web Development",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${form.firstName} ${form.lastName}`,
          from_email: form.email,
          email: form.email,
          name: `${form.firstName} ${form.lastName}`,
          service: form.service,
          message: form.message,
          to_email: "owhekoraobaro@gmail.com",
        },
        EMAILJS_PUBLIC_KEY,
      );

      setSent(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        service: "Web Development",
        message: "",
      });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border border-gold-border hover:border-gold/40 focus:border-gold rounded-lg px-4 py-2.5 text-[14px] text-neutral-800 dark:text-neutral-200 outline-none transition-colors duration-200 placeholder:text-neutral-400";

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <p className="section-tag-line text-gold text-[11px] tracking-[2.5px] uppercase font-medium mb-3">
        Get In Touch
      </p>
      <h2 className="font-display text-[clamp(32px,3.5vw,48px)] font-light leading-[1.1] text-neutral-900 dark:text-neutral-50 mb-14">
        Let's Build Something <span className="text-gradient-gold">Great</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-14 items-start">
        {/* Left info */}
        <div>
          <h3 className="font-display text-2xl font-medium text-neutral-900 dark:text-neutral-100 mb-3">
            Ready to start a project?
          </h3>
          <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
            Whether you need a full product built from scratch, a UI overhaul,
            an API integration, or just some expert advice — I'd love to hear
            what you're working on.
          </p>

          <div className="flex flex-col gap-5">
            {contactDetails.map((d) => (
              <div key={d.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-faint border border-gold-border flex items-center justify-center text-base shrink-0">
                  {d.icon}
                </div>
                <div>
                  <p className="text-[11px] text-neutral-400 uppercase tracking-wider mb-0.5">
                    {d.label}
                  </p>
                  <p className="text-[14px] font-medium text-neutral-800 dark:text-neutral-200">
                    {d.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="mt-8 flex gap-3">
            {[
              { l: "GitHub", h: "https://github.com/Emmirez" },
              {
                l: "LinkedIn",
                h: "https://www.linkedin.com/in/obaro-owhekora-26a8333b7",
              },
              { l: "TikTok", h: "https://www.tiktok.com/@devclosure" },
            ].map((s) => (
              <a
                key={s.l}
                href={s.h}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] text-neutral-400 hover:text-gold border border-gold-border hover:border-gold px-3.5 py-1.5 rounded-md transition-all duration-200"
              >
                {s.l}
              </a>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="border border-gold-border rounded-2xl p-8 bg-white dark:bg-[#13131E]">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-2xl mb-4">
                ✓
              </div>
              <p className="font-display text-xl text-neutral-800 dark:text-neutral-200 mb-2">
                Message Sent!
              </p>
              <p className="text-[13px] text-neutral-400">
                I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] text-neutral-400 uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Alex"
                    required
                    className={inputClass}
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] text-neutral-400 uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Morgan"
                    required
                    className={inputClass}
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-neutral-400 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-neutral-400 uppercase tracking-wider">
                  Service Needed
                </label>
                <EnhancedSelect
                  value={form.service}
                  onChange={(value) => setForm({ ...form, service: value })}
                  options={SERVICE_OPTIONS}
                  placeholder="Select a service"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-neutral-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project, goals, and timeline..."
                  required
                  className={inputClass + " resize-none"}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              {error && (
                <p className="text-[13px] text-red-400 text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-1 w-full bg-gold hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed text-[#080810] font-medium text-[14px] py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}