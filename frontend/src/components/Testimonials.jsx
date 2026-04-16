import { useState, useEffect } from "react";
import { testimonialsAPI } from "../services/api";

const SEED_TESTIMONIALS = [
  {
    id: "seed-1",
    initials: "SR",
    name: "Sarah R.",
    role: "Client — E-Commerce Project",
    stars: 5,
    text: "Delivered a stunning and functional e-commerce site on time and within budget. The attention to detail in both the code quality and UI design was exceptional. Highly recommend.",
  },
  {
    id: "seed-2",
    initials: "JM",
    name: "James M.",
    role: "Collaborator — Fintech Project",
    stars: 5,
    text: "Great developer to work with — clean code, fast communication, and a real eye for design. The crypto platform came out better than I imagined. Would work together again.",
  },
  {
    id: "seed-3",
    initials: "AO",
    name: "Amara O.",
    role: "Client — SaaS Dashboard",
    stars: 5,
    text: "The task management app he built for our team is smooth, fast, and our team loves using it daily. A developer who actually understands product thinking beyond just code.",
  },
];

const PROJECT_TYPES = [
  "E-Commerce Project",
  "Fintech Project",
  "SaaS Dashboard",
  "Healthcare Platform",
  "Restaurant Booking App",
  "Management System",
  "Mobile App",
  "API Integration",
  "UI/UX Design",
  "Tech Consulting",
  "Other",
];

