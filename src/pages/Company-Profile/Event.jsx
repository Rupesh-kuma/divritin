import { useState } from "react";
import data from "/src/datas/Events.json";
import { Link } from "react-router-dom";
import { sendEmail } from "/src/utils/sendEmail.js";
import { Helmet } from "react-helmet-async";

export default function Events() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [activeFaq, setActiveFaq] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const filteredUpcoming =
        activeFilter === "All"
            ? data.upcomingEvents
            : data.upcomingEvents.filter((e) => e.tag === activeFilter);

    const filteredPast =
        activeFilter === "All"
            ? data.pastEvents
            : data.pastEvents.filter((e) => e.tag === activeFilter);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(e.target);
    };
    return (
        <div className="dv-page">
            <Helmet>

                <title>
                    Company Events & Activities | Divrit Technologies Private Limited
                </title>

                <meta
                    name="description"
                    content="Explore company events and activities organized by Divrit Technologies Private Limited. Discover our corporate events, technology meetups and industry engagements."
                />

                <meta
                    name="keywords"
                    content="Company Events, Corporate Events, Business Events, Technology Events, IT Company Events, Industry Events"
                />

                <meta name="robots" content="index, follow" />

                <link rel="canonical" href="https://divritin.com/events" />

                <meta property="og:title" content="Company Events | Divrit Technologies Private Limited" />

                <meta property="og:description" content="Discover the latest events, corporate activities and industry engagements from Divrit Technologies Private Limited." />

                <meta property="og:type" content="website" />

                <meta property="og:url" content="https://divritin.com/events" />

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
                    <div className="spb-hero__form">
                        <p className="spb-hero__form-title">{data.hero.formTitle}</p>
                        <p className="spb-hero__form-sub">Let's connect in person</p>
                        <form onSubmit={handleSubmit}>
                            {data.hero.formFields.map((field) => (
                                <input key={field} name={field} required placeholder={field} className="spb-input" />
                            ))}
                            <button type="submit" className="spb-btn spb-btn--primary spb-btn--full">
                                Schedule a Meeting →
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
                        <Link to="/Contact-Us" className="spb-btn spb-btn--primary">Schedule a Meeting  →</Link>
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
                        <img src={data.intro.image} alt="Events" loading="lazy" />
                        <div className="spb-intro__img-overlay" />
                    </div>
                </div>
            </section>

            {/* ══ 3. EVENTS GRID ══ */}
            <section className="dark-sec" id="events">
                <div className="spb-container container-fluid">

                    {/* Heading */}
                    <div className="row align-items-end mb-4">
                        <div className="col-lg-6">
                            <div className="spb-label">✦ Where We'll Be</div>
                            <h2 className="spb-intro__heading">
                                Upcoming Events<br />We're Attending
                            </h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="sec-p">
                                Click on any event to see full details. If you're attending the
                                same event, reach out — let's connect in person.
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

                    {/* Upcoming Event Cards */}
                    {filteredUpcoming.length > 0 ? (
                        <div className="row g-4">
                            {filteredUpcoming.map((ev) => (
                                <div className="col-md-6 col-lg-4" key={ev.id}>
                                    <div
                                        className="ev-img-card"
                                        onClick={() => setSelectedEvent(ev)}
                                    >
                                        <div className="ev-img-card__img-wrap">
                                            <img
                                                src={ev.image}
                                                alt={ev.title}
                                                className="ev-img-card__img"
                                                loading="lazy"
                                            />
                                            <div className="ev-img-card__overlay" />

                                            {/* Top */}
                                            <div className="ev-img-card__top">
                                                <span
                                                    className="ev-img-card__type"
                                                    style={{ background: ev.bgColor }}
                                                >
                                                    {ev.type}
                                                </span>
                                                <span className="ev-img-card__status">
                                                    {ev.status}
                                                </span>
                                            </div>

                                            {/* Bottom */}
                                            <div className="ev-img-card__bottom">
                                                <span>📍 {ev.location}</span>
                                            </div>
                                        </div>

                                        <div className="ev-img-card__body">
                                            <div className="ev-img-card__organizer">
                                                by {ev.organizer}
                                            </div>
                                            <h4 className="ev-img-card__title">{ev.title}</h4>
                                            <div className="ev-img-card__tags">
                                                {ev.tags.map((t) => (
                                                    <span key={t} className="ev-tag-pill">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="ev-empty">
                            <p>No upcoming events for <strong>{activeFilter}</strong> right now. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ══ 4. PAST EVENTS ══ */}
            {filteredPast.length > 0 && (
                <section className="spb-section--alt">
                    <div className="spb-container container-fluid">
                        <div className="row align-items-end mb-4">
                            <div className="col-lg-6">
                                <div className="spb-label">✦ Where We've Been</div>
                                <h2 className="spb-intro__heading">
                                    Events We've<br />Recently Attended
                                </h2>
                            </div>
                            <div className="col-lg-6">
                                <p className="sec-p">
                                    From global conferences to India's biggest tech summits —
                                    every event we attend brings new knowledge and connections
                                    back to our clients.
                                </p>
                            </div>
                        </div>
                        <div className="row g-4">
                            {filteredPast.map((ev) => (
                                <div className="col-md-6 col-lg-3" key={ev.id}>
                                    <div
                                        className="ev-past-card"
                                        onClick={() => setSelectedEvent(ev)}
                                    >
                                        <div className="ev-past-card__img-wrap">
                                            <img
                                                src={ev.image}
                                                alt={ev.title}
                                                className="ev-past-card__img"
                                                loading="lazy"
                                            />
                                            <div className="ev-past-card__img-overlay" />
                                            {ev.highlight && (
                                                <div className="ev-past-card__highlight">
                                                    {ev.highlight}
                                                </div>
                                            )}
                                        </div>
                                        <div className="ev-past-card__body">
                                            <div
                                                className="ev-past-card__type"
                                                style={{ color: ev.bgColor }}
                                            >
                                                {ev.type}
                                            </div>
                                            <div className="ev-past-card__title">{ev.title}</div>
                                            <div className="ev-past-card__meta">
                                                <span>📅 {ev.date}</span>
                                                <span>📍 {ev.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}





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
                        <Link to="mailto:info@divritin.com" className="spb-btn spb-btn--white">{data.cta.btnPrimary}</Link>
                        <Link to="/Contact-Us" className="spb-btn spb-btn--outline-white">{data.cta.btnSecondary}</Link>
                    </div>
                </div>
            </section>

            {/* ══ EVENT DETAIL MODAL ══ */}
            {selectedEvent && (
                <div
                    className="ev-modal-backdrop"
                    onClick={() => setSelectedEvent(null)}
                >
                    <div
                        className="ev-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div className="ev-modal__img-wrap">
                            <img
                                src={selectedEvent.image}
                                alt={selectedEvent.title}
                                className="ev-modal__img"
                            />
                            <div className="ev-modal__img-overlay" />
                            <button
                                className="ev-modal__close"
                                onClick={() => setSelectedEvent(null)}
                            >✕</button>
                            <div className="ev-modal__img-badges">
                                <span
                                    className="ev-modal__type"
                                    style={{ background: selectedEvent.bgColor }}
                                >
                                    {selectedEvent.type}
                                </span>
                                <span className="ev-modal__status-badge">
                                    {selectedEvent.status}
                                </span>
                                {selectedEvent.highlight && (
                                    <span className="ev-modal__award-badge">
                                        {selectedEvent.highlight}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Body */}
                        <div className="ev-modal__body">
                            <div className="ev-modal__organizer">
                                Organized by {selectedEvent.organizer}
                            </div>
                            <h2 className="ev-modal__title">{selectedEvent.title}</h2>
                            <p className="ev-modal__desc">{selectedEvent.description}</p>

                            {/* Info Grid */}
                            <div className="ev-modal__info">
                                <div className="ev-modal__info-item">
                                    <span className="ev-modal__info-icon">📅</span>
                                    <div>
                                        <div className="ev-modal__info-label">Date</div>
                                        <div className="ev-modal__info-val">{selectedEvent.date}</div>
                                    </div>
                                </div>
                                <div className="ev-modal__info-item">
                                    <span className="ev-modal__info-icon">📍</span>
                                    <div>
                                        <div className="ev-modal__info-label">Location</div>
                                        <div className="ev-modal__info-val">{selectedEvent.location}</div>
                                    </div>
                                </div>
                                <div className="ev-modal__info-item">
                                    <span className="ev-modal__info-icon">🏢</span>
                                    <div>
                                        <div className="ev-modal__info-label">Organizer</div>
                                        <div className="ev-modal__info-val">{selectedEvent.organizer}</div>
                                    </div>
                                </div>
                                <div className="ev-modal__info-item">
                                    <span className="ev-modal__info-icon">🎯</span>
                                    <div>
                                        <div className="ev-modal__info-label">Type</div>
                                        <div className="ev-modal__info-val">{selectedEvent.type}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}