import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Services.css";

const Services = () => {
  const { t } = useTranslation();

  const STEPS = [1, 2, 3, 4].map((n) => ({
    tag: t(`services.step${n}.tag`),
    title: t(`services.step${n}.title`),
    desc: t(`services.step${n}.desc`),
    meta: [
      { label: t("services.method"), value: t(`services.step${n}.method`) },
      { label: t("services.focus"), value: t(`services.step${n}.focus`) },
    ],
  }));

  const stepRefs = useRef([]);
  const timelineRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [dotTops, setDotTops] = useState([]);
  const [fillPercent, setFillPercent] = useState(0);

useEffect(() => {
  let raf = null;

  const updateActive = () => {
    raf = null;

    const center = window.innerHeight / 2;
    let closest = 0;
    let minDistance = Infinity;

    stepRefs.current.forEach((el, i) => {
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const distance = Math.abs(center - elementCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closest = i;
      }
    });

    setActiveIdx(closest);
  };

  const onScroll = () => {
    if (raf === null) {
      raf = requestAnimationFrame(updateActive);
    }
  };

  updateActive();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateActive);

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", updateActive);

    if (raf) cancelAnimationFrame(raf);
  };
}, []);

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
  }, [STEPS.length]);

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
    <div className="process-page" id="process">
      <section className="hero">
        <div className="eyebrow riseIn d1">
          {t("nav.process").toUpperCase()}
        </div>
        <h1 className="hero-h1 serif riseIn d2">
          {t("hero.title1")}
          <br />
          {t("hero.title2")}
        </h1>
        <p className="hero-sub riseIn d3">{t("hero.text")}</p>
        <div className="scroll-hint riseIn d4">
          <span>{t("hero.scroll")}</span>
          <div className="hint-line">
            <div className="hint-drip drip" />
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Services;
