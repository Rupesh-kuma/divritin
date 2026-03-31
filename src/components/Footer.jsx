import { Link } from "react-router-dom";
import logo from "/images/logo_white.png"
import { useEffect, useState } from "react";
const Footer = () => {
    const [showBtn, setShowBtn] = useState(false);

  // scroll detect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);   // show button
      } else {
        setShowBtn(false);  // hide button
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll to top
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
    return (
        <>
            <div className="background_footer px-lg-5 px-sm-2">
                <div className="container-fluid">
                    <div className="row footer_main">
                        <div className="col-lg-3 col-sm-12 footer_logos">
                            <img src={logo} alt="logo footer " />
                            <p>Divrit Technologies Pvt. Ltd. is a leading IT solutions company delivering end-to-end, customized digital services. Backed by expert professionals and advanced technologies, we help businesses innovate, scale, and succeed in a digital-first world.</p>

                        </div>
                        <div className="col-lg-2 col-sm-6 footer_second">
                            <h3>Company Info</h3>
                            <ul>
                                <li><Link to="/our-portfolios">Our Portfolios</Link></li>
                                <li><Link to="/our-client">Our Client</Link></li>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/career">Career</Link></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-6 footer_second">
                            <h3>Our Services</h3>
                            <ul>
                                <li><Link to="/custom-software-development">IT Services</Link></li>
                                <li><Link to="/custom-software-development">Cloud Solutions</Link></li>
                                <li><Link to="/case-studies">Resource Augmentation</Link></li>
                                <li><Link to="/page-not-found">Tally Implementation</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-6 footer_second">
                            <h3>Legal</h3>
                            <ul>
                                <li><Link to="/page-not-found">Privacy Policy</Link></li>
                                <li><Link to="/page-not-found">Refund Policy</Link></li>
                                <li><Link to="/page-not-found">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer_second">
                            <h3>Touch Point</h3>
                            {/* location section */}
                            <div className="d-flex getintuch_footer" style={{ marginTop: "-10px" }}>
                                <i className="fa-solid fa-location-dot"></i>
                                <Link to="https://maps.app.goo.gl/jPVUAmwB44PVArYAA">Centre, 8th Floor, Greater Noida W Rd, Gaur City 1, Sector 4, Greater Noida, Ghaziabad, Uttar Pradesh 201318</Link>
                            </div>
                            {/* mail section */}
                            <div className="d-flex getintuch_footer">
                                <i className="fa-regular fa-envelope"></i>
                                <Link to="mailto:info@divritin.com">info@divritin.com</Link>
                            </div>

                            {/* call section */}
                            <div className="d-flex getintuch_footer">
                                <i className="fa-solid fa-phone-volume"></i>
                                <Link to="tel:+919871886822">+91- 9871886822</Link>
                            </div>
                            {/* call section */}
                            <div className="d-flex getintuch_footer">
                                <i className="fa-solid fa-clock-rotate-left"></i>
                                <div>

                                </div>
                                <Link to="#">Monday to Friday:<br />
                                    9:30 AM - 6:30 PM</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            {/* copy right */}
            <div className="copy_right_main">
                <div className="container">
                    <div className="copy_right">
                        <Link to="https://divritin.com/">Copyright © 2024-2026 All rights reserved</Link>
                        <div className="footer-social-icon">
                            <Link to="https://www.facebook.com/Divrittechnologies/" target="_blank" rel="nofollow"><i className="fab fa-facebook"></i></Link>
                            <Link to="https://x.com/DivritTech" target="_blank" rel="nofollow"><i className="fab fa-twitter" target="_blank"></i></Link>
                            <Link to="https://www.instagram.com/divrittechnologiespvtltd/" target="_blank" rel="nofollow"><i className="fab fa-instagram"></i></Link>
                            <Link to="https://www.linkedin.com/in/divrit-technologies-a156a0344/" target="_blank" rel="nofollow"><i className="fab fa-linkedin"></i></Link>
                            <Link to="https://in.pinterest.com/divrittechnologiespvtltd/" target="_blank" rel="nofollow"><i className="fab fa-pinterest"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="fixed-contact-icons">
                    <Link to="https://wa.me/919871886822?text=Hello!%20I'm%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="contact-icon whatsapp-icon" title="Chat on WhatsApp">
                        <i className="fab fa-whatsapp"></i>
                    </Link>
                    <Link to="tel:+919871886822" className="contact-icon call-icon" title="Call Us">
                        <i className="fa-solid fa-phone-volume"></i>
                    </Link>
                </div>
                <button
                    className={`scroll-top-btn ${showBtn ? "show" : ""}`}
                    onClick={scrollTop}
                >
                    ↑
                </button>
            </div>
        </>
    )
}
export default Footer;