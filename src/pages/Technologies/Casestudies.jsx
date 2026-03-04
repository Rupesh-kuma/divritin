import { useState } from "react";
import data from "/src/datas/CaseStudies.json";
import { Link } from "react-router-dom";
import { sendEmail } from "/src/utils/sendEmail.js";
import { Helmet } from "react-helmet-async";

export default function CaseStudies() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered =
        activeFilter === "All"
            ? data.caseStudies
            : data.caseStudies.filter((cs) => cs.tag === activeFilter);

    const featured = filtered.filter((cs) => cs.featured);
    const rest = filtered.filter((cs) => !cs.featured);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(e.target);
    };

    return (
        <div className="dv-page">
            <Helmet>

                <title>
                    Case Studies | IT Projects & Digital Solutions | Divrit Technologies Private Limited
                </title>

                <meta
                    name="description"
                    content="Explore case studies from Divrit Technologies Private Limited showcasing successful web development, mobile app development, digital marketing and software development projects delivered for clients across industries."
                />

                <meta
                    name="keywords"
                    content="IT Case Studies, Web Development Case Studies, Digital Marketing Case Studies, Software Development Projects, Client Success Stories, Technology Case Studies"
                />

                <meta name="robots" content="index, follow" />

                <link rel="canonical" href="https://divritin.com/case-studies" />

                <meta property="og:title" content="Case Studies | Divrit Technologies Private Limited" />

                <meta property="og:description" content="Discover how Divrit Technologies delivers successful web development, mobile app and digital marketing solutions through real project case studies." />

                <meta property="og:type" content="website" />

                <meta property="og:url" content="https://divritin.com/case-studies" />

                <meta property="og:image" content="/images/work_image.png" />

            </Helmet>

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
                        <form onSubmit={handleSubmit}>
                            {data.hero.formFields.map((field) => (
                                <input key={field} name={field} placeholder={field} required className="spb-input" />
                            ))}
                            <button type="submit" className="spb-btn spb-btn--primary spb-btn--full">
                                Submit Now →
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ══ 2. INTRO ══ */}
            <section className="spb-section--alt">
                <div className="spb-container container-fluid spb-intro">
                    <div className="spb-intro__text">
                        <span className="spb-label">{data.intro.label}</span>
                        <h2 className="spb-intro__heading">{data.intro.heading}</h2>
                        <p className="spb-intro__desc">{data.intro.description}</p>
                        <Link to="/Contact-Us" className="spb-btn spb-btn--primary">Start Your Project →</Link>
                        <div className="spb-stats">
                            {data.intro.stats.map((s) => (
                                <div key={s.label} className="spb-stat">
                                    <span className="spb-stat__num">{s.num}</span>
                                    <span className="spb-stat__label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="spb-intro__img-wrap">
                        <img src={data.intro.image} alt="Our Work" loading="lazy" />
                        <div className="spb-intro__img-overlay" />
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
                                                >
                                                    {cs.category}
                                                </span>
                                                <div className="cs-feat-client">{cs.client}</div>
                                                <h3 className="cs-feat-title">{cs.title}</h3>
                                                <p className="cs-feat-desc">{cs.description}</p>

                                                {/* Metrics */}
                                                <div className="cs-metrics">
                                                    <div className="cs-metric">
                                                        <div className="cs-metric__val" >
                                                            {cs.stats.metric1Val}
                                                        </div>
                                                        <div className="cs-metric__lbl">{cs.stats.metric1Label}</div>
                                                    </div>
                                                    <div className="cs-metric">
                                                        <div className="cs-metric__val">
                                                            {cs.stats.metric2Val}
                                                        </div>
                                                        <div className="cs-metric__lbl">{cs.stats.metric2Label}</div>
                                                    </div>
                                                    <div className="cs-metric">
                                                        <div className="cs-metric__val" >
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

                                                    >
                                                        {cs.category}
                                                    </span>
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
                                                        <div className="cs-metric__val">
                                                            {cs.stats.metric1Val}
                                                        </div>
                                                        <div className="cs-metric__lbl">{cs.stats.metric1Label}</div>
                                                    </div>
                                                    <div className="cs-metric">
                                                        <div className="cs-metric__val" >
                                                            {cs.stats.metric2Val}
                                                        </div>
                                                        <div className="cs-metric__lbl">{cs.stats.metric2Label}</div>
                                                    </div>
                                                    <div className="cs-metric">
                                                        <div className="cs-metric__val">
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
                </div>
            </section>

            {/* ══ 4. TESTIMONIALS + FAQ ══ */}
            {/* <section className="testmonial_bgs">
                <div className="spb-container container-fluid">
                    <div className="row g-5"> */}

            {/* Testimonials */}
            {/* <div className="col-12 col-lg-5">
                            <div className="spb-label">✦ Client Love</div>
                            <h2 className="spb-intro__heading mb-4">What Our Clients Say</h2>
                            <div className="settings_ul">
                                {data.testimonials.map((t, i) => (
                                    <div className="testimonial-card" key={i}>
                                        <div className="testi-card">
                                            <div className="testi-stars">{"★".repeat(t.rating)}</div>
                                            <div className="testi-text">"{t.text}"</div>
                                            <div className="testi-author">
                                                <div className="testi-av">{t.avatar}</div>
                                                <div>
                                                    <div className="testi-name">{t.name}</div>
                                                    <div className="testi-role">{t.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> */}

            {/* FAQ */}
            {/* <div className="col-12 col-lg-7">
                            <div className="spb-label">✦ FAQ</div>
                            <h2 className="spb-intro__heading mb-4">Common Questions</h2>
                            <div style={{ maxWidth: 760, margin: "0 auto" }}>
                                {data.faqs.map((f, i) => (
                                    <div
                                        className={`faq-item ${activeFaq === i ? "open" : ""}`}
                                        key={i}
                                    >
                                        <button
                                            className="faq-btn"
                                            onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                        >
                                            <span>{f.question}</span>
                                            <div className="faq-ico">+</div>
                                        </button>
                                        <div className="faq-ans">{f.answer}</div>
                                    </div>
                                ))}
                            </div>
                        </div> */}

            {/* </div>
                </div>
            </section> */}

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
                        <Link to="tel:+919871886822" className="spb-btn spb-btn--white">{data.cta.btnPrimary}</Link>
                        <Link to="/Contact-Us" className="spb-btn spb-btn--outline-white">{data.cta.btnSecondary}</Link>
                    </div>
                </div>
            </section>

        </div>
    );
}