// Enhanced Select Component
const EnhancedSelect = ({
  value,
  onChange,
  options,
  placeholder,
  error,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useState(null);

  const selectedOption = options.find((opt) => opt === value);

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
          {selectedOption || placeholder || "Select an option"}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
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
                  value === option
                    ? "text-gold bg-gold-faint"
                    : "text-neutral-800 dark:text-neutral-200"
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

function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Testimonials() {
  const [userTestimonials, setUserTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    projectType: "",
    customProject: "",
    stars: 5,
    text: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    loadTestimonials();
  }, []);

  async function loadTestimonials() {
    try {
      const result = await testimonialsAPI.getAll();
      if (result.success && result.testimonials) {
        setUserTestimonials(result.testimonials);
      } else {
        loadFromLocalStorage();
      }
    } catch (error) {
      console.error("Failed to load testimonials from API:", error);
      loadFromLocalStorage();
    }
  }

  function loadFromLocalStorage() {
    try {
      const saved = localStorage.getItem("testimonials");
      if (saved) {
        const testimonials = JSON.parse(saved);
        setUserTestimonials(
          testimonials.sort((a, b) => b.createdAt - a.createdAt),
        );
      }
    } catch {
      // no testimonials yet
    }
  }

  function saveToLocalStorage(testimonials) {
    try {
      localStorage.setItem("testimonials", JSON.stringify(testimonials));
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }

  function getFullRole() {
    if (form.projectType === "Other") {
      return `Client — ${form.customProject.trim()}`;
    }
    return `Client — ${form.projectType}`;
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.projectType) e.projectType = "Please select a project type";
    if (form.projectType === "Other" && !form.customProject.trim()) {
      e.customProject = "Please enter your project type";
    }
    if (!form.text.trim()) e.text = "Testimonial is required";
    if (form.text.trim().length < 20)
      e.text = "Please write at least 20 characters";
    return e;
  }

  async function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSubmitting(true);

    const fullRole = getFullRole();
    const id = `testimonial:${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const entry = {
      id,
      initials: getInitials(form.name),
      name: form.name.trim(),
      role: fullRole,
      stars: form.stars,
      text: form.text.trim(),
      createdAt: Date.now(),
    };

    try {
      const result = await testimonialsAPI.create(entry);

      if (result.success) {
        setUserTestimonials((prev) => [result.testimonial, ...prev]);
        setSubmitted(true);
        setForm({
          name: "",
          projectType: "",
          customProject: "",
          stars: 5,
          text: "",
        });
        setErrors({});
        setTimeout(() => {
          setShowForm(false);
          setSubmitted(false);
        }, 2200);
      } else {
        const existing = JSON.parse(
          localStorage.getItem("testimonials") || "[]",
        );
        const updated = [entry, ...existing];
        saveToLocalStorage(updated);
        setUserTestimonials((prev) => [entry, ...prev]);
        setSubmitted(true);
        setForm({
          name: "",
          projectType: "",
          customProject: "",
          stars: 5,
          text: "",
        });
        setErrors({});
        setTimeout(() => {
          setShowForm(false);
          setSubmitted(false);
        }, 2200);
      }
    } catch (error) {
      console.error("Error saving testimonial:", error);
      const existing = JSON.parse(localStorage.getItem("testimonials") || "[]");
      const updated = [entry, ...existing];
      saveToLocalStorage(updated);
      setUserTestimonials((prev) => [entry, ...prev]);
      setSubmitted(true);
      setForm({
        name: "",
        projectType: "",
        customProject: "",
        stars: 5,
        text: "",
      });
      setErrors({});
      setTimeout(() => {
        setShowForm(false);
        setSubmitted(false);
      }, 2200);
    } finally {
      setSubmitting(false);
    }
  }

  const allTestimonials = [...SEED_TESTIMONIALS, ...userTestimonials];

  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-6 py-24">
      <p className="section-tag-line text-gold text-[11px] tracking-[2.5px] uppercase font-medium mb-3">
        Social Proof
      </p>
      <h2 className="font-display text-[clamp(32px,3.5vw,48px)] font-light leading-[1.1] text-neutral-900 dark:text-neutral-50 mb-14">
        Words from <span className="text-gradient-gold">Clients</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allTestimonials.map((t) => (
          <div
            key={t.id}
            className="border border-gold-border hover:border-gold/50 rounded-2xl p-7 bg-white dark:bg-[#13131E] card-hover relative"
          >
            <span className="absolute top-4 right-5 font-display text-5xl text-gold/20 leading-none select-none">
              "
            </span>
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i} className="text-gold text-sm">
                  ★
                </span>
              ))}
            </div>
            <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed italic mb-6">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-faint border border-gold-border flex items-center justify-center text-[13px] font-semibold text-gold shrink-0">
                {t.initials}
              </div>
              <div>
                <p className="text-[14px] font-medium text-neutral-800 dark:text-neutral-200">
                  {t.name}
                </p>
                <p className="text-[11px] text-neutral-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leave a review nudge */}
      <div className="mt-8 text-center">
        <p className="text-[13px] text-neutral-400">
          Worked together?{" "}
          <button
            onClick={() => {
              setShowForm((v) => !v);
              setSubmitted(false);
              setErrors({});
            }}
            className="text-gold hover:underline transition-all"
          >
            {showForm ? "Close form ↑" : "Leave a testimonial →"}
          </button>
        </p>
      </div>

      {/* Inline submission form */}
      {showForm && (
        <div className="mt-8 border border-gold-border rounded-2xl p-8 bg-white dark:bg-[#13131E] max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center py-6">
              <p className="text-2xl mb-2">✦</p>
              <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-200 mb-1">
                Thank you!
              </p>
              <p className="text-[13px] text-neutral-400">
                Your testimonial is now visible to everyone.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <h3 className="text-[15px] font-medium text-neutral-800 dark:text-neutral-200">
                Share your experience
              </h3>
              <p className="text-[12px] text-neutral-400 -mt-3">
                Your testimonial will be visible to all visitors.
              </p>

              {/* Name */}
              <div>
                <label className="block text-[12px] text-neutral-500 mb-1.5">
                  Your name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex T."
                  value={form.name}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, name: e.target.value }));
                    setErrors((er) => ({ ...er, name: undefined }));
                  }}
                  className={`w-full rounded-lg border px-4 py-2.5 text-[14px] bg-transparent text-neutral-800 dark:text-neutral-200 outline-none transition-colors ${errors.name ? "border-red-400 focus:border-red-400" : "border-gold-border focus:border-gold/60"}`}
                />
                {errors.name && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Project Type - Using Enhanced Select */}
              <div>
                <label className="block text-[12px] text-neutral-500 mb-1.5">
                  Select a project type <span className="text-gold">*</span>
                </label>
                <EnhancedSelect
                  value={form.projectType}
                  onChange={(value) => {
                    setForm((f) => ({
                      ...f,
                      projectType: value,
                      customProject: "",
                    }));
                    setErrors((er) => ({
                      ...er,
                      projectType: undefined,
                      customProject: undefined,
                    }));
                  }}
                  options={PROJECT_TYPES}
                  placeholder="Select a project type"
                  error={errors.projectType}
                />
                {errors.projectType && (
                  <p className="text-[11px] text-red-400 mt-1">
                    {errors.projectType}
                  </p>
                )}
              </div>

              {/* Custom Project Input (only shows when "Other" is selected) */}
              {form.projectType === "Other" && (
                <div>
                  <label className="block text-[12px] text-neutral-500 mb-1.5">
                    Your Project Type <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Management System, AI Platform, etc."
                    value={form.customProject}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, customProject: e.target.value }));
                      setErrors((er) => ({ ...er, customProject: undefined }));
                    }}
                    className={`w-full rounded-lg border px-4 py-2.5 text-[14px] bg-white dark:bg-[#13131E] text-neutral-800 dark:text-neutral-200 outline-none transition-colors ${
                      errors.customProject
                        ? "border-red-400 focus:border-red-400"
                        : "border-gold-border focus:border-gold/60"
                    }`}
                  />
                  {errors.customProject && (
                    <p className="text-[11px] text-red-400 mt-1">
                      {errors.customProject}
                    </p>
                  )}
                </div>
              )}

              {/* Stars */}
              <div>
                <label className="block text-[12px] text-neutral-500 mb-2">
                  Rating
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, stars: n }))}
                      className={`text-xl transition-all ${n <= form.stars ? "text-gold" : "text-neutral-300 dark:text-neutral-600"} hover:text-gold`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              {/* Text */}
              <div>
                <label className="block text-[12px] text-neutral-500 mb-1.5">
                  Your testimonial <span className="text-gold">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Share what it was like working together..."
                  value={form.text}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, text: e.target.value }));
                    setErrors((er) => ({ ...er, text: undefined }));
                  }}
                  className={`w-full rounded-lg border px-4 py-2.5 text-[14px] bg-white dark:bg-[#13131E] text-neutral-800 dark:text-neutral-200 outline-none resize-none transition-colors ${
                    errors.text
                      ? "border-red-400 focus:border-red-400"
                      : "border-gold-border focus:border-gold/60"
                  }`}
                />
                {errors.text && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.text}</p>
                )}
              </div>

              {errors.submit && (
                <p className="text-[12px] text-red-400">{errors.submit}</p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex-1 rounded-lg bg-gold hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed text-[#080810] font-medium text-[14px] py-3 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {submitting ? "Submitting…" : "Submit testimonial →"}
                </button>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setErrors({});
                  }}
                  className="px-5 rounded-lg border border-gold-border hover:border-gold text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
