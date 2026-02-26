import { useState } from "react";
import data from "/src/datas/OurPortfolios.json";

export default function OurPortfolios() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [activeFaq, setActiveFaq] = useState(null);

    const filtered =
        activeFilter === "All"
            ? data.caseStudies
            : data.caseStudies.filter((cs) => cs.tag === activeFilter);

    const featured = filtered.filter((cs) => cs.featured);
    const rest = filtered.filter((cs) => !cs.featured);

    return (
        <div className="dv-page">

            {/* ══ 1. HERO ══ */}
            <section
                className="spb-hero"
                style={{ backgroundImage: `url(${data.hero.bgImage})` }}
            >
                <div className="spb-hero__overlay" />
                <div className="spb-hero__grid-lines" />

                <div className="spb-container container-fluid spb-hero__inner">
                    {/* Left */}
                    <div className="spb-hero__left">
                        <span className="spb-badge">{data.hero.badge}</span>
                        <h1 className="spb-hero__title">{data.hero.title}</h1>
                        <p className="spb-hero__subtitle">{data.hero.subtitle}</p>
                        <div className="spb-hero__tags">
                            {data.hero.tags.map((tag) => (
                                <span key={tag} className="spb-tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="spb-hero__form">
                        <p className="spb-hero__form-title">{data.hero.formTitle}</p>
                        <p className="spb-hero__form-sub">Experts ready to help you</p>
                        {data.hero.formFields.map((field) => (
                            <input key={field} placeholder={field} className="spb-input" />
                        ))}
                        <button className="spb-btn spb-btn--primary spb-btn--full">
                            Submit Now →
                        </button>
                    </div>
                </div>
            </section>

           

            {/* ══ 3. FILTER BAR ══ */}
            <section className="dark-sec" id="projects">
                <div className="spb-container container-fluid">

                    {/* Heading */}
                    <div className="row align-items-end mb-4">
                        <div className="col-lg-6">
                            <div className="spb-label">✦ Completed Work</div>
                            <h2 className="spb-intro__heading">
                                Projects We've<br />Successfully Delivered
                            </h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="sec-p">
                                Real results for real businesses. Every project here is completed,
                                launched, and driving measurable impact for our clients.
                            </p>
                        </div>
                    </div>

                    {/* Filter Pills */}
                    <div className="cs-filter-bar mb-2">
                        {data.filters.map((f) => (
                            <button
                                key={f}
                                className={`cs-filter-pill ${activeFilter === f ? "cs-filter-pill--active" : ""}`}
                                onClick={() => setActiveFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* ── Featured Cards (large, 2-col) ── */}
                    {featured.length > 0 && (
                        <>
                            <div className="spb-label mb-3">✦ Featured Projects</div>
                            <div className="row g-4 mb-4">
                                {featured.map((cs) => (
                                    <div className="col-lg-6" key={cs.id}>
                                        <div className="cs-feat-card">
                                            <div
                                                className="cs-feat-card__img"
                                                style={{ backgroundImage: `url(${cs.image})` }}
                                            />
                                            <div className="cs-feat-card__overlay" />
                                            <div className="cs-feat-card__body">
                                                <span
                                                    className="cs-cat-badge"
                                                    style={{ borderColor: cs.bgColor, color: cs.bgColor }}
                                                >
                                                    {cs.category}
                                                </span>
                                                <div className="cs-feat-client">{cs.client}</div>
                                                <h3 className="cs-feat-title">{cs.title}</h3>
                                                <p className="cs-feat-desc">{cs.description}</p>

                                                {/* Metrics */}
                                                <div className="cs-metrics">
                                                    <div className="cs-metric">
                                                        <div className="cs-metric__val" style={{ color: cs.bgColor }}>
                                                            {cs.stats.metric1Val}
                                                        </div>
                                                        <div className="cs-metric__lbl">{cs.stats.metric1Label}</div>
                                                    </div>
                                                    <div className="cs-metric">
                                                        <div className="cs-metric__val" style={{ color: cs.bgColor }}>
                                                            {cs.stats.metric2Val}
                                                        </div>
                                                        <div className="cs-metric__lbl">{cs.stats.metric2Label}</div>
                                                    </div>
                                                    <div className="cs-metric">
                                                        <div className="cs-metric__val" style={{ color: cs.bgColor }}>
                                                            {cs.stats.metric3Val}
                                                        </div>
                                                        <div className="cs-metric__lbl">{cs.stats.metric3Label}</div>
                                                    </div>
                                                </div>

                                                {/* Tech Tags + Arrow */}
                                                <div className="cs-feat-footer">
                                                    <div className="cs-tech-pills">
                                                        {cs.tech.map((t) => (
                                                            <span key={t} className="cs-tech-pill">{t}</span>
                                                        ))}
                                                    </div>
                                                    <button className="cs-arrow-btn">↗</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* ── Rest Cards (3-col grid) ── */}
                    {rest.length > 0 && (
                        <>
                            <div className="spb-label mb-3">✦ All Projects</div>
                            <div className="row g-4">
                                {rest.map((cs) => (
                                    <div className="col-md-6 col-lg-4" key={cs.id}>
                                        <div className="cs-grid-card">
                                            {/* Colour top bar */}
                                            <div
                                                className="cs-grid-card__bar"
                                                style={{ background: cs.bgColor }}
                                            />

                                            {/* Image */}
                                            <div className="cs-grid-card__img-wrap">
                                                <img
                                                    src={cs.image}
                                                    alt={cs.client}
                                                    className="cs-grid-card__img"
                                                    loading="lazy"
                                                />
                                            </div>

                                            {/* Body */}
                                            <div className="cs-grid-card__body">
                                                <div className="d-flex align-items-center justify-content-between mb-2">
                                                    <span
                                                        className="cs-cat-badge"
                                                        style={{ borderColor: cs.bgColor, color: cs.bgColor }}
                                                    >
                                                        {cs.category}
                                                    </span>
                                                    <span className="cs-year-lbl">{cs.year} · {cs.duration}</span>
                                                </div>

                                                <div className="cs-grid-client">{cs.client}</div>
                                                <h4 className="cs-grid-title">{cs.title}</h4>
                                                <p className="cs-grid-desc">{cs.description}</p>

                                                {/* Challenge / Solution */}
                                                <div className="cs-challenge-box mb-3">
                                                    <div className="cs-cb-label">Challenge</div>
                                                    <div className="cs-cb-text">{cs.challenge}</div>
                                                </div>

                                                {/* Metrics */}
                                                <div className="cs-metrics cs-metrics--sm">
                                                    <div className="cs-metric">
                                                        <div className="cs-metric__val" style={{ color: cs.bgColor }}>
                                                            {cs.stats.metric1Val}
                                                        </div>
                                                        <div className="cs-metric__lbl">{cs.stats.metric1Label}</div>
                                                    </div>
                                                    <div className="cs-metric">
                                                        <div className="cs-metric__val" style={{ color: cs.bgColor }}>
                                                            {cs.stats.metric2Val}
                                                        </div>
                                                        <div className="cs-metric__lbl">{cs.stats.metric2Label}</div>
                                                    </div>
                                                    <div className="cs-metric">
                                                        <div className="cs-metric__val" style={{ color: cs.bgColor }}>
                                                            {cs.stats.metric3Val}
                                                        </div>
                                                        <div className="cs-metric__lbl">{cs.stats.metric3Label}</div>
                                                    </div>
                                                </div>

                                                {/* Tech pills */}
                                                <div className="cs-tech-pills mt-2">
                                                    {cs.tech.map((t) => (
                                                        <span key={t} className="cs-tech-pill">{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Empty state */}
                    {filtered.length === 0 && (
                        <div className="cs-empty">
                            <p>No projects found for <strong>{activeFilter}</strong>. More coming soon!</p>
                        </div>
                    )}
                </div>
            </section>

         

            {/* ══ 5. CTA ══ */}
            <section
                className="spb-cta"
                style={{ backgroundImage: `url(${data.cta.bgImage})` }}
            >
                <div className="spb-cta__overlay" />
                <div className="spb-container container-fluid spb-cta__inner">
                    <h2 className="spb-cta__title">{data.cta.heading}</h2>
                    <p className="spb-cta__sub">{data.cta.subtitle}</p>
                    <div className="spb-cta__btns">
                        <button className="spb-btn spb-btn--white">{data.cta.btnPrimary}</button>
                        <button className="spb-btn spb-btn--outline-white">{data.cta.btnSecondary}</button>
                    </div>
                </div>
            </section>

        </div>
    );
}