import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
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
                                            <Link href="mailto:info@divritin.com">
                                                <i className="fa-regular fa-envelope"></i> info@divritin.com
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="tel:+919871886822">
                                                <i className="fa-solid fa-phone-flip"></i> +91-9871886822
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="header-right-cta d-flex justify-content-end">
                                    <div className="social-profile mr-30">
                                        <Link href="#">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link href="#">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link href="#">
                                            <i className="fab fa-behance" />
                                        </Link>
                                        <Link href="#">
                                            <i className="fab fa-youtube" />
                                        </Link>
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
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="logo" className="logo_header" />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse align_nav" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        to="/Core-Services-IT"
                                        className="nav-link dropdown-toggle"
                                        id="coreServicesDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Core Services - IT
                                    </Link>
                                    <ul className="dropdown-menu pl-0" aria-labelledby="coreServicesDropdown">
                                        <li className="nav-item dropdown dropdown-submenu pl-0">
                                            <Link
                                                to="/Application-Development"
                                                className="dropdown-item dropdown-toggle"
                                                id="appDevDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Application Development
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="appDevDropdown">
                                                <li>
                                                    <Link to="/custom-software-development" className="dropdown-item">
                                                        Custom Software Development
                                                    </Link>
                                                </li>
                                                {/*<li><Link className="dropdown-item" href="#cross-platform">Cross Platform App Development</Link></li>*/}
                                                <li>
                                                    <Link to="/web-design-development" className="dropdown-item">
                                                        Website &amp; Design Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/mobile-app-development"
                                                        className="dropdown-item"
                                                    >
                                                        Mobile App Development
                                                    </Link>
                                                </li>
                                                {/*<li><Link className="dropdown-item" href="#website-redesign">Website Re-design/Maintenance</Link></li>*/}
                                                <li>
                                                    <Link
                                                        to="/web-mobile-app-maintenance"
                                                        className="dropdown-item"
                                                    >
                                                        Web-Mobile App Maintenance(AMC)
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown dropdown-submenu pl-0">
                                            <Link
                                                to="/Application-Design"
                                                className="dropdown-item dropdown-toggle"
                                                id="appDevDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Application Design
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="appDevDropdown">
                                                <li>
                                                    <Link className="dropdown-item" to="/website-ui-ux-design">
                                                        Website UI/UX design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/mobile-screen-design"
                                                        className="dropdown-item"
                                                    >
                                                        Mobile screen design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/other-design-services" className="dropdown-item" >
                                                        Other Design Services
                                                    </Link>
                                                </li>
                                                {/*<li><Link className="dropdown-item" href="#mobile-dev">Logo design </Link></li>*/}
                                                {/*<li><Link className="dropdown-item" href="#website-redesign">    Company Portfolio design</Link></li>*/}
                                                {/*<li><Link className="dropdown-item" href="#mobile-redesign"> Graphical UI design</Link></li>*/}
                                                {/*<li><Link className="dropdown-item" href="#mobile-redesign">    Prototype or Mock design </Link></li>*/}
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link
                                        to="/Branding-Marketing"
                                        className="nav-link dropdown-toggle"
                                        id="navbarDropdown1"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Branding & Marketing
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                        <li>
                                            <Link to="/search-engine-optimization" className="dropdown-item" >
                                                Search Engine Optimization (SEO)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/social-media-optimization" className="dropdown-item" >
                                            Social Media Optimization (SMO)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/pay-per-click" className="dropdown-item">
                                                Pay-Per-Click/SEM Paid campaign
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/other-promotional-services">
                                                Other Promotional Services
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        to="/Technologies"
                                        className="nav-link dropdown-toggle"
                                        id="navbarDropdown2"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Technologies
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                        <li>
                                            <Link to="/Technologies" className="dropdown-item">
                                                Technologies
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Case-Studies" className="dropdown-item">
                                                Case Studies
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Industries" className="dropdown-item">
                                                Industries
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        to="/Company-Profile"
                                        className="nav-link dropdown-toggle"
                                        id="navbarDropdown3"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Company Profile
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                        <li>
                                            <Link to="/Our-Portfolios" className="dropdown-item">
                                                Our Portfolios
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Our-Client" className="dropdown-item">
                                                Our Client
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Event" className="dropdown-item">
                                                Event
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Blogs" className="dropdown-item">
                                                Blogs
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contact-Us" className="nav-link">
                                        Contact Us
                                    </Link>
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
                                        <Link to="tel:+919871886822">
                                            <i className="fa-solid fa-phone-volume"></i> +91-9871886822
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="mailto:info@divritin.com">
                                            <i className="fa-regular fa-envelope"></i> info@divritin.com
                                        </Link>
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
                                <Link to="/" className="sidebar-menu-link">
                                    <i className="fa-solid fa-house"></i>
                                    Home
                                </Link>
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
                                        <Link to="/Tally-Prime" className="sidebar-submenu-link">
                                            Tally Prime
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <Link to="/Tally-Prime-Edit-Log" className="sidebar-submenu-link">
                                            Tally Prime Edit Log
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <Link to="/Tally-Server" className="sidebar-submenu-link">
                                            Tally Server
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <Link to="/Tally-prime-developer" className="sidebar-submenu-link">
                                            Tally prime developer
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <Link to="/Tally-ERP" className="sidebar-submenu-link">
                                            Tally ERP
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <Link to="/Tally-TSS" className="sidebar-submenu-link">
                                            Tally TSS (Tally Software Services)
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <Link to="/Tally-Integration-Solutions" className="sidebar-submenu-link">
                                            Tally Integration Solutions
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <Link to="/Tally-on-Cloud" className="sidebar-submenu-link">
                                            Tally on Cloud
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <Link to="/Tally-Educational-Product" className="sidebar-submenu-link">
                                            Tally Educational Product
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <Link to="/Tally-Downloads" className="sidebar-submenu-link">
                                            Tally Downloads
                                        </Link>
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
                                        <Link to="/Cloud-Solutions" className="sidebar-submenu-link">
                                            Cloud Solutions
                                        </Link>
                                        <ul>
                                            <li className="sidebar-submenu-item">
                                                <Link to="/Services-Hosting" className="sidebar-submenu-link">
                                                    Services & Hosting
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <Link to="/On-Demand-Workforce" className="sidebar-submenu-link">
                                            On Demand Workforce
                                        </Link>
                                        <ul>
                                            <li className="sidebar-submenu-item">
                                                <Link to="/Developer-Consultant" className="sidebar-submenu-link">
                                                    Developer & Consultant
                                                </Link>
                                            </li>
                                            <li className="sidebar-submenu-item">
                                                <Link to="/Virtual-Assistant" className="sidebar-submenu-link">
                                                    Virtual Assistant
                                                </Link>
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
                                        <Link href="#" className="sidebar-submenu-link">
                                            Our Portfolios
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <Link href="#" className="sidebar-submenu-link">
                                            Our Client
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <Link href="#" className="sidebar-submenu-link">
                                            Event
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu-item">
                                        <Link href="#" className="sidebar-submenu-link">
                                            Blogs
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
                            <li className="sidebar-menu-item">
                                <Link to="/Career" className="sidebar-menu-link">
                                    <i className="fa-solid fa-briefcase"></i>
                                    Career
                                </Link>
                            </li>

                            <li className="sidebar-menu-item">
                                <Link to="/Contact-Us" className="sidebar-menu-link">
                                    <i className="fa-solid fa-envelope"></i>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>

                        {/* Contact Section */}
                        <div className="sidebar-contact">
                            <h4>Get In Touch</h4>
                            <Link to="tel:+919871886822" className="contact-item">
                                <i className="fa-solid fa-phone-volume"></i>
                                <span>+91-9871886822</span>
                            </Link>
                            <Link to="mailto:info@divritin.com" className="contact-item">
                                <i className="fa-regular fa-envelope"></i>
                                <span>info@divritin.com</span>
                            </Link>
                        </div>
                    </div>
                </div>


            </header>
        </>
    )
}
export default Header;