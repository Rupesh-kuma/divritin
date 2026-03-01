import React, { useState } from "react";
import custom_software_development from "../assets/images/custom_software_development.webp"
import Website_Design_Development from "../assets/images/Website_Design_Development.webp"
import Mobile_App_Development from "../assets/images/Mobile_App_Development.webp"
import Web_Mobile_App_Maintenance from "../assets/images/Web_Mobile_App_Maintenance.webp"
import Cloud_Migration from "../assets/images/Cloud_Migration.webp"
import Cloud_Storage from "../assets/images/Cloud_Storage.webp"
import Cloud_Management from "../assets/images/Cloud_Management.webp"
import SaaS_Solutions from "../assets/images/SaaS_Solutions.webp"
import Resource_Augmentation from "../assets/images/Resource_Augmentation.webp"
import Developer_Consultant from "../assets/images/Developer_Consultant.webp"
import Virtual_Assistance from "../assets/images/Virtual_Assistance.png"
import Team_Extension from "../assets/images/Team_Extension.webp"
import Tally_Customization from "../assets/images/Tally_Customization.webp"
import Data_Migration from "../assets/images/Data_Migration.webp"
import Tally_Integration from "../assets/images/Tally_Integration.webp"
import Tally_Training from "../assets/images/Tally_Training.webp"

