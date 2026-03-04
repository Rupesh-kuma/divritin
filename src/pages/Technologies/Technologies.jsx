import { useState, useEffect, useRef } from "react";
import data from "/src/datas/technologies.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// ─────────────────────────────────────────────────────────
//  CURSOR
// ─────────────────────────────────────────────────────────
function Cursor() {
    const curRef = useRef(null);
    const ringRef = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });
    const raf = useRef(null);

    useEffect(() => {
        const onMove = (e) => {
            pos.current = { x: e.clientX, y: e.clientY };
            if (curRef.current) {
                curRef.current.style.left = e.clientX + "px";
                curRef.current.style.top = e.clientY + "px";
            }
        };

        const loop = () => {
            ring.current.x += (pos.current.x - ring.current.x) * 0.1;
            ring.current.y += (pos.current.y - ring.current.y) * 0.1;
            if (ringRef.current) {
                ringRef.current.style.left = ring.current.x + "px";
                ringRef.current.style.top = ring.current.y + "px";
            }
            raf.current = requestAnimationFrame(loop);
        };

        window.addEventListener("mousemove", onMove);
        raf.current = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf.current);
        };
    }, []);

    return (
        <>
            <div ref={curRef} className="tp-cursor" />
            <div ref={ringRef} className="tp-cursor-ring" />
        </>
    );
}

// ─────────────────────────────────────────────────────────
//  REVEAL  (scroll-triggered fade-in)
// ─────────────────────────────────────────────────────────
function useReveal(threshold = 0.1) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);

    return [ref, visible];
}

