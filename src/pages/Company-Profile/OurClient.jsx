import cl1 from "/src/assets/images/accurect.png";
import cl2 from "/src/assets/images/cl2.webp";
import cl3 from "/src/assets/images/cl3.webp";
import cl4 from "/src/assets/images/cl4.webp";
import cl5 from "/src/assets/images/cl5.webp";
import cl6 from "/src/assets/images/cl6.webp";
import cl7 from "/src/assets/images/cl7.webp";
import cl8 from "/src/assets/images/cl8.webp";
import cl9 from "/src/assets/images/cl9.webp";
import cl10 from "/src/assets/images/cl10.webp";
import cl11 from "/src/assets/images/cl11.webp";
import cl12 from "/src/assets/images/cl12.webp";
import cl13 from "/src/assets/images/cl13.webp";
import cl14 from "/src/assets/images/cl14.webp";
import cl15 from "/src/assets/images/cl15.webp";

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
                    <div className="client_logo_ass ">
                        <img src={cl1} alt="client logo" className="w-100" />
                        <img src={cl2} alt="client logo" className="w-100" />
                        <img src={cl3} alt="client logo" className="w-100" />
                        <img src={cl4} alt="client logo" className="w-100" />
                        <img src={cl5} alt="client logo" className="w-100" />
                        <img src={cl6} alt="client logo" className="w-100" />
                        <img src={cl7} alt="client logo" className="w-100" />
                        <img src={cl8} alt="client logo" className="w-100" />
                        <img src={cl9} alt="client logo" className="w-100" />
                        <img src={cl10} alt="client logo" className="w-100" />
                        <img src={cl11} alt="client logo" className="w-100" />
                        <img src={cl12} alt="client logo" className="w-100" />
                        <img src={cl13} alt="client logo" className="w-100" />
                        <img src={cl14} alt="client logo" className="w-100" />
                        <img src={cl15} alt="client logo" className="w-100" />

                        {/* duplicate for seamless loop */}
                        <img src={cl1} alt="client logo" className="w-100" />
                        <img src={cl2} alt="client logo" className="w-100" />
                        <img src={cl3} alt="client logo" className="w-100" />
                        <img src={cl4} alt="client logo" className="w-100" />
                        <img src={cl5} alt="client logo" className="w-100" />
                        <img src={cl6} alt="client logo" className="w-100" />
                        <img src={cl7} alt="client logo" className="w-100" />
                        <img src={cl8} alt="client logo" className="w-100" />
                        <img src={cl9} alt="client logo" className="w-100" />
                        <img src={cl10} alt="client logo" className="w-100" />
                        <img src={cl11} alt="client logo" className="w-100" />
                        <img src={cl12} alt="client logo" className="w-100" />
                        <img src={cl13} alt="client logo" className="w-100" />
                        <img src={cl14} alt="client logo" className="w-100" />
                        <img src={cl15} alt="client logo" className="w-100" />
                    </div>
                </section >
            </div>
        </>
    )
}
export default Ourclient;