const ServicesSection = () => {

    const servicesData = {
        "it-services": {
            title: "IT Services",
            icon: "👨‍💻",
            subServices: [
                {
                    title: "Custom Software Development",
                    icon: "💻",
                    image: custom_software_development,
                    explore:"/custom-software-development",
                    description:
                        "We build scalable, secure, and custom software solutions designed to streamline operations and accelerate business growth.",
                    features: [
                        "Custom Web Applications",
                        "E-commerce Platform Development",
                        "CRM & ERP Development",
                        "Custom CMS Development",
                        "Enterprise Software Solutions",
                        "API Development & Integration",
                        "Cloud-Based Systems",
                        "Automation Solutions",

                    ]
                },
                {
                    title: "Website Design & Development",
                    icon: "🌐",
                    image: Website_Design_Development,
                    explore:"/web-design-development",
                    description:
                        "At Divrit Technologies Pvt Ltd, we create high-performance, secure, and scalable websites that help businesses establish a strong digital presence and convert visitors into loyal customers. Our team combines modern design principles.",
                    features: [
                        "Custom Website Development",
                        "Responsive UI/UX Design",
                        "E-Commerce Development",
                        "CMS Development",
                        "SEO Optimized Websites",
                        "Speed Optimization",
                        "Website Maintenance & Support"
                    ]
                },
                {
                    title: "Mobile App Development",
                    icon: "📱",
                    image: Mobile_App_Development,
                    explore:"/mobile-app-development",
                    description:
                        "At Divrit Technologies Pvt. Ltd., we design and develop high-performance mobile applications that help businesses engage customers, streamline operations, and scale digitally. Our expert developers build secure, intuitive.",
                    features: [
                        "Native Android & iOS App Development",
                        "Cross-Platform App Development",
                        "Custom UI/UX Design",
                        "Secure Backend Integration",
                        "Scalable App Architecture",
                        "App Testing & Quality Assurance",
                        "App Maintenance & Support"
                    ]
                },
                {
                    title: "Web-Mobile App Maintenance (AMC)",
                    icon: "🛠️",
                    image: Web_Mobile_App_Maintenance,
                    explore:"/web-mobile-app-maintenance",
                    description:
                        "At Divrit Technologies Pvt. Ltd., we understand that launching a website or mobile application is just the beginning. Continuous monitoring, regular updates, and proactive support are essential to ensure smooth performance, security, and long-term reliability.",
                    features: [
                        "24/7 Technical Support",
                        "Bug Fixing & Regular Updates",
                        "Performance Monitoring & Optimization",
                        "Security Enhancements",
                        "Backup & Recovery Management",
                        "Version Upgrades & Feature Improvements"
                    ]
                }
            ]
        },

        "cloud-solutions": {
            title: "Cloud Services & Hosting",
            icon: "☁️",
            subServices: [
                {
                    title: "Cloud Migration",
                    icon: "🚀",
                    image: Cloud_Migration,
                    description:
                        "At Divrit Technologies Pvt. Ltd., we help businesses transition smoothly from traditional infrastructure to secure, scalable, and high-performance cloud environments. Our cloud migration solutions are designed to minimize downtime, protect critical data, and ensure optimal system performance throughout the migration process.",
                    features: [
                        "AWS & Azure Migration",
                        "Hybrid Cloud Setup",
                        "Secure Data Transfer",
                        "Cloud Security & Compliance",
                        "Performance Optimization",
                        "Cloud Architecture Planning"
                    ]
                },
                {
                    title: "Cloud Storage",
                    icon: "💾",
                    image: Cloud_Storage,
                    description:
                        "At Divrit Technologies Pvt. Ltd., we provide secure, scalable, and high-performance cloud storage solutions that help businesses store, manage, and protect their critical data with complete reliability. Our cloud storage services are designed to ensure data accessibility, disaster protection, and cost efficiency while maintaining the highest security standards.",
                    features: [
                        "Secure Data Storage",
                        "Automatic Backups",
                        "Disaster Recovery Solutions",
                        "High Availability & Redundancy",
                        "Cost Optimization & Resource Management",
                        "Continuous Monitoring & Support"
                    ]
                },
                {
                    title: "Cloud Management",
                    icon: "⚙️",
                    image: Cloud_Management,
                    description:
                        "At Divrit Technologies Pvt. Ltd., we deliver end-to-end cloud management services that ensure your cloud infrastructure remains secure, optimized, and highly available at all times. Our experts handle monitoring, performance tuning, cost control, and security management so you can focus on growing your business while we manage your cloud operations efficiently.",
                    features: [
                        "Infrastructure Monitoring",
                        "Cost Control & Resource Optimization",
                        "Cloud Security Management",
                        "Auto Scaling & Load Management",
                        "System Optimization & Performance Tuning",
                        "Backup Management & Disaster Recovery"
                    ]
                },
                {
                    title: "SaaS Solutions",
                    icon: "📦",
                    image: SaaS_Solutions,
                    description:
                        "At Divrit Technologies Pvt. Ltd., we design and develop scalable, secure, and high-performance Software as a Service (SaaS) solutions that help businesses streamline operations, improve customer engagement, and grow faster in the digital ecosystem. Our custom SaaS platforms are built with cloud-native architectures to ensure flexibility, reliability, and long-term success.",
                    features: [
                        "Custom SaaS Platform Development",
                        "Subscription & Billing Management",
                        "Cloud Hosting & Infrastructure Setup",
                        "User Analytics & Reporting",
                        "Ongoing Support & Maintenance"
                    ]
                }
            ]
        },

        "resource-augmentation": {
            title: "Resource Augmentation",
            icon: "👥",
            subServices: [
                {
                    title: "Temporary Staffing",
                    icon: "🧑‍💼",
                    image: Resource_Augmentation,
                    description:
                        "At Divrit Technologies Pvt. Ltd., we help businesses quickly scale their teams with highly skilled IT professionals to meet short-term project demands and workload spikes. Our temporary staffing solutions provide immediate access to experienced talent without the long-term hiring burden, enabling faster delivery and operational flexibility.",
                    features: [
                        "Skilled Developers",
                        "QA Engineers & Testers",
                        "IT Support & Technical Staff",
                        "Flexible Contract Models",
                        "Immediate Hiring & Fast Onboarding",
                        "Project-Based Team Scaling"
                    ]
                },
                {
                    title: "Developer & Consultant (Monthly/Hourly)",
                    icon: "💻",
                    image: Developer_Consultant,
                    description:
                        "At Divrit Technologies Pvt. Ltd., we provide highly skilled developers and IT consultants on flexible monthly and hourly engagement models to help businesses execute projects faster and more efficiently. Our dedicated professionals work as an extension of your in-house team, ensuring seamless collaboration, transparency, and high-quality delivery.",
                    features: [
                        "Dedicated Developers",
                        "Project Consultants",
                        "Agile Delivery Model",
                        "Direct Communication & Collaboration",
                        "Cost-Efficient Engagement",
                        "Quality Assurance & Reporting"
                    ]
                },
                {
                    title: "Virtual Assistance",
                    icon: "📞",
                    image: Virtual_Assistance,
                    description:
                        "At Divrit Technologies Pvt. Ltd., we provide professional virtual assistance services to help businesses manage daily operations, administrative responsibilities, and customer interactions efficiently. Our skilled virtual professionals work remotely as an extension of your team, ensuring smooth workflows, improved productivity, and cost-effective operational support.",
                    features: [
                        "Customer Support Services",
                        "Data Management & Processing",
                        "Email Handling & Communication",
                        "Scheduling & Calendar Management",
                        "Remote Operations Support",
                        "Flexible Engagement Models"
                    ]
                },
                {
                    title: "Team Extension",
                    icon: "🤝",
                    image: Team_Extension,
                    description:
                        "At Divrit Technologies Pvt. Ltd., our Team Extension services allow businesses to scale their workforce with dedicated, highly skilled professionals who integrate seamlessly into your existing team for long-term project success. We provide full-time developers and IT specialists who work exclusively on your projects, ensuring consistency, ownership, and high-quality delivery.",
                    features: [
                        "Long-Term Dedicated Resources",
                        "Seamless Team Integration",
                        "Full-Time Developers & Specialists",
                        "Project Ownership & Accountability",
                        "Continuous Support & Performance Monitoring",
                        "Transparent Communication & Reporting"
                    ]
                }
            ]
        },

        "tally-implementation": {
            title: "Tally Implementation",
            icon: "📊",
            subServices: [
                {
                    title: "Tally Customization",
                    icon: "⚙️",
                    image: Tally_Customization,
                    description:
                        "At Divrit Technologies Pvt. Ltd., we provide tailored Tally ERP customization solutions designed to align perfectly with your business operations and reporting needs. Our experts modify and enhance Tally functionalities to streamline workflows, improve financial visibility, and automate routine accounting processes.",
                    features: [
                        "Custom Financial & MIS Reports",
                        "Customized Invoice & Document Formats",
                        "Process Automation",
                        "User Role & Access Controls",
                        "Business Logic & Workflow Setup",
                        "Performance Optimization & Support"
                    ]
                },
                {
                    title: "Data Migration",
                    icon: "📁",
                    image: Data_Migration,
                    description:
                        "At Divrit Technologies Pvt. Ltd., we ensure secure, accurate, and seamless migration of your business data into Tally ERP systems without disruption to your daily operations. Our structured data migration process protects data integrity while improving system performance and usability.",
                    features: [
                        "Legacy Data Transfer",
                        "Error-Free Data Validation",
                        "Secure Backup Handling",
                        "Post-Migration Verification",
                        "System Performance Optimization",
                        "Minimal Downtime Process",
                        "Compliance & Data Security"
                    ]
                },
                {
                    title: "Tally Integration",
                    icon: "🔗",
                    image: Tally_Integration,
                    description:
                        "At Divrit Technologies Pvt. Ltd., we provide seamless Tally integration solutions that connect your accounting system with other business tools and platforms to create a unified and automated workflow. Our integrations help eliminate manual data entry, improve accuracy, and enhance operational efficiency across departments.",
                    features: [
                        "CRM Integration",
                        "Inventory Management System Integration",
                        "Payment Gateway Integration",
                        "ERP System Integration",
                        "Process Automation",
                        "API-Based Secure Connectivity",
                        "Real-Time Reporting & Dashboards"
                    ]
                },
                {
                    title: "Tally Training",
                    icon: "🎓",
                    image: Tally_Training,
                    description:
                        "At Divrit Technologies Pvt. Ltd., we offer professional Tally training programs designed to help businesses and teams use Tally ERP efficiently, accurately, and confidently. Our hands-on training sessions focus on real-world accounting scenarios, compliance requirements, and reporting needs to improve productivity and financial control.",
                    features: [
                        "User-Level Training",
                        "Advanced Accounting Techniques",
                        "GST Compliance & Taxation Setup",
                        "Custom Reporting & MIS Creation",
                        "Practical Hands-On Workshops",
                        "Post-Training Support"
                    ]
                }
            ]
        }
    };



    const mainKeys = Object.keys(servicesData);

    const [activeMain, setActiveMain] = useState(mainKeys[0]);
    const [activeSub, setActiveSub] = useState(0);

    const activeService = servicesData[activeMain];

    return (
        <div className="service_main_section px-lg-5 px-sm-2">
            <div className="container-fluid">
                <div className='sub_title mb-4 pb-1'>
                    <span>Our services</span>
                    <h3>Powering Businesses Through Innovative Digital Solutions</h3>
                    <p>We deliver innovative IT solutions designed to empower businesses with scalable technology, enhanced performance, and long-term digital growth. Our expert team ensures every service is tailored to meet your unique operational needs.</p>
                </div>

                {/* Top Main Services */}
                <div className="top_service_cards">
                    {mainKeys.map((key) => (
                        <div
                            key={key}
                            className={`top_service_card ${key === activeMain ? "active" : ""}`}
                            onClick={() => {
                                setActiveMain(key);
                                setActiveSub(0);
                            }}
                        >
                            <div className="top_service_icon">{servicesData[key].icon}</div>
                            <h3>{servicesData[key].title}</h3>
                        </div>
                    ))}
                </div>

                {/* Sub Service Tabs */}
                <div className="service_tabs_wrapper">

                    <div className="service_tabs_left">
                        {activeService.subServices.map((sub, i) => (
                            <div
                                key={i}
                                className={`service_tab_item ${i === activeSub ? "active" : ""}`}
                                onClick={() => setActiveSub(i)}
                            >
                                <div className="service_tab_icon_small">{sub.icon}</div>
                                <h4>{sub.title}</h4>
                            </div>
                        ))}
                    </div>

                    {/* Detail Section */}
                    <div className="service_details_right">

                        {activeService.subServices.map((sub, i) => (
                            i === activeSub && (
                                <div key={i} className="service_detail_item active">

                                    <div className="service_detail_image">
                                        <img src={sub.image} alt={sub.title} />
                                    </div>

                                    <div className="service_detail_content">
                                        <p>{sub.description}</p>

                                        <ul>
                                            {sub.features.map((f, idx) => (
                                                <li key={idx}>{f}</li>
                                            ))}
                                        </ul>

                                        <a href={sub.explore} className="service_cta_button">
                                        Explore More →
                                        </a>
                                    </div>

                                </div>
                            )
                        ))}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicesSection;