function RevealDiv({ children, delay = 0, className = "" }) {
    const [ref, visible] = useReveal();
    return (
        <div
            ref={ref}
            className={`tp-reveal${visible ? " visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}

// ─────────────────────────────────────────────────────────
//  TECH ROW
// ─────────────────────────────────────────────────────────
function TechRow({ item, index, total }) {
    return (
        <RevealDiv delay={index * 0.07}>
            <div className="tp-tech-row">
                <div className="tp-row-underline" />

                <span className="tp-row-num">
                    {item.id} / {String(total).padStart(2, "0")}
                </span>

                <div className="tp-row-body">
                    <div className="tp-row-name">{item.name}</div>
                    <div className="tp-row-tags">
                        {item.tags.map((tag) => (
                            <span key={tag} className="tp-tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="tp-row-img-wrap">
                    <img src={item.img} alt={item.alt} loading="lazy" />
                </div>

                {/* <div className="tp-row-arrow">↗</div> */}
            </div>
        </RevealDiv>
    );
}

// ─────────────────────────────────────────────────────────
//  PROCESS STEP
// ─────────────────────────────────────────────────────────
function ProcessStep({ step, delay }) {
    return (
        <RevealDiv delay={delay}>
            <div className="tp-process-step">
                <div className="tp-step-dot">{step.num}</div>
                <div className="tp-step-title">{step.title}</div>
                <p className="tp-step-desc">{step.desc}</p>
            </div>
        </RevealDiv>
    );
}

// ─────────────────────────────────────────────────────────
//  MAIN PAGE
// ─────────────────────────────────────────────────────────
export default function Technologies() {
    const { meta, hero, marquee, techSection, processSection, cta, footer } = data;

    // Inject Google Fonts
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = meta.fontUrl;
        document.head.appendChild(link);
        document.body.style.cursor = "none";
        return () => { document.body.style.cursor = ""; };
    }, [meta.fontUrl]);

    // Duplicate marquee for seamless loop
    const marqueeDoubled = [...marquee.items, ...marquee.items];

    return (
        <div className="seo-page">
            <Helmet>

                <title>
                    Latest Development Technologies | Web & Software Technologies | Divrit Technologies Private Limited
                </title>

                <meta
                    name="description"
                    content="Explore the latest technologies used by Divrit Technologies Private Limited including React, Angular, Node.js, Python, Java, Flutter, AWS and modern development frameworks for building scalable digital solutions."
                />

                <meta
                    name="keywords"
                    content="Web Development Technologies, Software Development Technologies, React Development, Node.js Development, Modern Development Technologies, IT Technology Stack"
                />

                <meta name="robots" content="index, follow" />

                <link rel="canonical" href="https://divritin.com/technologies" />

                <meta property="og:title" content="Latest Development Technologies | Divrit Technologies Private Limited" />

                <meta property="og:description" content="Discover the advanced technologies and frameworks used by Divrit Technologies to build scalable web, mobile and enterprise software solutions." />

                <meta property="og:type" content="website" />

                <meta property="og:url" content="https://divritin.com/technologies" />

                <meta property="og:image" content="/images/work_image.png" />

            </Helmet>
            <Cursor />
            {/* ── HERO ── */}
            <section className="spb-hero" style={{ backgroundImage: `url('${hero.bgImage}')` }}>
                <div />
                <div className="spb-hero__overlay" />
                <div className="spb-hero__grid-lines" />

                <div className="spb-container container-fluid spb-hero__inner">
                    <div className="spb-hero__left">
                        <span className="spb-badge">
                            {hero.eyebrow}</span>
                        <h1 className="spb-hero__title">
                            {hero.titleLine1}</h1>

                        <p className="spb-hero__subtitle">{hero.subtitle}</p>

                        <div className="tp-hero-stats">
                            {hero.stats.map(({ value, label }) => (
                                <div key={label}>
                                    <div className="tp-stat-num">{value}</div>
                                    <div className="tp-stat-lbl">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="tp-scroll-hint">
                    {hero.scrollLabel}
                    <span className="tp-scroll-line" />
                </div>
            </section>

            {/* ── MARQUEE ── */}
            <div className="tp-marquee-wrap">
                <div className="tp-marquee-track">
                    {marqueeDoubled.map((item, i) => (
                        <div key={i} className="tp-marquee-item">
                            {item}
                            <span className="tp-marquee-dot" />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── TECH SECTION ── */}
            <section className="dark-sec spb-container">
                <div className="container-fluid">
                    <div className="row align-items-end mb-3">
                        <div className="col-lg-6">
                            <div className="spb-label">✦ {techSection.sectionLabel}</div>
                            <h2 className="spb-intro__heading">Technology Expertise</h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="sec-p">{techSection.description}</p>
                        </div>
                    </div>

                </div>

                {techSection.technologies.map((item, i) => (
                    <TechRow
                        key={item.id}
                        item={item}
                        index={i}
                        total={techSection.technologies.length}
                    />
                ))}

            </section>

            {/* ── PROCESS SECTION ── */}
            <section className="spb-section spb-section--alt">
                <div className="spb-container container-fluid">

                    <div className="row align-items-end mb-3">
                        <div className="col-lg-6">
                            <div className="spb-label">✦ {processSection.sectionLabel}</div>
                            <h2 className="spb-intro__heading">Our Development Process</h2>
                        </div>

                    </div>


                    <div className="tp-process-track tp-process-trackss">
                        <div className="tp-process-line" />
                        {processSection.steps.map((step, i) => (
                            <ProcessStep key={step.num} step={step} delay={i * 0.08} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA SECTION ── */}
            <section className="spb-cta" style={{ backgroundImage: `url('${cta.bgImage}')` }} >

                <div className="spb-cta__overlay" />
                <div className="spb-container container-fluid spb-cta__inner">
                    <h2 className="spb-cta__title">{cta.titleLine1} {cta.titleLine2}</h2>
                    <p className="spb-cta__sub">{cta.subtitle}</p>
                    <div className="spb-cta__btns">
                        <Link to="mailto:info@divritin.com" className="spb-btn spb-btn--white">{cta.primaryBtn.label}</Link>
                        <Link to="/case-studies" className="spb-btn spb-btn--outline-white">{cta.secondaryBtn.label}</Link>
                    </div>
                </div>
            </section>

        </div>
    );
}