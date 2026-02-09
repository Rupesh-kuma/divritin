import logo from "../assets/images/logo.png";
const Header = () => {
    
    

    return (
        <>
            <header>
                <div className="top-header d-md-block">
                    <div className="container-flud">
                        <div className="row">
                            <div className="col-md-7 pr-md-0 col-12">
                                <div className="header-cta">
                                    <ul>
                                        <li>
                                            <a href="mailto:info@divritin.com">
                                                <i className="fa-regular fa-envelope"></i> info@divritin.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+919871886822">
                                                <i className="fa-solid fa-phone-flip"></i> +91-9871886822
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="header-right-cta d-flex justify-content-end">
                                    <div className="social-profile mr-30">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* top header end */}
                {/* second header bar */}
                <nav className="navbar px-5 navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid px-0">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="logo" className="logo_header"/>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    Core Services - IT 
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Branding & Marketing
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                            Search Engine Optimization (SEO)
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                            Social Media Optimization (SMO) 
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                            Pay-Per-Click/SEM Paid campaign
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                            Other Promotional Services
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Company Profile
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                            Our Team
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                            Our Portfolios
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                            Our Client 
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                            Event
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                            Blogs 
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                            Career
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    Career
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    Contact Us
                                    </a>
                                </li>
                                
                            </ul>
                            <div className="wrapper">
                                <a href="#">Consultancy</a>
                            </div>
                        </div>
                    </div>
                </nav>


            </header>
        </>
    )
}
export default Header;