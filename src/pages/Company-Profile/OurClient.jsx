import { Helmet } from "react-helmet-async";
import data from "/src/datas/ourClient.json";


const Ourclient = () => {
    return (
        <>
            <Helmet>

                <title>
                    Our Clients | Trusted Client Portfolio | Divrit Technologies Private Limited
                </title>

                <meta
                    name="description"
                    content="Explore the trusted clients of Divrit Technologies Private Limited. We proudly serve businesses across industries with innovative web development, mobile app development, software development and digital marketing solutions."
                />

                <meta
                    name="keywords"
                    content="Our Clients, Client Portfolio, Trusted Clients, IT Company Clients, Software Development Clients, Digital Marketing Clients"
                />

                <meta name="robots" content="index, follow" />

                <link rel="canonical" href="https://divritin.com/our-client" />

                <meta property="og:title" content="Our Clients | Divrit Technologies Private Limited" />

                <meta property="og:description" content="Discover the businesses and organizations that trust Divrit Technologies for innovative digital and technology solutions." />

                <meta property="og:type" content="website" />

                <meta property="og:url" content="https://divritin.com/our-client" />

                <meta property="og:image" content="/images/work_image.png" />

            </Helmet>
            <section
                className="spb-hero client_banner"
                style={{ backgroundImage: `url(/images/our_client_banner.webp)` }}
            >
                <div className="spb-hero__overlay" />
                <div className="spb-hero__grid-lines" />

                <div className="spb-container container-fluid spb-hero__inner">
                    <h1 className="spb-hero__title">Our Client</h1>
                </div>
            </section>
            <div className="container_padd_Res">
                <section className="container-fluid">
                    <div className='sub_title  preciour_client'>
                        <h3>Our Precious Clients</h3>
                    </div>
                    <div className="client_logo_ass">
                        {data.logos.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={item.logo} alt={item.name} />
                            </a>
                        ))}
                    </div>

                </section >
            </div>
        </>
    )
}
export default Ourclient;