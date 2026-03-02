import { useState } from "react";
import data from "/src/datas/Blogs.json";

export default function Blogs() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredBlogs =
        activeFilter === "All"
            ? data.blogs
            : data.blogs.filter((b) => b.tag === activeFilter);

    const visibleBlogs = filteredBlogs.slice(0, visibleCount);
    const hasMore = visibleCount < filteredBlogs.length;

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

                    {/* Right — Newsletter signup form */}
                    <div className="spb-hero__form">
                        <p className="spb-hero__form-title">{data.hero.formTitle}</p>
                        <p className="spb-hero__form-sub">Join 50,000+ readers</p>
                        {data.hero.formFields.map((field) => (
                            <input key={field} placeholder={field} className="spb-input" />
                        ))}
                        <button className="spb-btn spb-btn--primary spb-btn--full">
                            Subscribe Free →
                        </button>
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
                        <button className="spb-btn spb-btn--primary">Browse Articles →</button>
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
                        <img src={data.intro.image} alt="Blog" loading="lazy" />
                        <div className="spb-intro__img-overlay" />
                    </div>
                </div>
            </section>

            {/* ══ 3. BLOGS SECTION ══ */}
            <section className="dark-sec" id="blogs">
                <div className="spb-container container-fluid">

                    {/* Section heading */}
                    <div className="row align-items-end mb-4">
                        <div className="col-lg-6">
                            <div className="spb-label">✦ Latest Articles</div>
                            <h2 className="spb-intro__heading">
                                Fresh Insights from<br />Our Expert Team
                            </h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="sec-p">
                                Practical, honest content written by developers, designers,
                                and strategists who actively build products — not content mills.
                            </p>
                        </div>
                    </div>

                    {/* ── Featured Article ── */}
                    <div
                        className="bl-featured"
                        style={{ backgroundImage: `url(${data.featured.image})` }}
                    >
                        <div className="bl-featured__img"
                            style={{ backgroundImage: `url(${data.featured.image})` }}
                        />
                        <div className="bl-featured__overlay" />

                        {/* Top badge + read time */}
                        <div className="bl-featured__top">
                            <span
                                className="bl-cat-badge"
                                
                            >
                                {data.featured.category}
                            </span>
                            <span className="bl-read-time">⏱ {data.featured.readTime}</span>
                        </div>

                        {/* Bottom content */}
                        <div className="bl-featured__body">
                            <div className="bl-featured__label">✦ Featured Article</div>
                            <h2 className="bl-featured__title">{data.featured.title}</h2>
                            <p className="bl-featured__excerpt">{data.featured.excerpt}</p>
                            <div className="bl-featured__footer">
                                <div className="bl-author">
                                    <div className="bl-author__av">{data.featured.authorAvatar}</div>
                                    <div>
                                        <div className="bl-author__name">{data.featured.author}</div>
                                        <div className="bl-author__role">
                                            {data.featured.authorRole} · {data.featured.date}
                                        </div>
                                    </div>
                                </div>
                                <button className="bl-read-btn">Read Article →</button>
                            </div>
                        </div>
                    </div>

                    {/* ── Filter Pills ── */}
                    <div className=" cs-filter-bar mb-2">
                        {data.categories.map((cat) => (
                            <button
                                key={cat}
                                className={`bl-filter-pill ${activeFilter === cat ? "bl-filter-pill--active" : ""}`}
                                onClick={() => {
                                    setActiveFilter(cat);
                                    setVisibleCount(6);
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* ── Blog Cards Grid ── */}
                    {visibleBlogs.length > 0 ? (
                        <div className="row g-4">
                            {visibleBlogs.map((blog) => (
                                <div className="col-md-6 col-lg-4" key={blog.id}>
                                    <div className="bl-card">

                                        {/* Color top bar */}
                                        <div
                                            className="bl-card__bar"
                                            style={{ background: blog.bgColor }}
                                        />

                                        {/* Image */}
                                        <div className="bl-card__img-wrap">
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="bl-card__img"
                                                loading="lazy"
                                            />
                                            <div className="bl-card__img-overlay" />
                                        </div>

                                        {/* Body */}
                                        <div className="bl-card__body">
                                            <div className="bl-card__meta">
                                                <span
                                                    className="bl-cat-badge"
                                                >
                                                    {blog.category}
                                                </span>
                                                <span className="bl-card__date">{blog.date}</span>
                                            </div>

                                            <h4 className="bl-card__title">{blog.title}</h4>
                                            <p className="bl-card__excerpt">{blog.excerpt}</p>

                                            {/* Tags */}
                                            <div className="bl-card__tags">
                                                {blog.tags.map((t) => (
                                                    <span key={t} className="bl-tag-pill">{t}</span>
                                                ))}
                                            </div>

                                            {/* Footer */}
                                            <div className="bl-card__footer">
                                                <div className="bl-card__author">
                                                    <div className="bl-card__av">{blog.authorAvatar}</div>
                                                    <span className="bl-card__author-name">{blog.author}</span>
                                                </div>
                                                <span className="bl-card__rt">⏱ {blog.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bl-empty">
                            <p>No articles found for <strong>{activeFilter}</strong>. More coming soon!</p>
                        </div>
                    )}

                    {/* Load More */}
                    {hasMore && (
                        <div className="bl-load-more-wrap">
                            <button
                                className="spb-btn spb-btn--outline"
                                onClick={() => setVisibleCount((prev) => prev + 3)}
                            >
                                Load More Articles →
                            </button>
                        </div>
                    )}

                </div>
            </section>

            {/* ══ 4. NEWSLETTER STRIP ══ */}
            <section className="spb-section--alt">
                <div className="spb-container container-fluid">
                    <div className="bl-newsletter">
                        <div className="bl-newsletter__left">
                            <div className="spb-label mb-2">✦ Stay Updated</div>
                            <div className="bl-newsletter__title">{data.newsletter.heading}</div>
                            <p className="bl-newsletter__desc">{data.newsletter.desc}</p>
                        </div>
                        <div className="bl-newsletter__form">
                            <input
                                className="bl-newsletter__input"
                                placeholder={data.newsletter.placeholder}
                            />
                            <button className="spb-btn spb-btn--primary">
                                {data.newsletter.btnLabel}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 5. BROWSE BY TOPIC ══ */}
            <section className="dark-sec">
                <div className="spb-container container-fluid">
                    <div className="row align-items-end mb-2">
                        <div className="col-lg-6">
                            <div className="spb-label">✦ Browse by Topic</div>
                            <h2 className="spb-intro__heading">Find Articles<br />by Your Interest</h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="sec-p">
                                Dive deep into any subject — from AI and mobile development
                                to design systems and business strategy.
                            </p>
                        </div>
                    </div>
                    <div className="bl-topics-grid">
                        {data.topics.map((topic) => (
                            <div
                                key={topic.title}
                                className="bl-topic-card"
                                onClick={() => setActiveFilter(
                                    data.categories.find((c) =>
                                        topic.title.toLowerCase().includes(c.toLowerCase())
                                    ) || "All"
                                )}
                            >
                                <div
                                    className="bl-topic-icon"
                                    style={{ borderColor: `${topic.color}40` }}
                                >
                                    {topic.icon}
                                </div>
                                <div>
                                    <div
                                        className="bl-topic-title"
                                        style={{ color: topic.color }}
                                    >
                                        {topic.title}
                                    </div>
                                    <div className="bl-topic-count">{topic.count}</div>
                                </div>
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
                        <button className="spb-btn spb-btn--white">{data.cta.btnPrimary}</button>
                        <button className="spb-btn spb-btn--outline-white">{data.cta.btnSecondary}</button>
                    </div>
                </div>
            </section>

        </div>
    );
}