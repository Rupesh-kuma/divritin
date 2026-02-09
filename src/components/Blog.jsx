import blogimage1 from '../assets/images/Driving Digital Growth with Smart IT Solutions.webp';
import blogimage2 from '../assets/images/Team Collaboration That Builds Strong Digital Success.webp';
const Blog = () => {
    return (
        <>
            <section className="px-5 py-5">
                <div className="container-fluid">
                    <div className='sub_title'>
                        <span>Latest News</span>
                        <h3>Read our latest blog</h3>
                        <p>Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each client.</p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="tz-blog2-item d-flex align-items-center">
                                <div className="item-img">
                                    <img decoding="async" src={blogimage1} alt="Driving Digital Growth with Smart IT Solutions" />
                                </div>
                                <div className="item-text">
                                    <div className="item-meta">
                                        <a href="#"><i className="fa-regular fa-calendar"></i>January 10, 2024</a>
                                    </div>

                                    <h3 className="blog_title">
                                        <a href="#" aria-label="name">Driving Digital Growth with Smart IT Solutions</a>
                                    </h3>
                                    <p>Divrit Technologies Pvt. Ltd. empowers businesses with tailored IT services using skilled professionals and cutting-edge technologies. Our one-stop digital solutions help partners streamline operations, enhance performance, and scale efficiently in today’s competitive market.</p>
                                    <div class="wrapper"><a href="#">IT Solution</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="tz-blog2-item d-flex align-items-center">
                                <div className="item-img">
                                    <img decoding="async" src={blogimage2} alt="Team Collaboration That Builds Strong Digital Success" />
                                </div>
                                <div className="item-text">
                                    <div className="item-meta">
                                        <a href="#"><i className="fa-regular fa-calendar"></i>January 10, 2024</a>
                                    </div>

                                    <h3 className="blog_title">
                                        <a href="#" aria-label="name">Team Collaboration That Builds Strong Digital Success</a>
                                    </h3>
                                    <p>At Divrit Technologies, our experienced team works collaboratively to deliver cost-effective and high-quality IT solutions. Through best practices and innovation, we help our partners grow revenue and expand their client base with confidence.</p>
                                    <div class="wrapper"><a href="#">Team Work</a></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default Blog;