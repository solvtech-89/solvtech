import { useEffect, useRef, useState } from "react";
import solvTechLogo from "./assets/solvTech.png";

const sectionOrder = [
  "hero",
  "story",
  "services",
  "process",
  "proof",
  "contact",
];

const services = [
  {
    key: "lead",
    title: "Lead Engine",
    text: "Positioning, landing architecture, and conversion flow tuned for qualified leads.",
  },
  {
    key: "crm",
    title: "CRM Structure",
    text: "Pipeline clarity, customer lifecycle mapping, and follow-up logic your team can maintain.",
  },
  {
    key: "erp",
    title: "ERP Layer",
    text: "Operational visibility for finance, inventory, and reporting without unnecessary complexity.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit",
    text: "Map brand, lead flow, CRM process, and operational bottlenecks.",
  },
  {
    step: "02",
    title: "Design",
    text: "Shape the narrative, interaction, and system blueprint together.",
  },
  {
    step: "03",
    title: "Deploy",
    text: "Ship website, automation touchpoints, and foundational operations.",
  },
  {
    step: "04",
    title: "Refine",
    text: "Iterate based on signal quality, clarity, and team adoption.",
  },
];

const proofStats = [
  { value: "3x", label: "clearer lead journey" },
  { value: "24/7", label: "business visibility" },
  { value: "1 stack", label: "lead, CRM, ERP alignment" },
];

