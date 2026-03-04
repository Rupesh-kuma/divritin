// src/pages/WebMobileAppMaintenance.jsx
import { useState } from "react";
import data from "/src/datas/WebMobileAppMaintenance.json";
import { Link, useNavigate } from "react-router-dom";
import { sendEmail } from "/src/utils/sendEmail.js";
import { Helmet } from "react-helmet-async";

export default function WebMobileAppMaintenance() {
  const Navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const currentStep =
    data.process.steps.find((s) => s.id === activeStep) ||
    data.process.steps[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e.target);
  };

  return (
    <div className="spb">
      <Helmet>

        <title>
          Web & Mobile App Maintenance Services | Divrit Technologies Pvt Ltd
        </title>

        <meta
          name="description"
          content="Divrit Technologies provides professional web and mobile app maintenance services to ensure your applications remain secure, updated and high-performing. We offer reliable maintenance and support for websites and mobile apps."
        />

        <meta
          name="keywords"
          content="Website Maintenance Services, Mobile App Maintenance Services, Web Application Support, App Maintenance Company, Website Support Services, Software Maintenance Services"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://divritin.com/web-mobile-app-maintenance" />

        <meta property="og:title" content="Web & Mobile App Maintenance Services | Divrit Technologies" />

        <meta property="og:description" content="Keep your website and mobile applications secure, updated and high-performing with Divrit Technologies professional maintenance services." />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://divritin.com/web-mobile-app-maintenance" />

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

          {/* Right — Consultation Form */}
          <div className="spb-hero__form">
            <p className="spb-hero__form-title">{data.hero.formTitle}</p>
            <p className="spb-hero__form-sub">Experts ready to help you</p>
            <form onSubmit={handleSubmit}>
              {data.hero.formFields.map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field}
                  className="spb-input"
                  required
                />
              ))}
              <button type="submit" className="spb-btn spb-btn--primary spb-btn--full">
                Submit Now →
              </button>
            </form>
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
            <img src={data.intro.image} alt={data.intro.heading} loading="lazy" />
            <div className="spb-intro__img-overlay" />
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

      {/* ══ 4. INDUSTRIES ══ */}
      <section className="spb-section spb-section--alt">
        <div className="spb-container container-fluid">
          <div className="spb-section__head">
            <h2 className="spb-section__title">{data.industries.heading}</h2>
            <p className="spb-section__sub">{data.industries.subtitle}</p>
          </div>

          <div className="spb-industries">
            {data.industries.list.map((ind) => (
              <div key={ind.title} className="spb-industry-card" onClick={() => Navigate("/industries")}>
                <span className="spb-industry-card__icon">{ind.icon}</span>
                <h4 className="spb-industry-card__title">{ind.title}</h4>
                <p className="spb-industry-card__desc">{ind.desc}</p>
              </div>
            ))}
          </div>

          <div className="spb-center" style={{ marginTop: 28 }}>
            <Link to="/industries" className="spb-btn spb-btn--outline">View All Industries →</Link>
          </div>
        </div>
      </section>

      {/* ══ 5. WHY US + SERVICE BARS ══ */}
      <section className="spb-section">
        <div className="spb-container container-fluid spb-whyus">

          <div>
            <span className="spb-label">Why Choose Us</span>
            <h2 className="spb-whyus__heading">{data.whyUs.heading}</h2>
            <p className="spb-whyus__sub">{data.whyUs.subtitle}</p>

            <div className="spb-feature-cards">
              {data.whyUs.cards.map((card) => (
                <div key={card.title} className="spb-feature-card">
                  <span className="spb-feature-card__icon">{card.icon}</span>
                  <h4 className="spb-feature-card__title">{card.title}</h4>
                  <p className="spb-feature-card__desc">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* <div className="spb-whyus__img-wrap">
              <img src={data.whyUs.image} alt="Why choose us" loading="lazy" />
              <div className="spb-intro__img-overlay" />
            </div> */}
          </div>

          <div className="spb-service-bars">
            <h3 className="spb-service-bars__title">{data.services.heading}</h3>
            {data.services.list.map((svc) => (
              <div key={svc.title} className="spb-service-bar">
                <div className="spb-service-bar__top">
                  <span className="spb-service-bar__icon">{svc.icon}</span>
                  <div className="spb-service-bar__info">
                    <span className="spb-service-bar__name">{svc.title}</span>
                    <span className="spb-service-bar__desc">{svc.desc}</span>
                  </div>
                  <span className="spb-service-bar__pct">{svc.percent}%</span>
                </div>
                <div className="spb-service-bar__track">
                  <div
                    className="spb-service-bar__fill"
                    style={{ width: `${svc.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ 6. SERVICES CARDS ══ */}
      <section className="spb-section spb-section--alt">
        <div className="spb-container container-fluid">
          <div className="spb-section__head">
            <h2 className="spb-section__title">{data.services.heading}</h2>
            <p className="spb-section__sub">{data.services.subtitle}</p>
          </div>

          <div className="spb-service-cards">
            {data.services.list.map((svc) => (
              <div key={svc.title} className="spb-service-card">
                {svc.image && (
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="spb-service-card__img"
                    loading="lazy"
                  />
                )}
                <span className="spb-service-card__icon">{svc.icon}</span>
                <h3 className="spb-service-card__title">{svc.title}</h3>
                <p className="spb-service-card__desc">{svc.desc}</p>
                <Link to="tel:+919871886822" className="spb-service-card__link">Talk to Expert →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. CTA ══ */}
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