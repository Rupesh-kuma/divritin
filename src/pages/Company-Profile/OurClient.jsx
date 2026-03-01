import data from "/src/datas/ourClient.json";


const Ourclient = () => {
    return (
        <>
            <section
                className="spb-hero"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80)` }}
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