const storyWords = [
  "Classy",
  "Trendy",
  "Startup-ready",
  "Trust-first",
  "Operational",
  "Modern",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [email, setEmail] = useState("");
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    story: false,
    services: false,
    process: false,
    proof: false,
    contact: false,
  });
  const mainRef = useRef(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let topSection = null;
        let topRatio = 0;

        entries.forEach((entry) => {
          const sectionName = entry.target.dataset.section;
          if (!sectionName) return;

          if (entry.isIntersecting) {
            setVisibleSections((current) => ({
              ...current,
              [sectionName]: true,
            }));
          }

          if (entry.isIntersecting && entry.intersectionRatio > topRatio) {
            topRatio = entry.intersectionRatio;
            topSection = sectionName;
          }
        });

        if (topSection) {
          setActiveSection(topSection);
        }
      },
      { root, threshold: [0.2, 0.4, 0.6, 0.8] },
    );

    root
      .querySelectorAll("[data-section]")
      .forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const maxScroll = root.scrollHeight - root.clientHeight;
      const progress = maxScroll > 0 ? root.scrollTop / maxScroll : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    root.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      root.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function track(eventName, params = {}) {
    try {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", eventName, params);
      }
    } catch (error) {
      console.warn("analytics error", error);
    }
  }

  function openWhatsApp(message) {
    const text = encodeURIComponent(`Hello SolvTech, ${message}`);
    window.open(
      `https://wa.me/6281329877494?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function handleCall() {
    track("book_call_click", { method: "whatsapp" });
    openWhatsApp(
      "I want to book a discovery consultation for lead growth, CRM, and ERP.",
    );
  }

  function handleAudit() {
    track("request_audit_click", { method: "whatsapp" });
    openWhatsApp("I want a quick audit for lead generation and ERP readiness.");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;

    track("lead_form_submit", { method: "whatsapp", email });
    openWhatsApp(
      `I want a consultation for lead generation, CRM, and ERP. My business email is: ${email}`,
    );
  }

  const sectionVisibility = (key) =>
    visibleSections[key]
      ? "opacity-100 translate-y-0 scale-100 blur-0"
      : "opacity-55 translate-y-10 scale-[0.992] blur-[1px]";

  const elementVisibility = (key) =>
    visibleSections[key]
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6";

  const sectionLabel = (section) => {
    if (section === "hero") return "Home";
    if (section === "story") return "Story";
    if (section === "services") return "Services";
    if (section === "process") return "Process";
    if (section === "proof") return "Proof";
    return "Contact";
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f1ea] text-slate-900 selection:bg-slate-900 selection:text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.08),transparent_24%)]" />
      <div className="pointer-events-none fixed left-[-7rem] top-16 hidden h-96 w-96 rounded-full bg-slate-900/5 blur-3xl lg:block" />
      <div className="pointer-events-none fixed right-[-7rem] top-36 hidden h-96 w-96 rounded-full bg-orange-300/10 blur-3xl lg:block" />

      <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-1 bg-white/60">
        <div
          className="h-full origin-left bg-gradient-to-r from-slate-900 via-slate-700 to-orange-500 transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <nav className="relative z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-3">
            <img
              src={solvTechLogo}
              alt="SolvTech Logo"
              className="h-10 w-10 rounded-xl object-contain"
              loading="eager"
            />
            <div>
              <div className="text-base font-semibold tracking-tight text-slate-900">
                SolvTech
              </div>
              <div className="text-xs text-slate-500">
                Lead generation & ERP
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {sectionOrder.map((section) => {
              const active = activeSection === section;
              return (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-sm tracking-[0.06em] transition ${active ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
                >
                  {sectionLabel(section)}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={handleCall}
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
            >
              WhatsApp Consult
            </button>
            <button
              onClick={handleAudit}
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-700"
            >
              Request Audit
            </button>
          </div>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-full border border-slate-300 p-2 text-slate-700 md:hidden"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {sectionOrder.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-slate-50"
                >
                  {sectionLabel(section)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main
        ref={mainRef}
        className="h-[calc(100dvh-5rem)] overflow-y-auto scroll-smooth lg:snap-y lg:snap-proximity"
      >
        <section
          id="hero"
          data-section="hero"
          className={`lg:snap-start min-h-[calc(100dvh-5rem)] px-4 py-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-6 lg:px-8 ${sectionVisibility("hero")}`}
        >
          <div className="mx-auto flex min-h-full max-w-7xl items-start py-2 lg:items-center">
            <div className="grid w-full gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-slate-500 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                  Startup-ready digital system
                </div>

                <div
                  className={`space-y-4 transition-all duration-700 delay-75 ${elementVisibility("hero")}`}
                >
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
                    SolvTech
                  </p>
                  <h1 className="max-w-3xl text-4xl font-semibold leading-[1.01] tracking-tight text-slate-900 sm:text-5xl lg:text-[5rem] xl:text-[5.6rem]">
                    The modern growth stack for serious businesses.
                  </h1>
                  <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                    We craft a sharper website experience and connect it
                    directly to CRM and ERP operations, so your brand looks
                    premium and your team works cleaner.
                  </p>
                </div>

                <div
                  className={`flex flex-col gap-3 transition-all duration-700 delay-150 sm:flex-row ${elementVisibility("hero")}`}
                >
                  <button
                    onClick={handleAudit}
                    className="rounded-full bg-slate-900 px-6 py-3.5 font-medium text-white shadow-[0_14px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-700"
                  >
                    Request Audit
                  </button>
                  <button
                    onClick={handleCall}
                    className="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
                  >
                    WhatsApp Consultation
                  </button>
                </div>
              </div>

              <div
                className={`relative transition-all duration-700 delay-200 ${elementVisibility("hero")}`}
              >
                <div className="absolute -inset-4 rounded-[2.5rem] bg-slate-900/5 blur-2xl" />
                <div className="relative rounded-[2.4rem] border border-slate-200 bg-white p-7 shadow-[0_22px_70px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.1)]">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    Core focus
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                    Lead, CRM, ERP
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Not separate projects. One coherent system that gives a
                    better brand signal and a better operating rhythm.
                  </p>

                  <div className="mt-6 space-y-3">
                    {services.map((service, index) => (
                      <div
                        key={service.key}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                      >
                        <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                          0{index + 1}
                        </div>
                        <div className="mt-2 text-sm font-medium text-slate-800">
                          {service.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="story"
          data-section="story"
          className={`lg:snap-start min-h-[calc(100dvh-5rem)] px-4 py-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-6 lg:px-8 ${sectionVisibility("story")}`}
        >
          <div className="mx-auto flex min-h-full max-w-7xl items-start py-2 lg:items-center">
            <div className="w-full rounded-[2.5rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:px-8 lg:px-10 lg:py-10">
              <div
                className={`max-w-4xl space-y-5 transition-all duration-700 ${elementVisibility("story")}`}
              >
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
                  Story
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Most brands lose momentum when design and operations are not
                  connected.
                </h2>
                <p className="max-w-3xl text-base leading-8 text-slate-600">
                  SolvTech closes that gap. Your audience gets a clearer
                  message, while your team gets a system that is easier to
                  execute, track, and scale.
                </p>
              </div>

              <div className="relative mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 py-4">
                <div className="animate-[scrollx_14s_linear_infinite] whitespace-nowrap px-4 text-sm uppercase tracking-[0.26em] text-slate-500 [@keyframes_scrollx{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}]">
                  {[...storyWords, ...storyWords].map((word, index) => (
                    <span
                      key={`${word}-${index}`}
                      className="mx-4 inline-flex items-center gap-3"
                    >
                      <span>{word}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500/70" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          data-section="services"
          className={`lg:snap-start min-h-[calc(100dvh-5rem)] px-4 py-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-6 lg:px-8 ${sectionVisibility("services")}`}
        >
          <div className="mx-auto flex min-h-full max-w-7xl items-start py-2 lg:items-center">
            <div className="w-full space-y-8">
              <div
                className={`max-w-3xl space-y-4 transition-all duration-700 ${elementVisibility("services")}`}
              >
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
                  Services
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  One clean message per block. Clear, premium, and easy to scan.
                </h2>
              </div>

              <div className="grid overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] lg:grid-cols-3">
                {services.map((service, index) => (
                  <article
                    key={service.key}
                    className={`p-7 transition duration-500 hover:bg-slate-50/70 sm:p-8 ${index < services.length - 1 ? "lg:border-r lg:border-slate-100" : ""}`}
                  >
                    <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                      0{index + 1}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {service.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="process"
          data-section="process"
          className={`lg:snap-start min-h-[calc(100dvh-5rem)] px-4 py-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-6 lg:px-8 ${sectionVisibility("process")}`}
        >
          <div className="mx-auto flex min-h-full max-w-7xl items-start py-2 lg:items-center">
            <div className="w-full rounded-[2.5rem] border border-slate-200 bg-slate-900 px-6 py-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.22)] sm:px-8 lg:px-10 lg:py-10">
              <div
                className={`max-w-3xl space-y-4 transition-all duration-700 ${elementVisibility("process")}`}
              >
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
                  Process
                </p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  A modern workflow that feels simple, not simplistic.
                </h2>
              </div>

              <div className="mt-8 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 md:grid-cols-4">
                {processSteps.map((item, index) => (
                  <div
                    key={item.step}
                    className={`p-5 transition duration-500 hover:bg-white/10 ${index < processSteps.length - 1 ? "border-b border-white/10 md:border-b-0 md:border-r md:border-white/10" : ""}`}
                  >
                    <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                      {item.step}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="proof"
          data-section="proof"
          className={`lg:snap-start min-h-[calc(100dvh-5rem)] px-4 py-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-6 lg:px-8 ${sectionVisibility("proof")}`}
        >
          <div className="mx-auto flex min-h-full max-w-7xl items-start py-2 lg:items-center">
            <div className="grid w-full gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div
                className={`space-y-4 transition-all duration-700 ${elementVisibility("proof")}`}
              >
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
                  Proof
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Minimal layout, but still strong enough to earn trust.
                </h2>
                <p className="max-w-xl text-base leading-8 text-slate-600">
                  We use a balanced layout with clear data points so the page
                  feels complete, not unfinished.
                </p>
              </div>

              <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.05)] sm:p-8">
                <div className="grid gap-4 sm:grid-cols-3">
                  {proofStats.map((item) => (
                    <div
                      key={item.value}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-500 hover:-translate-y-1 hover:bg-white"
                    >
                      <div className="text-xl font-semibold text-slate-900">
                        {item.value}
                      </div>
                      <div className="mt-2 text-sm leading-7 text-slate-600">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <blockquote className="mt-6 rounded-2xl bg-slate-900 px-6 py-6 text-slate-200">
                  <p className="text-lg leading-8">
                    "SolvTech helps us look more credible in front of clients
                    while keeping internal execution clear and practical."
                  </p>
                  <footer className="mt-4 text-sm text-slate-400">
                    Operations Team, B2B Company
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          data-section="contact"
          className={`lg:snap-start min-h-[calc(100dvh-5rem)] px-4 py-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-6 lg:px-8 ${sectionVisibility("contact")}`}
        >
          <div className="mx-auto flex min-h-full max-w-7xl items-start py-2 lg:items-center">
            <div className="grid w-full gap-8 rounded-[2.5rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-10">
              <div
                className={`space-y-4 transition-all duration-700 ${elementVisibility("contact")}`}
              >
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
                  Contact
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Ready to modernize your growth system?
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-600">
                  Start from WhatsApp and we will map the fastest path for lead
                  growth, CRM structure, and ERP clarity.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={handleAudit}
                    className="rounded-full bg-slate-900 px-6 py-3.5 font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-700"
                  >
                    Chat on WhatsApp
                  </button>
                  <button
                    onClick={handleCall}
                    className="rounded-full border border-slate-300 px-6 py-3.5 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50"
                  >
                    WhatsApp Consultation
                  </button>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7"
              >
                <div className="border-b border-slate-200 pb-5">
                  <p className="text-sm text-slate-500">Stay in touch</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                    Leave your business email
                  </h3>
                </div>

                <div className="mt-6 space-y-4">
                  <label
                    htmlFor="leadEmail"
                    className="text-sm font-medium text-slate-700"
                  >
                    Business email
                  </label>
                  <input
                    id="leadEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-orange-500 px-6 py-3.5 font-medium text-white shadow-[0_12px_30px_rgba(249,115,22,0.22)] transition hover:-translate-y-0.5 hover:bg-orange-600"
                  >
                    Send to WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
