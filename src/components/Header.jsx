import { useState } from "react";
import logo from "../assets/images/logo.png";
const Header = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <header>
                {/* <div className="top-header d-none d-md-block">
                    <div className="container-flud">
                        <div className="row">
                            <div className="col-md-12 pr-md-0 col-12">
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
                </div> */}
                {/* top header end */}
                {/* second header bar */}
                {/* Navbar */}
                <nav className="navbar px-lg-5 px-sm-1 navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid px-0">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="logo" className="logo_header" />
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
                        <div className="collapse navbar-collapse align_nav" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="coreServicesDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Core Services - IT
                                    </a>
                                    <ul className="dropdown-menu pl-0" aria-labelledby="coreServicesDropdown">
                                        <li className="nav-item dropdown dropdown-submenu pl-0">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                id="appDevDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Application Development
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="appDevDropdown">
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Custom Software Development
                                                    </a>
                                                </li>
                                                {/*<li><a class="dropdown-item" href="#cross-platform">Cross Platform App Development</a></li>*/}
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Website &amp; Design Development
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Mobile App Development
                                                    </a>
                                                </li>
                                                {/*<li><a class="dropdown-item" href="#website-redesign">Website Re-design/Maintenance</a></li>*/}
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Web-Mobile App Maintenance(AMC)
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown dropdown-submenu pl-0">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                id="appDevDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Application Design
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="appDevDropdown">
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Website UI/UX design
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Mobile screen design
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#web-dev">
                                                        Other Design Services
                                                    </a>
                                                </li>
                                                {/*<li><a class="dropdown-item" href="#mobile-dev">Logo design </a></li>*/}
                                                {/*<li><a class="dropdown-item" href="#website-redesign">    Company Portfolio design</a></li>*/}
                                                {/*<li><a class="dropdown-item" href="#mobile-redesign"> Graphical UI design</a></li>*/}
                                                {/*<li><a class="dropdown-item" href="#mobile-redesign">    Prototype or Mock design </a></li>*/}
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown1"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Branding & Marketing
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
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
                                        id="navbarDropdown2"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Technologies
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Technologies
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Case studies
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Industries
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown3"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Company Profile
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
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
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <button className="menu-toggle-btn" onClick={toggleSidebar}>
                                        <i className="fa-solid fa-bars"></i>
                                    </button>
                                </li>
                            </ul>
                            <div className="wrappers">
                                <ul>
                                    <li>
                                        <a href="tel:+919871886822">
                                            <i className="fa-solid fa-phone-volume"></i> +91-9871886822
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@divritin.com">
                                            <i className="fa-regular fa-envelope"></i> info@divritin.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Sidebar Overlay */}
                <div
                    className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
                    onClick={toggleSidebar}
                ></div>

                {/* Sliding Sidebar */}
                <div className={`sliding-sidebar ${sidebarOpen ? 'active' : ''}`}>
                    <div className="sidebar-header">
                        <h3>Divrit Technologies Pvt. Ltd.</h3>
                        <button className="sidebar-close-btn" onClick={toggleSidebar}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div className="sidebar-content">
                        <ul className="sidebar-menu">
                            <li className="sidebar-menu-item">
                                <a href="#" className="sidebar-menu-link">
                                    <i className="fa-solid fa-house"></i>
                                    Home
                                </a>
                            </li>

                            <li className="sidebar-menu-item">
                                <div
                                    className="sidebar-menu-link menu-dropdown-toggle"
                                    onClick={(e) => {
                                        const submenu = e.currentTarget.nextElementSibling;
                                        const arrow = e.currentTarget.querySelector('.dropdown-arrow');
                                        submenu.classList.toggle('active');
                                        arrow.classList.toggle('active');
                                    }}
                                >
                                    <span>
                                        <i className="fa-solid fa-bullhorn"></i>
                                        Tally Solution
                                    </span>
                                    <i className="fa-solid fa-chevron-down dropdown-arrow"></i>
                                </div>
                                <ul className="sidebar-submenu">
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Tally Prime
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Tally Prime Edit Log
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Tally Server
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Tally prime developer
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Tally ERP
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Tally TSS (Tally Software Services)
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Tally Integration Solutions
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Tally on Cloud
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Tally Educational Product
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Tally Downloads
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="sidebar-menu-item">
                                <div
                                    className="sidebar-menu-link menu-dropdown-toggle"
                                    onClick={(e) => {
                                        const submenu = e.currentTarget.nextElementSibling;
                                        const arrow = e.currentTarget.querySelector('.dropdown-arrow');
                                        submenu.classList.toggle('active');
                                        arrow.classList.toggle('active');
                                    }}
                                >
                                    <span>
                                        <i className="fa-solid fa-microchip"></i>
                                        Cloud & Workforce solutions
                                    </span>
                                    <i className="fa-solid fa-chevron-down dropdown-arrow"></i>
                                </div>
                                <ul className="sidebar-submenu">
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Cloud Solutions
                                        </a>
                                        <ul>
                                            <li className="sidebar-submenu-item">
                                                <a href="#" className="sidebar-submenu-link">
                                                    Services & Hosting
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            On Demand Workforce
                                        </a>
                                        <ul>
                                            <li className="sidebar-submenu-item">
                                                <a href="#" className="sidebar-submenu-link">
                                                    Developer & Consultant
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-item">
                                                <a href="#" className="sidebar-submenu-link">
                                                    Virtual Assistant
                                                </a>
                                            </li>
                                        </ul>
                                    </li>


                                </ul>
                            </li>
                            {/* 
                            <li className="sidebar-menu-item">
                                <div
                                    className="sidebar-menu-link menu-dropdown-toggle"
                                    onClick={(e) => {
                                        const submenu = e.currentTarget.nextElementSibling;
                                        const arrow = e.currentTarget.querySelector('.dropdown-arrow');
                                        submenu.classList.toggle('active');
                                        arrow.classList.toggle('active');
                                    }}
                                >
                                    <span>
                                        <i className="fa-solid fa-building"></i>
                                        Company Profile
                                    </span>
                                    <i className="fa-solid fa-chevron-down dropdown-arrow"></i>
                                </div>
                                <ul className="sidebar-submenu">
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Our Portfolios
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Our Client
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Event
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <a href="#" className="sidebar-submenu-link">
                                            Blogs
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                            <li className="sidebar-menu-item">
                                <a href="#" className="sidebar-menu-link">
                                    <i className="fa-solid fa-briefcase"></i>
                                    Career
                                </a>
                            </li>

                            <li className="sidebar-menu-item">
                                <a href="#" className="sidebar-menu-link">
                                    <i className="fa-solid fa-envelope"></i>
                                    Contact Us
                                </a>
                            </li>
                        </ul>

                        {/* Contact Section */}
                        <div className="sidebar-contact">
                            <h4>Get In Touch</h4>
                            <a href="tel:+919871886822" className="contact-item">
                                <i className="fa-solid fa-phone-volume"></i>
                                <span>+91-9871886822</span>
                            </a>
                            <a href="mailto:info@divritin.com" className="contact-item">
                                <i className="fa-regular fa-envelope"></i>
                                <span>info@divritin.com</span>
                            </a>
                        </div>
                    </div>
                </div>


            </header>
        </>
    )
}
export default Header;