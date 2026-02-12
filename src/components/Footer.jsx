import logo from "../assets/images/logo_white.png"
const Footer = () => {
    return (
        <>
            <div className="background_footer px-lg-5 px-sm-2">
                <div className="container-fluid">
                    <div className="row footer_main">
                        <div className="col-lg-3 col-sm-12">
                            <img src={logo} alt="logo footer" className="w-75" />
                            <p>Divrit Technologies Pvt. Ltd. is an IT company that provides a one-stop solution for all IT services with its skilled team, best practices, and cutting-edge technologies</p>
                            <div class="footer-social-icon">
                                
                                <a href="https://www.facebook.com/Divrittechnologies/" target="_blank" rel="nofollow"><i class="fab fa-facebook"></i></a>
                                <a href="https://x.com/DivritTech" target="_blank" rel="nofollow"><i class="fab fa-twitter" target="_blank"></i></a>
                                <a href="https://www.instagram.com/divrittechnologiespvtltd/" target="_blank" rel="nofollow"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/divrit-technologies-a156a0344/" target="_blank" rel="nofollow"><i class="fab fa-linkedin"></i></a>
                                <a href="https://in.pinterest.com/divrittechnologiespvtltd/" target="_blank" rel="nofollow"><i class="fab fa-pinterest"></i></a>
                                </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 footer_second">
                            <h3>Company Info</h3>
                            <ul>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="">Team</a></li>
                                <li><a href="">Gallery</a></li>
                                <li><a href="">Career</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-12 footer_second">
                            <h3>Our Services</h3>
                            <ul>
                                <li><a href="/about">IT Services</a></li>
                                <li><a href="">Cloud Solutions</a></li>
                                <li><a href="">Resource Augmentation</a></li>
                                <li><a href="">Tally Implementation</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-12 footer_second">
                            <h3>Legal</h3>
                            <ul>
                                <li><a href="/about">Privacy Policy</a></li>
                                <li><a href="">Refund Policy</a></li>
                                <li><a href="">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-12 footer_second">
                            <h3>Touch Point</h3>
                            {/* location section */}
                            <div className="d-flex getintuch_footer" style={{marginTop:"-10px"}}>
                            <i class="fa-solid fa-location-dot"></i>
                                 <a href="#">Gaur city center ,Greater Noida west</a>
                            </div>
                            {/* mail section */}
                            <div className="d-flex getintuch_footer">
                            <i class="fa-regular fa-envelope"></i>
                                 <a href="mailto:info@divritin.com">info@divritin.com</a>
                            </div>
                            
                            {/* call section */}
                            <div className="d-flex getintuch_footer">
                            <i class="fa-solid fa-phone-volume"></i>
                                 <a href="tel:+919871886822">+91- 9871886822</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            {/* copy right */}
            <div className="copy_right">
                    <a href="https://divritin.com/">Copyright © 2024-2026 All rights reserved</a>
                </div>
        </>
    )
}
export default Footer;