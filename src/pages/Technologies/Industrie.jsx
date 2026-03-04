import { useEffect, useState } from "react";
import data from "/src/datas/Industries.json";
import { sendEmail } from "/src/utils/sendEmail.js";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Industries() {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeStep, setActiveStep] = useState(1);
    const [activeIndustry, setActiveIndustry] = useState(data.industries[0]);

    const currentStep =
        data.process.steps.find((s) => s.id === activeStep) ||
        data.process.steps[0];

    /* Split: first 4 as featured cards, rest as list rows */
    const featuredIndustries = data.industries.slice(0, 4);
    const listIndustries = data.industries.slice(4);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(e.target);
    };

    useEffect(() => {
        // Vanilla JS se select kiya element
        jQuery(document).ready(function ($) {
            // Team Slider - shows 4 items
            $('.settings_ul').slick({
                infinite: true,
                infinite: true,
                speed: 700,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        })


    }, []);
    return (
        <div className="dv-page">

            <Helmet>

                <title>
                    Industries We Serve | IT Solutions for Businesses | Divrit Technologies Private Limited
                </title>

                <meta
                    name="description"
                    content="Divrit Technologies Private Limited provides innovative IT solutions and digital services for multiple industries including healthcare, education, e-commerce, real estate and enterprise businesses."
                />

                <meta
                    name="keywords"
                    content="Industries We Serve, IT Solutions for Industries, Technology Solutions for Businesses, Digital Solutions for Industries, Software Development for Businesses"
                />

                <meta name="robots" content="index, follow" />

                <link rel="canonical" href="https://divritin.com/industries" />

                <meta property="og:title" content="Industries We Serve | Divrit Technologies Private Limited" />

                <meta property="og:description" content="Explore the industries served by Divrit Technologies with innovative web, mobile and software development solutions." />

                <meta property="og:type" content="website" />

                <meta property="og:url" content="https://divritin.com/industries" />

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
                        <div className="ind-hero-grid mt-3">
                            {data.hero.tags.map((tag) => (
                                <div key={tag} className="ind-hero-chip">{tag}</div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="spb-hero__form">
                        <p className="spb-hero__form-title">{data.hero.formTitle}</p>
                        <p className="spb-hero__form-sub">Experts ready to help you</p>
                        <form onSubmit={handleSubmit}>
                            {data.hero.formFields.map((field) => (
                                <input key={field} placeholder={field} className="spb-input" />
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
                        <button className="spb-btn spb-btn--primary">Explore Industries →</button>
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
                        <img src={data.intro.image} alt="Industries" loading="lazy" />
                        <div className="spb-intro__img-overlay" />
                    </div>
                </div>
            </section>

            {/* ══ 3. FEATURED INDUSTRY CARDS (4 cards, 2×2 grid) ══ */}
            <section className="dark-sec" id="industries">
                <div className="spb-container container-fluid">

                    <div className="row align-items-end mb-5">
                        <div className="col-lg-6">
                            <div className="spb-label">✦ Industries We Serve</div>
                            <h2 className="spb-intro__heading">
                                Domains Where We've<br />Built Real Impact
                            </h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="sec-p">
                                We don't just understand technology — we understand your industry.
                                Deep domain expertise means faster delivery, fewer mistakes, and
                                solutions that actually fit.
                            </p>
                        </div>
                    </div>

                    {/* 4 Featured Cards */}
                    <div className="row g-4 mb-4">
                        {featuredIndustries.map((ind) => (
                            <div className="col-md-6 col-lg-3" key={ind.id}>
                                <div
                                    className="ind-card"
                                    onClick={() => setActiveIndustry(ind)}
                                >
                                    <div
                                        className="ind-card__img"
                                        style={{ backgroundImage: `url(${ind.bgImage})` }}
                                    />
                                    <div className="ind-card__overlay" />
                                    <div
                                        className="ind-card__tint"
                                        style={{ background: ind.bgColor }}
                                    />
                                    <div className="ind-card__arrow">↗</div>

                                    <div className="ind-card__body">
                                        <span className="ind-card__icon">{ind.icon}</span>
                                        <div className="ind-card__title">{ind.title}</div>
                                        <div className="ind-card__desc">{ind.shortDesc}</div>

                                        <div className="ind-card__stats">
                                            <div>
                                                <div
                                                    className="ind-card__stat-val"
                                                    style={{ color: ind.bgColor }}
                                                >
                                                    {ind.stats.projects}
                                                </div>
                                                <div className="ind-card__stat-lbl">Projects</div>
                                            </div>
                                            <div>
                                                <div
                                                    className="ind-card__stat-val"
                                                    style={{ color: ind.bgColor }}
                                                >
                                                    {ind.stats.avgROI}
                                                </div>
                                                <div className="ind-card__stat-lbl">Avg ROI</div>
                                            </div>
                                        </div>

                                        <div className="ind-card__tags">
                                            {ind.tags.map((t) => (
                                                <span key={t} className="ind-card__tag">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Remaining Industries as list rows + detail panel */}
                    <div className="row g-4 mt-2">

                        {/* Left: List rows */}
                        <div className="col-lg-7">
                            <div className="spb-label mb-3">✦ More Industries</div>
                            {listIndustries.map((ind) => (
                                <div
                                    key={ind.id}
                                    className="ind-list-row"

                                    onClick={() => setActiveIndustry(ind)}
                                >
                                    <div className="ind-list-icon">
                                        {ind.icon}
                                    </div>

                                    <div>
                                        <div className="ind-list-title">
                                            {ind.title}
                                        </div>
                                        <div className="ind-list-desc">{ind.shortDesc}</div>
                                    </div>

                                    <div className="ind-list-meta">
                                        <div className="ind-list-projects">
                                            {ind.stats.projects}<br />
                                            <span style={{ opacity: 0.5 }}>Projects</span>
                                        </div>
                                        <div className="ind-list-arrow">
                                            ↗
                                        </div>
                                    </div>

                                    {/* Bottom line on hover */}
                                    {/* <style>{`
                                        .ind-list-row[data-id="${ind.id}"]::after {
                                            background: ${ind.bgColor};
                                        }
                                    `}</style> */}
                                </div>
                            ))}
                        </div>

                        {/* Right: Active industry detail panel */}
                        <div className="col-lg-5">
                            {activeIndustry && (
                                <div className="ind-detail-panel">
                                    <div
                                        className="ind-detail-panel__img"
                                        style={{ backgroundImage: `url(${activeIndustry.bgImage})` }}
                                    />
                                    <div className="ind-detail-panel__body">
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <span style={{ fontSize: "1.6rem" }}>{activeIndustry.icon}</span>
                                            <div
                                                className="ind-detail-panel__title"
                                                style={{ marginBottom: 0 }}
                                            >
                                                {activeIndustry.title}
                                            </div>
                                        </div>

                                        <p className="ind-detail-panel__desc">
                                            {activeIndustry.description}
                                        </p>

                                        {/* Metrics */}
                                        <div className="ind-detail-panel__metrics">
                                            <div>
                                                <div className="ind-dm-val" >
                                                    {activeIndustry.stats.projects}
                                                </div>
                                                <div className="ind-dm-lbl">Projects</div>
                                            </div>
                                            <div>
                                                <div className="ind-dm-val">
                                                    {activeIndustry.stats.clients}
                                                </div>
                                                <div className="ind-dm-lbl">Clients</div>
                                            </div>
                                            <div>
                                                <div className="ind-dm-val">
                                                    {activeIndustry.stats.avgROI}
                                                </div>
                                                <div className="ind-dm-lbl">Avg ROI</div>
                                            </div>
                                        </div>

                                        {/* Services */}
                                        <div className="spb-label mb-2">✦ Services</div>
                                        <div className="mb-3">
                                            {activeIndustry.services.map((svc) => (
                                                <span key={svc} className="ind-service-chip">{svc}</span>
                                            ))}
                                        </div>

                                        {/* Challenge */}
                                        <div className="cs-challenge-box">
                                            <div className="cs-cb-label">Industry Challenge</div>
                                            <div className="cs-cb-text">{activeIndustry.challenge}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* ══ 4. STATS BAR ══ */}
            <section className="spb-section--alt">
                <div className="spb-container container-fluid">
                    <div className="ind-stats-bar">
                        {data.intro.stats.map((s) => (
                            <div key={s.label} className="ind-stats-bar__item">
                                <div className="ind-stats-bar__val">{s.num}</div>
                                <div className="ind-stats-bar__lbl">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 5. PROCESS ══ */}
            <section className="spb-section">
                <div className="spb-container container-fluid">
                    <div className="spb-section__head">
                        <h2 className="spb-section__title">{data.process.heading}</h2>
                        <p className="spb-section__sub">{data.process.subtitle}</p>
                    </div>

                    <div className="spb-process">
                        <div className="spb-process__tabs">
                            {data.process.steps.map((step) => (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveStep(step.id)}
                                    className={`spb-process__tab ${activeStep === step.id ? "spb-process__tab--active" : ""}`}
                                >
                                    <span className="spb-process__tab-num">{step.id}</span>
                                    {step.title}
                                </button>
                            ))}
                        </div>

                        <div className="spb-process__detail">
                            <div className="spb-process__detail-text">
                                <div className="spb-process__step-num">{currentStep.id}</div>
                                <h3 className="spb-process__step-title">{currentStep.title}</h3>
                                <p className="spb-process__step-desc">{currentStep.description}</p>
                                <ul className="spb-process__points">
                                    {currentStep.points.map((pt) => (
                                        <li key={pt}>
                                            <span className="spb-check">✓</span> {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="spb-process__detail-img">
                                <img src={currentStep.image} alt={currentStep.title} loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 6. WHY US ══ */}
            <section className="dark-sec">
                <div className="spb-container container-fluid">
                    <div className="row align-items-end mb-2">
                        <div className="col-lg-6">
                            <div className="spb-label">✦ Why Divritin</div>
                            <h2 className="spb-intro__heading">
                                We Don't Just Know Tech —<br />We Know Your Industry
                            </h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="sec-p">
                                Domain expertise is what separates good software from software
                                that actually moves the needle for your business.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {data.whyUs.map((w, i) => (
                            <div className="col-md-6" key={i}>
                                <div className="why-card">
                                    <div className="why-num">{w.number}</div>
                                    <div>
                                        <div className="why-title">{w.title}</div>
                                        <div className="why-desc">{w.description}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 7. TESTIMONIALS + FAQ ══ */}
            <section className="testmonial_bgs">
                <div className="spb-container container-fluid">
                    <div className="row g-5">

                        {/* Testimonials */}
                        <div className="col-12 col-lg-5">
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
                        </div>

                        {/* FAQ */}
                        <div className="col-12 col-lg-7">
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
                        </div>

                    </div>
                </div>
            </section>

            {/* ══ 8. CTA ══ */}
            <section
                className="spb-cta"
                style={{ backgroundImage: `url(${data.cta.bgImage})` }}
            >
                <div className="spb-cta__overlay" />
                <div className="spb-container container-fluid spb-cta__inner">
                    <h2 className="spb-cta__title">{data.cta.heading}</h2>
                    <p className="spb-cta__sub">{data.cta.subtitle}</p>
                    <div className="spb-cta__btns">
                        <Link to="/Contact-Us" className="spb-btn spb-btn--white">{data.cta.btnPrimary}</Link>
                        <Link to="/case-studies" className="spb-btn spb-btn--outline-white">{data.cta.btnSecondary}</Link>
                    </div>
                </div>
            </section>

        </div>
    );
}