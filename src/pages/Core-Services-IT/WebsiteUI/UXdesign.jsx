import { useState, useEffect } from "react";
import data from "/src/datas/Uiuxdata.json";
import Testimonials from "../../../components/Testimonials";

/* ─── Bootstrap CDN injected once ─── */


const css = `
  :root {
    --orange-light: rgba(255,107,53,0.12);
    --cyan: #00D4FF;
    --purple: #7C3AED;
    --card-bg: #0E0E1A;
    --text-dim: rgba(255,255,255,0.7);
  }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #07070F; }
  ::-webkit-scrollbar-thumb { background: #FF6B35; border-radius: 2px; }


  /* HERO */
  .dv-hero { min-height: 100vh; display: flex; align-items: center; padding: 130px 0 80px; position: relative; overflow: hidden; }
  .hero-grid { position: absolute; inset: 0; pointer-events: none; background-image: linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px); background-size: 55px 55px; }
  .hero-orb1 { position: absolute; width: 700px; height: 700px; border-radius: 50%; background: radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 65%); top: -180px; right: -150px; pointer-events: none; }
  .hero-orb2 { position: absolute; width: 450px; height: 450px; border-radius: 50%; background: radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 65%); bottom: -80px; left: 50px; pointer-events: none; }
  .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,107,53,0.1); border: 1px solid rgba(255,107,53,0.25); border-radius: 100px; padding: 6px 18px; font-size: 11px; font-weight: 700; color: #FF6B35; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 26px; }
  .badge-dot { width: 7px; height: 7px; border-radius: 50%; background: #FF6B35; animation: blink 2s infinite; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
  .hero-h1 {  font-size: clamp(38px, 5.5vw, 76px); font-weight: 800; line-height: 1.05; margin-bottom: 22px; }
  .h1-outline { -webkit-text-stroke: 1.5px rgba(255,255,255,0.22); color: transparent; }
  .h1-orange { color: #FF6B35; }
  .hero-p { font-size: 16px; line-height: 1.75; color: rgba(255,255,255,0.5); max-width: 510px; margin-bottom: 36px; }
  .btn-primary-dv { background: #FF6B35; color: #fff; border: none; padding: 13px 30px; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.25s; box-shadow: 0 0 28px rgba(255,107,53,0.25); text-decoration: none; display: inline-block; }
  .btn-primary-dv:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(255,107,53,0.45); color: #fff; }
  .btn-outline-dv { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.16); padding: 13px 30px; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.25s; text-decoration: none; display: inline-block; }
  .btn-outline-dv:hover { border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.05); color: #fff; }

  /* MOCKUP */
  .hero-mockup-wrap { position: relative; padding-left: 20px; }
  .hero-mockup { background: var(--card-bg); border: 1px solid rgba(255,255,255,0.07); border-radius: 20px; padding: 22px; box-shadow: 0 24px 80px rgba(0,0,0,0.5); }
  .mock-dots { display: flex; gap: 6px; margin-bottom: 18px; }
  .mdot { width: 10px; height: 10px; border-radius: 50%; }
  .mdr{background:#FF5F57} .mdy{background:#FEBC2E} .mdg{background:#28C840}
  .mock-browser { background: #0a0a14; border-radius: 10px; padding: 18px; }
  .mb-bar { height: 7px; border-radius: 4px; margin-bottom: 10px; background: linear-gradient(90deg, #FF6B35, var(--cyan)); width: 65%; }
  .mb-line { height: 5px; border-radius: 3px; background: rgba(255,255,255,0.07); margin-bottom: 7px; }
  .mb-short { width: 50%; }
  .mb-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 14px; }
  .mb-card { border-radius: 8px; padding: 12px; }
  .mb-cdot { width: 22px; height: 22px; border-radius: 5px; margin-bottom: 8px; }
  .mb-cline { height: 5px; border-radius: 2px; background: rgba(255,255,255,0.09); margin-bottom: 5px; }
  .float-tag { position: absolute; background: var(--card-bg); border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 10px 14px; display: flex; align-items: center; gap: 10px; box-shadow: 0 8px 32px rgba(0,0,0,0.5); }
  .ft-top { top: -18px; right: 10px; }
  .ft-bot { bottom: -18px; left: -5px; }
  .ft-icon { width: 30px; height: 30px; border-radius: 7px; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
  .ft-lbl { font-size: 10px; color: rgba(255,255,255,0.5); }
  .ft-val { font-size: 14px; font-weight: 700; }

  /* SECTION */
  .dv-sec { padding: 90px 0; }
  .dark-sec { background: linear-gradient(180deg, rgba(65, 181, 255, .37) 0, rgba(65, 181, 255, .37) 68.46%) }
  .spb-intro__heading {  font-size: clamp(28px, 4vw, 50px); font-weight: 800; line-height: 1.12; margin-bottom: 18px; }
  .sec-p { color:; font-size: 15.5px; line-height: 1.75; }

  /* SERVICES */
  .svc-card { background: #2e0b6f; border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 32px; height: 100%; transition: all 0.3s; position: relative; overflow: hidden; cursor: pointer; }
  .svc-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: var(--svc-clr, #FF6B35); transform: scaleX(0); transition: transform 0.3s; }
  .svc-card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.13); }
  .svc-card:hover::after { transform: scaleX(1); }
  .svc-ico { font-size: 30px; margin-bottom: 18px; }
  .svc-title {color:#fff;  font-size: 18px; font-weight: 700; margin-bottom: 10px; }
  .svc-desc { color: rgba(255,255,255,0.5); font-size: 13.5px; line-height: 1.7; margin-bottom: 18px; }
  .svc-feat { display: inline-block; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 100px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: var(--text-dim); margin: 3px 2px; }

  /* PROJECTS */
  .proj-card { background: var(--card-bg); border: 1px solid rgba(255,255,255,0.07); border-radius: 18px; overflow: hidden; transition: all 0.3s; height: 100%; }
  .proj-card:hover { transform: translateY(-6px); border-color: rgba(255,255,255,0.14); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
  .proj-card-top { padding: 26px 26px 0; }
  .proj-done-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 100px; background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.25); color: #10B981; margin-bottom: 16px; }
  .green-dot { width: 6px; height: 6px; border-radius: 50%; background: #10B981; animation: blink 2s infinite; }
  .proj-visual { height: 130px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 48px; margin-bottom: 18px; position: relative; overflow: hidden; }
  .proj-visual::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, var(--pj-clr, rgba(255,107,53,0.15)), transparent); }
  .proj-body { padding: 0 26px 26px; }
  .proj-cat { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; }
  .proj-title {  font-size: 20px; font-weight: 800; margin-bottom: 10px; }
  .proj-desc { color: rgba(255,255,255,0.5); font-size: 13px; line-height: 1.65; margin-bottom: 16px; }
  .proj-tag { display: inline-block; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 100px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); color: var(--text-dim); margin: 3px 2px; }
  .proj-stats { display: flex; border-top: 1px solid rgba(255,255,255,0.07); margin: 12px -26px 0; padding: 14px 26px 0; }
  .ps-item { flex: 1; text-align: center; }
  .ps-item:not(:last-child) { border-right: 1px solid rgba(255,255,255,0.07); }
  .ps-val {  font-size: 17px; font-weight: 800; }
  .ps-lbl { font-size: 10px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.05em; }


  /* INDUSTRIES */
  .ind-pill { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 100px; border: 1px solid rgba(255,255,255,0.07); background: var(--card-bg); font-size: 13.5px; font-weight: 500; color: var(--text-dim); cursor: pointer; transition: all 0.25s; margin: 5px; }
  .ind-pill:hover { border-color: rgba(255,107,53,0.4); color: #FF6B35; background: rgba(255,107,53,0.07); transform: translateY(-2px); }

  /* WHY US */
  .why-card { background: var(--card-bg); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 30px; display: flex; gap: 20px; align-items: flex-start; transition: border-color 0.3s; height: 100%; }
  .why-card:hover { border-color: rgba(255,107,53,0.25); }
  .why-num {  font-size: 50px; font-weight: 800; color: rgba(255,107,53,0.13); line-height: 1; flex-shrink: 0; }
  .why-title {  font-size: 17px; font-weight: 700; margin-bottom: 8px; }
  .why-desc { color: rgba(255,255,255,0.5); font-size: 13.5px; line-height: 1.7; }

  /* TESTIMONIALS */
  .testi-card { background: var(--card-bg); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 30px; height: 100%; }
  .testi-stars { color: #FBBF24; font-size: 14px; margin-bottom: 16px; letter-spacing: 2px; }
  .testi-text { color: var(--text-dim); font-size: 14px; line-height: 1.8; margin-bottom: 20px; font-style: italic; }
  .testi-author { display: flex; align-items: center; gap: 12px; }
  .testi-av { width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, #FF6B35, #ff9a6b); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; color: #fff; flex-shrink: 0; }
  .testi-name { font-size: 14px; font-weight: 700; }
  .testi-role { font-size: 12px; color: rgba(255,255,255,0.5); }

  /* FAQ */
  .faq-item { border-bottom: 1px solid rgba(255,255,255,0.07); }
  .faq-btn { width: 100%; text-align: left; background: transparent; border: none; color: #fff; padding: 22px 0; display: flex; justify-content: space-between; align-items: center;  font-size: 15.5px; font-weight: 600; cursor: pointer; gap: 20px; transition: color 0.2s; }
  .faq-btn:hover { color: #FF6B35; }
  .faq-ico { width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.07); display: flex; align-items: center; justify-content: center; font-size: 18px; transition: all 0.3s; }
  .faq-item.open .faq-ico { transform: rotate(45deg); background: #FF6B35; border-color: #FF6B35; }
  .faq-ans { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s; color: rgba(255,255,255,0.5); font-size: 14.5px; line-height: 1.8; }
  .faq-item.open .faq-ans { max-height: 160px; padding-bottom: 22px; }

  /* CTA */ 
  .testmonial_bgs {background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(/src/assets/images/background_image.jpg);background-position: center; background-repeat: no-repeat; background-size: cover; padding: 100px 0; text-align: center; }
  .cta-h2 {  font-size: clamp(32px, 5vw, 62px); font-weight: 800; line-height: 1.1; margin-bottom: 20px; }
  .cta-p { color: rgba(255,255,255,0.5); font-size: 16px; margin-bottom: 36px; max-width: 500px; margin-left: auto; margin-right: auto; }
  .contact-ln a { color: #FF6B35; text-decoration: none; font-size: 14px; }
  .contact-ln a:hover { text-decoration: underline; }

  @media (max-width: 768px) {
    .stat-box { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
    .float-tag { display: none; }
    .proc-big-num { font-size: 70px; }
    .dv-footer .d-flex { flex-direction: column; gap: 12px; text-align: center; }
    .f-link { margin-left: 10px; }
  }
`;

