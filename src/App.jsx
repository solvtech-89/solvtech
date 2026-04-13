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

const heroVariants = [
  {
    id: "A",
    badge: "Startup-ready digital system",
    title: "The modern growth stack for serious businesses.",
    subtitle:
      "We craft a sharper website experience and connect it directly to CRM and ERP operations, so your brand looks premium and your team works cleaner.",
    primaryCta: "Request Audit",
    secondaryCta: "WhatsApp Consultation",
  },
  {
    id: "B",
    badge: "Built for lead quality and scale",
    title: "Grow faster with one connected lead, CRM, and ERP system.",
    subtitle:
      "From first impression to daily operations, SolvTech aligns the full business journey so conversion, follow-up, and execution stay in sync.",
    primaryCta: "Start on WhatsApp",
    secondaryCta: "See Growth Blueprint",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [email, setEmail] = useState("");
  const [heroVariant] = useState(() => {
    if (typeof window === "undefined") return 0;
    const stored = window.sessionStorage.getItem("heroVariant");
    if (stored === "0" || stored === "1") return Number(stored);
    const selected = Math.random() < 0.5 ? 0 : 1;
    window.sessionStorage.setItem("heroVariant", String(selected));
    return selected;
  });
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    story: false,
    services: false,
    process: false,
    proof: false,
    contact: false,
  });

  const mainRef = useRef(null);
  const seenSectionsRef = useRef(new Set());
  const seenScrollMilestonesRef = useRef(new Set());

  const heroCopy = heroVariants[heroVariant] || heroVariants[0];
  const heroVariantId = heroCopy.id;

  function track(action, params = {}) {
    try {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", action, params);
      }
    } catch (error) {
      console.warn("analytics error", error);
    }
  }

  function trackGa4(action, { category, label, value = 1, ...extra } = {}) {
    track(action, {
      event_category: category,
      event_label: label,
      value,
      ...extra,
    });
  }

  useEffect(() => {
    trackGa4("experiment_view", {
      category: "experiment",
      label: `hero_variant_${heroVariantId}`,
      value: 1,
      variant: heroVariantId,
    });
  }, [heroVariantId]);

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

            if (!seenSectionsRef.current.has(sectionName)) {
              seenSectionsRef.current.add(sectionName);
              trackGa4("section_view", {
                category: "engagement",
                label: sectionName,
                value: 1,
                section: sectionName,
                variant: heroVariantId,
              });
            }
          }

          if (entry.isIntersecting && entry.intersectionRatio > topRatio) {
            topRatio = entry.intersectionRatio;
            topSection = sectionName;
          }
        });

        if (topSection) setActiveSection(topSection);
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

      [25, 50, 75, 100].forEach((milestone) => {
        if (
          progress * 100 >= milestone &&
          !seenScrollMilestonesRef.current.has(milestone)
        ) {
          seenScrollMilestonesRef.current.add(milestone);
          trackGa4("scroll_depth", {
            category: "engagement",
            label: `depth_${milestone}`,
            value: milestone,
            depth_percent: milestone,
            variant: heroVariantId,
          });
        }
      });
    };

    handleScroll();
    root.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      root.removeEventListener("scroll", handleScroll);
    };
  }, [heroVariantId]);

  function openWhatsApp(message) {
    const text = encodeURIComponent(`Hello SolvTech, ${message}`);
    window.open(
      `https://wa.me/6287844461289?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function handleCall(source = "general") {
    trackGa4("cta_click", {
      category: "conversion",
      label: `whatsapp_consult_${source}`,
      value: 1,
      method: "whatsapp",
      source,
      variant: heroVariantId,
      cta_type: "consultation",
    });
    openWhatsApp(
      "I want to book a discovery consultation for lead growth, CRM, and ERP.",
    );
  }

  function handleAudit(source = "general") {
    trackGa4("cta_click", {
      category: "conversion",
      label: `whatsapp_audit_${source}`,
      value: 1,
      method: "whatsapp",
      source,
      variant: heroVariantId,
      cta_type: "audit",
    });
    openWhatsApp("I want a quick audit for lead generation and ERP readiness.");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;

    trackGa4("lead_submit", {
      category: "conversion",
      label: "whatsapp_form_submit",
      value: 1,
      method: "whatsapp",
      variant: heroVariantId,
      has_email: true,
    });

    openWhatsApp(
      `I want a consultation for lead generation, CRM, and ERP. My business email is: ${email}`,
    );
  }

  function handleSectionNav(section, source = "nav_desktop") {
    trackGa4("section_nav_click", {
      category: "engagement",
      label: `${source}_${section}`,
      value: 1,
      section,
      source,
      variant: heroVariantId,
    });
  }

  const sectionVisibility = (key) =>
    visibleSections[key]
      ? "opacity-100 translate-y-0 scale-100 blur-0"
      : "opacity-55 translate-y-10 scale-[0.992] blur-[1px]";

  const elementVisibility = (key) =>
    visibleSections[key]
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6";

  const headlineVisibility = (key) =>
    visibleSections[key]
      ? "opacity-100 translate-y-0 tracking-tight"
      : "opacity-0 translate-y-8 tracking-[0.02em]";

  const staggerStyle = (key, index, step = 90, base = 80) => ({
    transitionDelay: visibleSections[key] ? `${base + index * step}ms` : "0ms",
  });

  const sectionLabel = (section) => {
    if (section === "hero") return "Home";
    if (section === "story") return "Story";
    if (section === "services") return "Services";
    if (section === "process") return "Process";
    if (section === "proof") return "Proof";
    return "Contact";
  };

  const sceneIndex = Math.max(sectionOrder.indexOf(activeSection), 0);
  const sceneProgress = ((sceneIndex + 1) / sectionOrder.length) * 100;

  const activeBackground =
    activeSection === "hero"
      ? "bg-[#f4f1ea]"
      : activeSection === "story"
        ? "bg-[#f2eee6]"
        : activeSection === "services"
          ? "bg-[#f5f0e8]"
          : activeSection === "process"
            ? "bg-[#f0ece4]"
            : activeSection === "proof"
              ? "bg-[#f3efe7]"
              : "bg-[#f4f1ea]";

  const atmosphereClass =
    activeSection === "process"
      ? "opacity-100"
      : activeSection === "hero"
        ? "opacity-80"
        : "opacity-60";

  const atmosphereScale = 1 + scrollProgress * 0.06;

  return (
    <div
      className={`min-h-screen overflow-x-hidden text-slate-900 transition-colors duration-700 selection:bg-slate-900 selection:text-white ${activeBackground}`}
    >
      <div
        className={`pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.07),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.1),transparent_24%)] transition-opacity duration-700 ${atmosphereClass}`}
        style={{ transform: `scale(${atmosphereScale})` }}
      />
      <div
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2),transparent_22%,transparent_78%,rgba(15,23,42,0.12))] transition-opacity duration-700"
        style={{
          transform: `translateY(${Math.round(scrollProgress * -24)}px)`,
        }}
      />
      <div className="pointer-events-none fixed inset-0 opacity-40 mix-blend-soft-light [background:repeating-linear-gradient(0deg,rgba(15,23,42,0.015)_0px,rgba(15,23,42,0.015)_1px,transparent_1px,transparent_4px)]" />

      <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-1 bg-white/60">
        <div
          className="h-full origin-left bg-gradient-to-r from-slate-900 via-slate-700 to-orange-500 transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <div className="pointer-events-none fixed right-6 top-[5.8rem] z-50 hidden lg:block">
        <div className="rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-lg backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.22em] text-slate-400">
            <span>Scene</span>
            <span className="text-slate-500">
              {sceneIndex + 1}/{sectionOrder.length}
            </span>
          </div>
          <div className="mt-1.5 text-sm font-medium text-slate-800">
            {sectionLabel(activeSection)}
          </div>
          <div className="mt-3 h-1 w-28 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-slate-900 to-orange-500 transition-all duration-300"
              style={{ width: `${sceneProgress}%` }}
            />
          </div>
        </div>
      </div>

      <nav className="relative z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#hero"
            onClick={() => handleSectionNav("hero", "logo")}
            className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70"
          >
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
                  onClick={() => handleSectionNav(section, "nav_desktop")}
                  aria-current={active ? "page" : undefined}
                  className={`group relative text-sm tracking-[0.06em] transition ${active ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
                >
                  {sectionLabel(section)}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-slate-900 to-orange-500 transition-all duration-300 ${active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-70"}`}
                  />
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => handleCall("nav_desktop")}
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 motion-reduce:transform-none"
            >
              WhatsApp Now
            </button>
            <button
              onClick={() => handleAudit("nav_desktop")}
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 motion-reduce:transform-none"
            >
              Free Audit
            </button>
          </div>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-full border border-slate-300 p-2 text-slate-700 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70"
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
              {sectionOrder.map((section) => {
                const active = activeSection === section;
                return (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={() => {
                      handleSectionNav(section, "nav_mobile");
                      setMenuOpen(false);
                    }}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-2xl px-4 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 ${active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"}`}
                  >
                    {sectionLabel(section)}
                  </a>
                );
              })}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    handleCall("nav_mobile");
                  }}
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70"
                >
                  WhatsApp Now
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    handleAudit("nav_mobile");
                  }}
                  className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70"
                >
                  Free Audit
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main
        ref={mainRef}
        className="h-[calc(100dvh-5rem)] overflow-y-auto overscroll-y-contain scroll-smooth lg:snap-y lg:snap-proximity"
      >
        <section
          id="hero"
          data-section="hero"
          className={`scroll-mt-24 lg:snap-start min-h-[calc(100dvh-5rem)] px-4 py-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transform-none sm:px-6 sm:py-12 lg:px-8 lg:py-10 ${sectionVisibility("hero")}`}
        >
          <div className="mx-auto flex min-h-full max-w-7xl items-start py-2 lg:items-center">
            <div className="grid w-full gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-slate-500 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                  {heroCopy.badge}
                </div>
                <div
                  className={`space-y-4 transition-all duration-700 delay-75 ${elementVisibility("hero")}`}
                >
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
                    SolvTech
                  </p>
                  <h1
                    className={`max-w-3xl text-4xl font-semibold leading-[1.01] text-slate-900 transition-all duration-700 sm:text-5xl lg:text-[5rem] xl:text-[5.6rem] ${headlineVisibility("hero")}`}
                  >
                    {heroCopy.title}
                  </h1>
                  <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                    {heroCopy.subtitle}
                  </p>
                </div>
                <div
                  className={`flex flex-col gap-3 transition-all duration-700 delay-150 sm:flex-row ${elementVisibility("hero")}`}
                >
                  <button
                    onClick={() => handleAudit("hero_primary")}
                    className="rounded-full bg-slate-900 px-6 py-3.5 font-medium text-white shadow-[0_14px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 motion-reduce:transform-none"
                  >
                    {heroCopy.primaryCta}
                  </button>
                  <button
                    onClick={() => handleCall("hero_secondary")}
                    className="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 motion-reduce:transform-none"
                  >
                    {heroCopy.secondaryCta}
                  </button>
                </div>
                <div
                  className={`grid gap-3 text-sm text-slate-600 sm:grid-cols-3 ${elementVisibility("hero")}`}
                >
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    Fast response on WhatsApp
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    Lead-focused strategy
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    Operational clarity built-in
                  </div>
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
                  <h2
                    className={`mt-3 text-2xl font-semibold text-slate-900 transition-all duration-700 ${headlineVisibility("hero")}`}
                  >
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
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all duration-700"
                        style={staggerStyle("hero", index, 70, 120)}
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
          className={`scroll-mt-24 lg:snap-start min-h-[calc(100dvh-5rem)] px-4 py-10 transition-all duration-[1050ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transform-none sm:px-6 sm:py-12 lg:px-8 lg:py-10 ${sectionVisibility("story")}`}
        >
          <div className="mx-auto flex min-h-full max-w-7xl items-start py-2 lg:items-center">
            <div className="w-full rounded-[2.5rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:px-8 lg:px-10 lg:py-10">
              <div
                className={`max-w-4xl space-y-5 transition-all duration-700 ${elementVisibility("story")}`}
              >
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
                  Story
                </p>
                <h2
                  className={`text-3xl font-semibold text-slate-900 transition-all duration-700 sm:text-4xl lg:text-5xl ${headlineVisibility("story")}`}
                >
                  Most brands lose momentum when design and operations are not
                  connected.
                </h2>
                <p className="max-w-3xl text-base leading-8 text-slate-600">
                  SolvTech closes that gap. Your audience understands your value
                  faster, and your internal team runs with better structure.
                </p>
              </div>
              <div
                className={`relative mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 py-4 transition-all duration-700 ${elementVisibility("story")}`}
                style={staggerStyle("story", 1, 120, 120)}
              >
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
          className={`scroll-mt-24 lg:snap-start min-h-[calc(100dvh-5rem)] px-4 py-10 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transform-none sm:px-6 sm:py-12 lg:px-8 lg:py-10 ${sectionVisibility("services")}`}
        >
          <div className="mx-auto flex min-h-full max-w-7xl items-start py-2 lg:items-center">
            <div className="w-full space-y-8">
              <div
                className={`max-w-3xl space-y-4 transition-all duration-700 ${elementVisibility("services")}`}
              >
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
                  Services
                </p>
                <h2
                  className={`text-3xl font-semibold text-slate-900 transition-all duration-700 sm:text-4xl lg:text-5xl ${headlineVisibility("services")}`}
                >
                  Three services that move growth and operations together.
                </h2>
              </div>
              <div className="grid overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] lg:grid-cols-3">
                {services.map((service, index) => (
                  <article
                    key={service.key}
                    className={`p-7 transition duration-500 hover:bg-slate-50/70 sm:p-8 ${index < services.length - 1 ? "lg:border-r lg:border-slate-100" : ""}`}
                    style={staggerStyle("services", index, 95, 100)}
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
          className={`scroll-mt-24 lg:snap-start min-h-[calc(100dvh-5rem)] px-4 py-10 transition-all duration-[980ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transform-none sm:px-6 sm:py-12 lg:px-8 lg:py-10 ${sectionVisibility("process")}`}
        >
          <div className="mx-auto flex min-h-full max-w-7xl items-start py-2 lg:items-center">
            <div className="w-full rounded-[2.5rem] border border-slate-200 bg-slate-900 px-6 py-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.22)] sm:px-8 lg:px-10 lg:py-10">
              <div
                className={`max-w-3xl space-y-4 transition-all duration-700 ${elementVisibility("process")}`}
              >
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
                  Process
                </p>
                <h2
                  className={`text-3xl font-semibold transition-all duration-700 sm:text-4xl lg:text-5xl ${headlineVisibility("process")}`}
                >
                  A delivery flow designed for momentum and clarity.
                </h2>
              </div>
              <div className="mt-8 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 md:grid-cols-4">
                {processSteps.map((item, index) => (
                  <div
                    key={item.step}
                    className={`p-5 transition duration-500 hover:bg-white/10 ${index < processSteps.length - 1 ? "border-b border-white/10 md:border-b-0 md:border-r md:border-white/10" : ""}`}
                    style={staggerStyle("process", index, 80, 120)}
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
          className={`scroll-mt-24 lg:snap-start min-h-[calc(100dvh-5rem)] px-4 py-10 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transform-none sm:px-6 sm:py-12 lg:px-8 lg:py-10 ${sectionVisibility("proof")}`}
        >
          <div className="mx-auto flex min-h-full max-w-7xl items-start py-2 lg:items-center">
            <div className="grid w-full gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div
                className={`space-y-4 transition-all duration-700 ${elementVisibility("proof")}`}
              >
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
                  Proof
                </p>
                <h2
                  className={`text-3xl font-semibold text-slate-900 transition-all duration-700 sm:text-4xl lg:text-5xl ${headlineVisibility("proof")}`}
                >
                  Clean visual direction, backed by measurable business
                  outcomes.
                </h2>
                <p className="max-w-xl text-base leading-8 text-slate-600">
                  The goal is simple: better trust, better lead quality, and
                  smoother execution from front office to operations.
                </p>
              </div>
              <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.05)] sm:p-8">
                <div className="grid gap-4 sm:grid-cols-3">
                  {proofStats.map((item, index) => (
                    <div
                      key={item.value}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-500 hover:-translate-y-1 hover:bg-white"
                      style={staggerStyle("proof", index, 90, 120)}
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
          className={`scroll-mt-24 lg:snap-start min-h-[calc(100dvh-5rem)] px-4 py-10 transition-all duration-[860ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transform-none sm:px-6 sm:py-12 lg:px-8 lg:py-10 ${sectionVisibility("contact")}`}
        >
          <div className="mx-auto flex min-h-full max-w-7xl items-start py-2 lg:items-center">
            <div className="grid w-full gap-8 rounded-[2.5rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-10">
              <div
                className={`space-y-4 transition-all duration-700 ${elementVisibility("contact")}`}
              >
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
                  Contact
                </p>
                <h2
                  className={`text-3xl font-semibold text-slate-900 transition-all duration-700 sm:text-4xl lg:text-5xl ${headlineVisibility("contact")}`}
                >
                  Ready to launch a sharper growth system?
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-600">
                  Start from WhatsApp and we will map the fastest path for lead
                  growth, CRM structure, and ERP clarity.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => handleAudit("contact_primary")}
                    className="rounded-full bg-slate-900 px-6 py-3.5 font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 motion-reduce:transform-none"
                  >
                    Chat on WhatsApp
                  </button>
                  <button
                    onClick={() => handleCall("contact_secondary")}
                    className="rounded-full border border-slate-300 px-6 py-3.5 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 motion-reduce:transform-none"
                  >
                    WhatsApp Consultation
                  </button>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className={`rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition-all duration-700 ${elementVisibility("contact")}`}
                style={staggerStyle("contact", 1, 120, 120)}
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
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus-visible:ring-2 focus-visible:ring-slate-300"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-orange-500 px-6 py-3.5 font-medium text-white shadow-[0_12px_30px_rgba(249,115,22,0.22)] transition hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 motion-reduce:transform-none"
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
