import React, { useEffect, useRef, useState } from "react";
import "./Services.css";

const STEPS = [
  {
    tag: "01 / QUARRY",
    title: "Marble is taken from the quarry",
    desc: "Large marble blocks are carefully cut from the quarry using diamond wire.",
    meta: [
      { label: "METHOD", value: "Diamond wire cutting" },
      { label: "FOCUS", value: "Safe and careful cutting" },
    ],
  },
  {
    tag: "02 / CUT",
    title: "Blocks are cut into slabs",
    desc: "The large blocks are cut into marble slabs and numbered to keep the natural pattern in order.",
    meta: [
      { label: "METHOD", value: "Block cutting" },
      { label: "FOCUS", value: "Natural marble pattern" },
    ],
  },
  {
    tag: "03 / POLISH",
    title: "Slabs are polished",
    desc: "Each slab is polished or finished to get the right look, texture, and shine.",
    meta: [
      { label: "METHOD", value: "Polishing and finishing" },
      { label: "FOCUS", value: "The right finish" },
    ],
  },
  {
    tag: "04 / INSTALL",
    title: "Marble is installed on-site",
    desc: "Our team installs the marble directly on-site, from floors and lobbies to walls and facades.",
    meta: [
      { label: "METHOD", value: "Our installation team" },
      { label: "FOCUS", value: "Complete installation" },
    ],
  },
];

const Services = () => {
  const stepRefs = useRef([]);
  const timelineRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [dotTops, setDotTops] = useState([]);
  const [fillPercent, setFillPercent] = useState(0);

  // Highlight the step currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.step);
          if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
            setActiveIdx(idx);
          }
        });
      },
      { threshold: [0, 0.45, 0.6, 1] }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Measure where each dot should sit on the center line (matches each card's vertical center)
  useEffect(() => {
    function measure() {
      const container = timelineRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const tops = stepRefs.current.map((el) => {
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        const centerY = r.top + r.height / 2 - containerRect.top;
        return (centerY / containerRect.height) * 100;
      });
      setDotTops(tops);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Smooth, continuous line fill tied to scroll position (rAF-throttled)
  useEffect(() => {
    let rafId = null;

    function update() {
      const container = timelineRef.current;
      rafId = null;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.55;
      const progress = (start - rect.top) / rect.height;
      const clamped = Math.min(1, Math.max(0, progress));
      setFillPercent(clamped * 100);
    }

    function onScroll() {
      if (rafId === null) rafId = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="process-page">
      {/* HERO */}
      <section className="hero">
        <div className="eyebrow riseIn d1">THE PROCESS</div>
        <h1 className="hero-h1 serif riseIn d2">
          From rock face
          <br />
          to finished floor
        </h1>
        <p className="hero-sub riseIn d3">
          Four stages, one continuous chain of custody — from our quarry to
          your site.
        </p>
        <div className="scroll-hint riseIn d4">
          <span>Scroll down</span>
          <div className="hint-line">
            <div className="hint-drip drip" />
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <div className="timeline" ref={timelineRef}>
        <div className="timeline-line">
          <div
            className="timeline-line-fill"
            style={{ height: `${fillPercent}%` }}
          />
        </div>

        {dotTops.map((top, i) => (
          <div
            key={i}
            className={`timeline-dot${activeIdx >= i ? " lit" : ""}`}
            style={{ top: `${top}%` }}
          />
        ))}

        {STEPS.map((step, i) => {
          const active = activeIdx === i;
          const side = i % 2 === 0 ? "left" : "right";
          return (
            <div key={i} className={`timeline-row ${side}`}>
              <article
                ref={(el) => (stepRefs.current[i] = el)}
                data-step={i}
                className={`step${active ? " active" : ""}`}
              >
                <span className="step-num mono">{step.tag}</span>

                <h2 className="step-title serif">{step.title}</h2>

                <p className="step-desc">{step.desc}</p>

                <div className="step-detail">
                  {step.meta.map((m, j) => (
                    <div key={j} className="detail-item mono">
                      {m.label}
                      <span>{m.value}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          );
        })}
      </div>

      {/* OUTRO */}
        
    </div>
  );
};

export default Services;