export default function UIUXDesignPage() {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeStep, setActiveStep] = useState(1);
    const currentStep =
        data.process.steps.find((s) => s.id === activeStep) ||
        data.process.steps[0];

    useEffect(() => {
        const el = document.createElement("style");
        el.id = "dv-style";
        el.textContent = css;
        document.head.appendChild(el);
        return () => document.getElementById("dv-style")?.remove();
    }, []);


    useEffect(() => {
        // Vanilla JS se select kiya element
        jQuery(document).ready(function($) {
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
                  slidesToShow: 2
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
            {/* ── SPB HERO ── */}
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
                        <button className="spb-btn spb-btn--primary">Discover More →</button>

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

            {/* SERVICES */}
            <section className="dv-sec dark-sec" id="services">
                <div className="container">
                    <div className="row align-items-end mb-5">
                        <div className="col-lg-6"><div className="spb-label">✦ What We Do</div><h2 className="spb-intro__heading">UI/UX Design Services We Offer</h2></div>
                        <div className="col-lg-6"><p className="sec-p">From research and strategy to pixel-perfect delivery — every service is engineered to move the needle for your business.</p></div>
                    </div>
                    <div className="row g-4">
                        {data.services.map(s => (
                            <div className="col-md-6 col-lg-4" key={s.id}>
                                <div className="svc-card" style={{ "--svc-clr": s.color }}>
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

            {/* COMPLETED PROJECTS */}
            <section className="dv-sec" id="projects">
                <div className="container">
                    <div className="row align-items-end mb-5">
                        <div className="col-lg-6">
                            <div className="spb-label">✦ Completed Work</div>
                            <h2 className="spb-intro__heading">Projects We've<br />Successfully Delivered</h2>
                        </div>
                        <div className="col-lg-6"><p className="sec-p">Real results for real businesses. Every project here is completed, launched, and driving measurable impact.</p></div>
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
                                            {/* <span style={{ position:"relative", zIndex:1 }}>{emojiMap[p.id]}</span> */}
                                        </div>
                                    </div>
                                    <div className="proj-body">
                                        <div className="proj-cat">{p.category}</div>
                                        <div className="proj-title">{p.title}</div>
                                        <div className="proj-desc">{p.description}</div>
                                        <div className="mb-2">{p.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}</div>
                                        <div className="proj-stats">
                                            <div className="ps-item"><div className="ps-val" style={{ color: p.color }}>{p.stats.retention}</div><div className="ps-lbl">Retention</div></div>
                                            <div className="ps-item"><div className="ps-val" style={{ color: p.color }}>{p.stats.conversion}</div><div className="ps-lbl">Conversion</div></div>
                                            <div className="ps-item"><div className="ps-val" style={{ color: p.color }}>{p.stats.duration}</div><div className="ps-lbl">Duration</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 3. PROCESS ══ */}
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

            {/* INDUSTRIES */}
            <section className="dv-sec">
                <div className="container">
                    <div className="row align-items-end mb-5">
                        <div className="col-lg-6"><div className="spb-label">✦ Industries We Serve</div><h2 className="spb-intro__heading">Design for<br />Every Domain</h2></div>
                        <div className="col-lg-6"><p className="sec-p">We've delivered exceptional UI/UX across diverse industries — each with unique user behaviors and business goals.</p></div>
                    </div>
                    <div className="d-flex flex-wrap">
                        {data.industries.map((ind, i) => (
                            <div className="ind-pill" key={i}><span>{ind.icon}</span>{ind.name}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY US */}
            <section className="dv-sec dark-sec">
                <div className="container">
                    <div className="row align-items-end mb-5">
                        <div className="col-lg-6"><div className="spb-label">✦ Why Divritin</div><h2 className="spb-intro__heading">Design That Drives<br />Real Results</h2></div>
                        <div className="col-lg-6"><p className="sec-p">We don't just make things look good — we design for impact, retention, and measurable business growth.</p></div>
                    </div>
                    <div className="row g-4">
                        {data.whyUs.map((w, i) => (
                            <div className="col-md-6" key={i}>
                                <div className="why-card">
                                    <div className="why-num">{w.number}</div>
                                    <div><div className="why-title">{w.title}</div><div className="why-desc">{w.description}</div></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="dv-sec testmonial_bgs">
                <div className="container">
                    
                    {/* <div className="row g-4">
            {data.testimonials.map((t,i) => (
              <div className="col-md-4" key={i}>
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
          </div> */}
                    <div className="row">
                        <div className="col-6">
                        <div className="text-center mb-5">
                        <div className="spb-label">✦ Client Love</div>
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
                        <div className="col-6">
                            <div className="text-center mb-5">
                                <div className="spb-label">✦ FAQ</div>
                                <h2 className="spb-intro__heading">Common Questions</h2>
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
            <section className="dv-cta" id="cta">
                <div className="container">
                    <div className="spb-label">✦ Let's Create Together</div>
                    <h2 className="cta-h2">
                        Ready to Build Something<br />
                        <span style={{ color: "#FF6B35" }}>Extraordinary?</span>
                    </h2>
                    <p className="cta-p">{data.contact.subheading}</p>
                    <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
                        <a href={`mailto:${data.contact.email}`} className="btn-primary-dv">Start Your Project &rarr;</a>
                        <a href="#projects" className="btn-outline-dv">See Our Work</a>
                    </div>
                    <div className="contact-ln">
                        <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
                        <span className="mx-3" style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
                        <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
                    </div>
                </div>
            </section>
        </div>
    );
}