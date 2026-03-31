import { useEffect, useState } from "react";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
    const sidebarMenu = [
        {
            title: "Home",
            icon: "fa-house",
            link: "/"
        },
        {
            title: "Tally Solution",
            icon: "fa-bullhorn",
            submenu: [
                { title: "Tally Prime", link: "/page-not-found" },
                { title: "Tally Prime Edit Log", link: "/page-not-found" },
                { title: "Tally Server", link: "/page-not-found" },
                { title: "Tally prime developer", link: "/page-not-found" },
                { title: "Tally ERP", link: "/page-not-found" },
                { title: "Tally TSS (Tally Software Services)", link: "/page-not-found" },
                { title: "Tally Integration Solutions", link: "/page-not-found" },
                { title: "Tally on Cloud", link: "/page-not-found" },
                { title: "Tally Educational Product", link: "/page-not-found" },
                { title: "Tally Downloads", link: "/page-not-found" },
            ]
        },
        {
            title: "Cloud & Workforce solutions",
            icon: "fa-microchip",
            submenu: [
                { title: "Cloud Solutions", link: "/page-not-found", submenu: [{ title: "Services & Hosting", link: "/page-not-found" }] },
                {
                    title: "On Demand Workforce", link: "/page-not-found",
                    submenu: [{ title: "Developer & Consultant", link: "/page-not-found" }, { title: "Virtual Assistant", link: "/page-not-found" }]
                }
            ]
        },
        {
            title: "Career",
            icon: "fa-briefcase",
            link: "/career"
        },
        {
            title: "Contact Us",
            icon: "fa-envelope",
            link: "/Contact-Us"
        }
    ];
 const navbarData = [
        {
          title: "Home",
          link: "/"
        },
        {
          title: "Core Services - IT",
          link: "/Core-Services-IT",
          dropdown: [
            {
              title: "Application Development",
              link: "/Application-Development",
              submenu: [
                { title: "Custom Software Development", link: "/custom-software-development" },
                { title: "Website & Design Development", link: "/web-design-development" },
                { title: "Mobile App Development", link: "/mobile-app-development" },
                { title: "Web-Mobile App Maintenance(AMC)", link: "/web-mobile-app-maintenance" }
              ]
            },
            {
              title: "Application Design",
              link: "/Application-Design",
              submenu: [
                { title: "Website UI/UX design", link: "/website-ui-ux-design" },
                { title: "Mobile screen design", link: "/mobile-screen-design" },
                { title: "Other Design Services", link: "/other-design-services" }
              ]
            }
          ]
        },
        {
          title: "Branding & Marketing",
          link: "/Branding-Marketing",
          dropdown: [
            { title: "Search Engine Optimization (SEO)", link: "/search-engine-optimization" },
            { title: "Social Media Optimization (SMO)", link: "/social-media-optimization" },
            { title: "Pay-Per-Click/SEM Paid campaign", link: "/pay-per-click" },
            { title: "Other Promotional Services", link: "/other-promotional-services" }
          ]
        },
        {
          title: "Technologies",
          link: "/technologies",
          dropdown: [
            { title: "Technologies", link: "/technologies" },
            { title: "Case Studies", link: "/case-studies" },
            { title: "Industries", link: "/industries" }
          ]
        },
        {
          title: "Company Profile",
          link: "/Company-Profile",
          dropdown: [
            { title: "Our Portfolios", link: "/our-portfolios" },
            { title: "Our Client", link: "/our-client" },
            { title: "Event", link: "/events" },
            { title: "Career", link: "/career" },
            { title: "Blogs", link: "/blogs" }
          ]
        },
        {
          title: "Contact Us",
          link: "/Contact-Us"
        }
      ];

    useEffect(() => {
        const navbar = document.getElementById("navbarSupportedContent");

        const handleClick = (e) => {
            // agar dropdown toggle par click hua → kuch mat karo
            if (e.target.closest(".dropdown-toggle")) {
                return;
            }

            // sirf actual page links par close karo
            if (e.target.closest(".dropdown-item, .nav-link")) {
                if (navbar.classList.contains("show")) {
                    const collapse =
                        window.bootstrap.Collapse.getInstance(navbar) ||
                        new window.bootstrap.Collapse(navbar, { toggle: false });

                    collapse.hide();
                }
            }
        };

        navbar.addEventListener("click", handleClick);

        return () => {
            navbar.removeEventListener("click", handleClick);
        };
    }, []);

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
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse align_nav" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {navbarData.map((menu,i)=>(
                                    <li className={`nav-item ${menu.dropdown ? "dropdown":""}`} key={i}>
                                    <Link to={menu.link} className={`nav-link active ${menu.dropdown ? "dropdown-toggle":""}`} data-bs-toggle={menu.dropdown ? "dropdown" : ""} aria-current="page">
                                        {menu.title}
                                    </Link>
                                    {menu.dropdown && (
                                        <ul className="dropdown-menu pl-0" aria-labelledby="coreServicesDropdown">
                                            {menu.dropdown.map((drop,i)=>(
                                                 <li className={`nav-item ${drop.submenu ?"dropdown dropdown-submenu":""}  pl-0`} key={i}>
                                                 <Link
                                                     to={drop.link}
                                                     className={`dropdown-item ${drop.submenu ? "dropdown-toggle":"" }`}
                                                     role={`${drop.submenu ? "button":""}`}
                                                     data-bs-toggle={` ${drop.submenu ?"dropdown":""}`}
                                                     aria-expanded="false"
                                                 >
                                                     {drop.title}
                                                 </Link>
                                                 {drop.submenu && (
                                                 <ul className={`${drop.submenu ? "dropdown-menu":""}`} aria-labelledby="appDevDropdown">
                                                    {drop.submenu.map((submenu,i)=>(
                                                        <li key={i}>
                                                        <Link to={submenu.link} className="dropdown-item">
                                                            {submenu.title}
                                                        </Link>
                                                    </li>
                                                    ))}
                                                 </ul>
                                                 )}
                                                 </li>
                                            ))}
                                        </ul>
                                    )}
                                   
                                </li>
                                ))}
                               
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
                            {sidebarMenu.map((item, index) => (
                                <li className="sidebar-menu-item" key={index}>

                                    {/* NORMAL LINK */}
                                    {!item.submenu ? (
                                        <Link
                                            to={item.link}
                                            className="sidebar-menu-link"
                                            onClick={toggleSidebar}
                                        >
                                            <i className={`fa-solid ${item.icon}`}></i>
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <>
                                            {/* DROPDOWN */}
                                            <div
                                                className="sidebar-menu-link menu-dropdown-toggle"
                                                onClick={(e) => {
                                                    const submenu = e.currentTarget.nextElementSibling;
                                                    const arrow = e.currentTarget.querySelector(".dropdown-arrow");
                                                    submenu.classList.toggle("active");
                                                    arrow.classList.toggle("active");
                                                }}
                                            >
                                                <span>
                                                    <i className={`fa-solid ${item.icon}`}></i>
                                                    {item.title}
                                                </span>
                                                <i className="fa-solid fa-chevron-down dropdown-arrow"></i>
                                            </div>

                                            {/* SUBMENU */}
                                            <ul className="sidebar-submenu">
                                                {item.submenu.map((sub, i) => (
                                                    <li key={i} className="sidebar-submenu-item">
                                                        <Link
                                                            to={sub.link}
                                                            className="sidebar-submenu-link"
                                                            onClick={toggleSidebar}
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </li>
                            ))}
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