import { useState } from "react";
import data from "/src/datas/Promotionalservices.json";
    
const tools = [
    { icon: "🔍", name: "Google Search Console" },
    { icon: "📊", name: "Google Analytics 4" },
    { icon: "🚀", name: "Ahrefs" },
    { icon: "🔎", name: "SEMrush" },
    { icon: "📈", name: "Moz Pro" },
    { icon: "⚡", name: "PageSpeed Insights" },
    { icon: "🗺️", name: "Screaming Frog" },
    { icon: "✍️", name: "Surfer SEO" },
    { icon: "🌐", name: "Google Business Profile" },
    { icon: "🔗", name: "Majestic SEO" },
];

const projEmoji = { 1: "🏥", 2: "🛒", 3: "💳", 4: "🎓", 5: "🏗️", 6: "⚖️" };

export default function Ppc() {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeStep, setActiveStep] = useState(1);
    const currentStep =
        data.process.steps.find((s) => s.id === activeStep) ||
        data.process.steps[0];


    return (
        <div className="seo-page">
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

                    {/* Right — Consultation Form */}
                    <div className="spb-hero__form">
                        <p className="spb-hero__form-title">{data.hero.formTitle}</p>
                        <p className="spb-hero__form-sub">Experts ready to help you</p>
                        {data.hero.formFields.map((field) => (
                            <input
                                key={field}
                                placeholder={field}
                                className="spb-input"
                            />
                        ))}
                        <button className="spb-btn spb-btn--primary spb-btn--full">
                            Submit Now →
                        </button>
                    </div>

                </div>
            </section>

             {/* ══ 2. INTRO ══ */}
             <section className="spb-section spb-section--alt">
                <div className="spb-container container-fluid spb-intro">

                    <div className="spb-intro__text">
                        <span className="spb-label">{data.intro.label}</span>
                        <h2 className="spb-intro__heading">{data.intro.heading}</h2>
                        <p className="spb-intro__desc">{data.intro.description}</p>
                        <button className="spb-btn spb-btn--primary">Get Free Strategy Session →</button>

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
                        <img src={data.intro.image} alt={data.intro.heading} loading="lazy" />
                        <div className="spb-intro__img-overlay" />
                    </div>

                </div>
            </section>

            {/* AD PLATFORMS */}
      <section className="dark-sec">
        <div className="container-fluid spb-container">
          <div className="text-center mb-5">
            <div className="spb-label">✦ Promotional Channels We Manage</div>
            <h2 className="spb-intro__heading">Services Included With All Plans</h2>
            <p className="sec-p mx-auto" >We plan and execute promotional campaigns across all major marketing channels — each with a tailored strategy built for that channel's unique audience, behavior patterns, and engagement formats.</p>
          </div>
          <div className="row g-4">
            {data.adPlatforms.map((p, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="plat-card" style={{ background:p.bg }}>
                  <div className="plat-img">
                    <img src={p.image} alt={p.name} />
                  </div>
                  <div className="plat-body">
                    <div className="plat-icon-name">
                      <span className="plat-ico">{p.icon}</span>
                      <span className="plat-name">{p.name}</span>
                    </div>
                    <div className="plat-desc">{p.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* CAMPAIGN PROCESS CHECKLIST */}
            <section className="dark-sec spb-container" id="services">
                <div className="container-fluid">
                    <div className="row align-items-end mb-3">
                        <div className="col-lg-6">
                            <div className="spb-label">✦ Our Campaign Workflow</div>
                            <h2 className="spb-intro__heading">Our Promotional Campaign Involves Following Process</h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="sec-p">Every promotional campaign we run follows a proven, battle-tested process — from brand auditing and strategy planning to creative production, multi-channel launch, and continuous optimization.</p>
                        </div>
                    </div>
                    <div className="row g-4">
                    {data.campaignProcess.map((item, i) => (
                            <div className="col-md-6 col-lg-4" key={i}>
                                <div className="svc-card">
                                <div className="check-dot" />
                    <span className="check-text">{item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="spb-section spb-section--alt">
                <div className="spb-container container-fluid">
                    <div className="row align-items-end mb-5">
                        <div className="col-lg-6">
                            <div className="sec-tag">✦ What We Offer</div>
                            <h2 className="spb-intro__heading">Our Promotional & Marketing Services</h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="sec-p">From influencer campaigns and WhatsApp automation to email marketing and PR outreach — we manage every type of promotional campaign with a focus on brand growth, engagement, and measurable ROI.</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {data.services.map(s => (
                            <div className="col-md-6 col-lg-4" key={s.id}>
                                <div  className="svc-card svc_rup">
                                    <div className="svc-ico">{s.icon}</div>
                                    <div className="svc-title">{s.title}</div>
                                    <div className="svc-desc">{s.description}</div>
                                    <div>{s.features.map(f => <span className="svc-feat" key={f}>{f}</span>)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="spb-section">
                <div className="spb-container container-fluid">
                    <div className="spb-section__head">
                        <div className="spb-label">✦ Our Methodology</div>
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

            {/* COMPLETED PROJECTS */}
            <section className="spb-container" id="projects">
                <div className="container-fluid">
                    <div className="row align-items-end mb-5">
                        <div className="col-lg-6">
                            <div className="spb-label">✦ Proven Results</div>
                            <h2 className="spb-intro__heading">Real Campaigns.<br/>Real Impact.</h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="sec-p">2.8M organic reach for Beauty. 94% open rate for Healthcare WhatsApp. 4.2x ROAS for Travel. Here's what our promotional campaigns deliver across industries.</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {data.completedProjects.map(p => (
                            <div className="col-md-6 col-lg-4" key={p.id}>
                                <div className="proj-card">
                                    <div className="proj-card-top">
                                    <div className="proj-done-badge">
                                            <span className="green-dot" />{p.status} &bull; {p.year}
                                        </div>
                                        <div className="proj-visual" style={{ background: p.bgColor, "--pj-clr": p.bgColor }}>
                                            <span style={{ position: "relative", zIndex: 1 }}>{projEmoji[p.id]}</span>
                                        </div>
                                    </div>
                                    <div className="proj-body">
                                        <div className="proj-cat">{p.category}</div>
                                        <div className="proj-title">{p.title}</div>
                                        <div className="proj-desc">{p.description}</div>
                                        <div className="mb-2">{p.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}</div>
                                        <div className="proj-stats">
                                            <div className="ps-item"><div className="ps-val">{p.stats.retention}</div><div className="ps-lbl">Traffic</div></div>
                                            <div className="ps-item"><div className="ps-val">{p.stats.conversion}</div><div className="ps-lbl">Leads</div></div>
                                            <div className="ps-item"><div className="ps-val">{p.stats.duration}</div><div className="ps-lbl">Timeline</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* WHY US */}
             <section className="dark-sec">
                <div className="spb-container container-fluid">
                    <div className="row align-items-end mb-2">
                        <div className="col-lg-6">
                            <div className="spb-label">✦ Why Choose Us</div>
                            <h2 className="spb-intro__heading">Why Divrit Technologies<br/>for Promotional Marketing?</h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="sec-p">We don't just run campaigns — we engineer brand growth. Every promotional strategy is built around your business goals, your audience, and your budget — with zero tolerance for vanity metrics.</p>
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


            {/* INDUSTRIES */}
            <section className="spb-section spb-section--alt">
                <div className="spb-container container-fluid">
                    <div className="row align-items-end mb-5">
                        <div className="col-lg-6">
                            <div className="spb-label">✦ Industries We Serve</div>
                            <h2 className="spb-intro__heading">{data.industries.heading}</h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="sec-p">{data.industries.subtitle}</p>
                        </div>
                    </div>
                    <div className="spb-industries">
                        {data.industries.list.map((ind, i) => (
                            <div className="spb-industry-card" key={i}>
                                    <div className="spb-industry-card__icon">{ind.icon}</div>
                                    <div className="spb-industry-card__title">{ind.title}</div>
                                    <div className="spb-industry-card__desc">{ind.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           
            {/* TESTIMONIALS */}
            <section className=" testmonial_bgs">
                <div className="spb-container container-fluid">
                    <div className="row g-5">
                        <div className="col-5">
                            <div className="text-center mb-2">
                                <div className="spb-label">✦ Client Success Stories</div>
                        <h2 className="spb-intro__heading">What Our Clients Say</h2>
                            </div>
                            <div className="settings_ul">
                                {data.testimonials.map((t, i) => (
                                    <div className="testimonial-card" key={i}>
                                        <div className="testi-card">

                                            <div className="testi-stars">{"★".repeat(t.rating)}</div>
                                            <div className="testi-text">"{t.text}"</div>
                                            <div className="testi-author">
                                                <div className="testi-av">{t.avatar}</div>
                                                <div><div className="testi-name">{t.name}</div><div className="testi-role">{t.role}</div></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="col-7">
                            <div className="text-center mb-2">
                                <div className="spb-label">✦ Frequently Asked Questions</div>
                                <h2 className="spb-intro__heading">Promotional Marketing FAQs</h2>
                            </div>
                            <div style={{ maxWidth: 760, margin: "0 auto" }}>
                                {data.faqs.map((f, i) => (
                                    <div className={`faq-item ${activeFaq === i ? "open" : ""}`} key={i}>
                                        <button className="faq-btn" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
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

        

            {/* CTA */}
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