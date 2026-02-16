import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <>
            <div id="ct-pagetitle" className="ct-pagetitle bg-image">
                <div className="container" style={{ opacity: 1 }}>
                    <div className="ct-page-title-holder">
                        <h1 className="ct-page-title">Contact</h1>
                    </div>
                    <ul className="ct-breadcrumb">
                        <li>
                            <Link
                                className="breadcrumb-entry"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                        <i className="fa-solid fa-angles-right"></i>
                        </li>
                        <li>
                            <span className="breadcrumb-entry">Contact</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="contactbg">
                <div className="container-fluid contac_main">
                    <div className="sub_title mb-4 pb-1">
                        <span>Contact Us</span>
                        <h3>Get in Touch With Our Technology Experts</h3>
                        <p>Get in touch with our expert team to discuss your business needs and digital goals. Whether you’re looking for custom software development, IT consulting, or scalable cloud solutions, we’re here to provide innovative technology that drives growth and efficiency.</p>
                    </div>
                    <div className="row g-3">
                        <div className="col-4 ">
                            <div className="elementor-widget-container mt-3">
                                <div className="item--inner">
                                    <div className="item--icon">
                                        <i className="fa-solid fa-location-arrow"></i>
                                    </div>
                                    <div className="item--meta">
                                        <h4 className="item--title"> Office address</h4>
                                        <div className="item--description">
                                            Digital Agency Network 20 Eastbourne Terrace London W2 6LG
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="elementor-widget-container">
                                <div className="item--inner">
                                    <div className="item--icon">
                                        <i className="fa-solid fa-phone-volume"></i>
                                    </div>
                                    <div className="item--meta">
                                        <h4 className="item--title">Phone number</h4>
                                        <div className="item--description">
                                            Digital Agency Network 20 Eastbourne Terrace London W2 6LG
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="elementor-widget-container">
                                <div className="item--inner">
                                    <div className="item--icon">
                                        <i className="fa-solid fa-envelope-open-text"></i>
                                    </div>
                                    <div className="item--meta">
                                        <h4 className="item--title">Mail address</h4>
                                        <div className="item--description">
                                            Digital Agency Network 20 Eastbourne Terrace London W2 6LG
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="form-container">
                                <form id="contactForm">
                                    <div className="row g-3 mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label">
                                                Name (required)
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your name*"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email" className="form-label">
                                                Email adress (required)
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Mail*"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="row g-3 mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="phone" className="form-label">
                                                Phone (optional)
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="phone"
                                                placeholder="Your phone"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="service" className="form-label">
                                                Services (required)
                                            </label>
                                            <select className="form-select" id="service" required="">
                                                <option value="" selected="">
                                                    Select Service
                                                </option>
                                                <option value="web-design">Web Design</option>
                                                <option value="web-development">Web Development</option>
                                                <option value="seo">SEO Services</option>
                                                <option value="digital-marketing">Digital Marketing</option>
                                                <option value="consulting">Consulting</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">
                                            Your message
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            placeholder="Type message*"
                                            required=""
                                        />
                                    </div>
                                    <button type="submit" className="service_cta_button">
                                        Send message
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* location section */}
            <div className="loction_contact">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6290.39105581564!2d145.053135!3d-37.972566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1771263560950!5m2!1sen!2sin"  style={{border:0,height:'350px',width:'100%',}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </>
    )
}
export default ContactUs;