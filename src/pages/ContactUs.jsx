import { Link } from "react-router-dom";
import { sendEmail } from "../utils/sendEmail.js";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    // const sendEmail = async (e) => {
    //     e.preventDefault();

    //     const formData = {
    //       name: e.target.name.value,
    //       email: e.target.email.value,
    //       address: e.target.address.value,
    //       city: e.target.city.value,
    //       phone: e.target.phone.value,
    //       service: e.target.service.value,
    //       message: e.target.message.value,
    //     };

    //     const res = await fetch("http://localhost:5000/send-mail", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     });

    //     const data = await res.json();

    //     if (data.success) {
    //       alert("Enquiry Sent Successfully ✅");
    //       e.target.reset();
    //     } else {
    //       alert("Failed to send ❌");
    //     }
    //   };
    //   const sendEmail = async (e) => {
    //     e.preventDefault();

    //     const data = {
    //       page: "Contact Page",
    //       name: e.target.name.value,
    //       email: e.target.email.value,
    //       address: e.target.address.value,
    //       city: e.target.city.value,
    //       phone: e.target.phone.value,
    //       service: e.target.service.value,
    //       message: e.target.message.value,
    //     };

    //     await fetch("http://localhost:5000/send-mail", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(data),
    //     });
    //   };


    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(e.target);
    };
    return (
        <>
            <Helmet>

                <title>
                    Contact Divrit Technologies Private Limited | IT Solutions & Digital Services
                </title>

                <meta
                    name="description"
                    content="Contact Divrit Technologies Private Limited for web development, mobile app development, custom software solutions and digital marketing services. Call +91-9871886822 or email info@divritin.com to discuss your project."
                />

                <meta
                    name="keywords"
                    content="Contact Divrit Technologies, IT Company Contact, Web Development Company Contact, Digital Marketing Company Contact"
                />

                <meta name="robots" content="index, follow" />

                <link rel="canonical" href="https://divritin.com/Contact-Us" />

                <meta property="og:title" content="Contact Divrit Technologies Private Limited" />

                <meta property="og:description" content="Get in touch with Divrit Technologies Private Limited for professional IT services including web development, mobile apps and digital marketing." />

                <meta property="og:type" content="website" />

                <meta property="og:url" content="https://divritin.com/Contact-Us" />

                <meta property="og:image" content="/images/work_image.png" />

            </Helmet>
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
                        <div className="col-lg-4 col-md-12 col-sm-12 ">
                            <div className="elementor-widget-container mt-3">
                                <div className="item--inner">
                                    <div className="item--icon">
                                        <i className="fa-solid fa-location-arrow"></i>
                                    </div>
                                    <div className="item--meta">
                                        <h4 className="item--title"> Office address</h4>
                                        <div className="item--description">
                                            Centre, 8th Floor, Greater Noida W Rd, Gaur City 1, Sector 4, Greater Noida, Ghaziabad, Uttar Pradesh 201318
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
                                            <Link to="tel:+919871886822">+91-9871886822</Link>
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
                                            <Link to="mailto:info@divritin.com">info@divritin.com</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="form-container">
                                <form id="contactForm" onSubmit={handleSubmit}>
                                    <div className="row g-3 mb-3">

                                        <div className="col-md-6">
                                            <label className="form-label">Name (required)</label>
                                            <input name="name" type="text" className="form-control" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Email (required)</label>
                                            <input name="email" type="email" className="form-control" required />
                                        </div>

                                    </div>

                                    <div className="row g-3 mb-3">

                                        <div className="col-md-6">
                                            <label className="form-label">Full Address (required)</label>
                                            <input name="address" type="text" className="form-control" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">City</label>
                                            <input name="city" type="text" className="form-control" required />
                                        </div>

                                    </div>

                                    <div className="row g-3 mb-3">

                                        <div className="col-md-6">
                                            <label className="form-label">Phone (required)</label>
                                            <input name="phone" type="tel" className="form-control" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Services</label>
                                            <select name="service" className="form-select" required>
                                                <option value="">Select Service</option>
                                                <option>Web Design</option>
                                                <option>Web Development</option>
                                                <option>SEO Services</option>
                                                <option>Digital Marketing</option>
                                                <option>Consulting</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Message</label>
                                        <textarea name="message" className="form-control" required />
                                    </div>

                                    <button type="submit" className="service_cta_button">
                                        Send Message
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* location section */}
            <div className="loction_contact">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.2448010843023!2d77.4239573!3d28.6088647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefeb65a7ba0b%3A0xe5871eae0e8695ea!2sDivrit%20Technologies%20Pvt.%20Ltd!5e1!3m2!1sen!2sin!4v1772613806289!5m2!1sen!2sin" style={{ border: 0, height: '350px', width: '100%', }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </>
    )
}
export default ContactUs;