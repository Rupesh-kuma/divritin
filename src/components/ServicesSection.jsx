import React, { useState } from "react";

const ServicesSection = () => {

    const servicesData = {
        "it-services": {
            title: "IT Services",
            icon: "🔧",
            subServices: [
                {
                    title: "Custom Software Development",
                    icon: "💻",
                    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800",
                    description:
                        "We build scalable, secure, and custom software solutions designed to streamline operations and accelerate business growth.",
                    features: [
                        "Enterprise Software Solutions",
                        "Custom Web Applications",
                        "API Development & Integration",
                        "Cloud-Based Systems",
                        "Automation Solutions"
                    ]
                },
                {
                    title: "Website Design & Development",
                    icon: "🌐",
                    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800",
                    description:
                        "We design high-performance, responsive, and visually engaging websites that convert visitors into customers.",
                    features: [
                        "Responsive UI/UX Design",
                        "E-Commerce Development",
                        "CMS Development",
                        "SEO Optimized Websites",
                        "Speed Optimization"
                    ]
                },
                {
                    title: "Mobile App Development",
                    icon: "📱",
                    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
                    description:
                        "We create powerful Android and iOS mobile applications that deliver seamless user experiences and business value.",
                    features: [
                        "Native Android & iOS Apps",
                        "Cross-Platform Apps",
                        "Custom UI/UX",
                        "Secure Backend Integration",
                        "App Maintenance"
                    ]
                },
                {
                    title: "Web-Mobile App Maintenance (AMC)",
                    icon: "🛠️",
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
                    description:
                        "Ensure smooth performance of your digital platforms with our comprehensive maintenance and support services.",
                    features: [
                        "24/7 Technical Support",
                        "Bug Fixing & Updates",
                        "Performance Monitoring",
                        "Security Enhancements",
                        "Backup & Recovery"
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
                    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
                    description:
                        "Seamlessly move your infrastructure and applications to secure cloud environments with minimal downtime.",
                    features: [
                        "AWS & Azure Migration",
                        "Hybrid Cloud Setup",
                        "Data Transfer",
                        "Security Compliance",
                        "Performance Optimization"
                    ]
                },
                {
                    title: "Cloud Storage",
                    icon: "💾",
                    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
                    description:
                        "Reliable and scalable cloud storage solutions to protect and manage your business data efficiently.",
                    features: [
                        "Secure Data Storage",
                        "Automatic Backups",
                        "Disaster Recovery",
                        "High Availability",
                        "Cost Optimization"
                    ]
                },
                {
                    title: "Cloud Management",
                    icon: "⚙️",
                    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
                    description:
                        "End-to-end cloud infrastructure monitoring, optimization, and security management services.",
                    features: [
                        "Infrastructure Monitoring",
                        "Cost Control",
                        "Security Management",
                        "Auto Scaling",
                        "System Optimization"
                    ]
                },
                {
                    title: "SaaS Solutions",
                    icon: "📦",
                    image: "https://images.unsplash.com/photo-1581091870627-3c8e38a7f0b2?w=800",
                    description:
                        "Custom SaaS product development and deployment for scalable business applications.",
                    features: [
                        "Custom SaaS Platforms",
                        "Subscription Management",
                        "Cloud Hosting",
                        "User Analytics",
                        "Continuous Upgrades"
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
                    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
                    description:
                        "Quickly scale your workforce with skilled IT professionals for short-term business needs.",
                    features: [
                        "Skilled Developers",
                        "QA Engineers",
                        "IT Support Staff",
                        "Flexible Contracts",
                        "Immediate Hiring"
                    ]
                },
                {
                    title: "Developer & Consultant (Monthly/Hourly)",
                    icon: "💻",
                    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
                    description:
                        "Hire experienced developers and consultants on flexible engagement models.",
                    features: [
                        "Dedicated Developers",
                        "Project Consultants",
                        "Agile Delivery",
                        "Direct Communication",
                        "Cost Efficient"
                    ]
                },
                {
                    title: "Virtual Assistance",
                    icon: "📞",
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
                    description:
                        "Professional virtual support services to manage operations and administrative tasks remotely.",
                    features: [
                        "Customer Support",
                        "Data Management",
                        "Email Handling",
                        "Scheduling",
                        "Remote Operations"
                    ]
                },
                {
                    title: "Team Extension",
                    icon: "🤝",
                    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
                    description:
                        "Extend your existing team with dedicated skilled professionals for long-term projects.",
                    features: [
                        "Long-Term Resources",
                        "Seamless Integration",
                        "Full-Time Developers",
                        "Project Ownership",
                        "Continuous Support"
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
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
                    description:
                        "Custom Tally ERP modules tailored to match your business processes.",
                    features: [
                        "Custom Reports",
                        "Invoice Formats",
                        "Process Automation",
                        "User Controls",
                        "Business Logic Setup"
                    ]
                },
                {
                    title: "Data Migration",
                    icon: "📁",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
                    description:
                        "Secure and accurate migration of your business data into Tally ERP systems.",
                    features: [
                        "Legacy Data Transfer",
                        "Error-Free Migration",
                        "Backup Handling",
                        "Verification",
                        "System Optimization"
                    ]
                },
                {
                    title: "Tally Integration",
                    icon: "🔗",
                    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
                    description:
                        "Integrate Tally with other business tools and platforms seamlessly.",
                    features: [
                        "CRM Integration",
                        "Inventory Systems",
                        "Payment Gateways",
                        "ERP Integration",
                        "Automation"
                    ]
                },
                {
                    title: "Tally Training",
                    icon: "🎓",
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
                    description:
                        "Professional training sessions to help your team use Tally efficiently.",
                    features: [
                        "User Training",
                        "Advanced Accounting",
                        "GST Compliance",
                        "Reporting",
                        "Practical Workshops"
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
                <div className='sub_title'>
                    <span>Our services</span>
                    <h3>Read our latest blog</h3>
                    <p>Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each client.</p>
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
                                                <li key={idx}>✔ {f}</li>
                                            ))}
                                        </ul>

                                        <button className="service_cta_button">
                                            Learn More →
                                        </button>
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
