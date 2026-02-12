import { useEffect } from "react";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";
import about1 from '../assets/images/about_image.webp';
import ServicesSection from "../components/ServicesSection";
import client1 from "../assets/images/c1.webp";
import client2 from "../assets/images/logo_client.webp";
import client3 from "../assets/images/client_logo.webp";
import client4 from "../assets/images/client_logo_3.webp";
import client5 from "../assets/images/client_logo_4.webp";
import Trusted_logo1 from "../assets/images/Trusted_logo.webp";
import Trusted_logo2 from "../assets/images/Trusted_logo_2.webp";
import Trusted_logo3 from "../assets/images/b4.webp";
import Trusted_logo4 from "../assets/images/b5.webp";
import Trusted_logo5 from "../assets/images/b6.webp";
import Trusted_logo6 from "../assets/images/b7.webp";
import cl1 from "../assets/images/cl1.webp";
import cl2 from "../assets/images/cl2.webp";
import cl3 from "../assets/images/cl3.webp";
import cl4 from "../assets/images/cl4.webp";
import cl5 from "../assets/images/cl5.webp";
import cl6 from "../assets/images/cl6.webp";
import cl7 from "../assets/images/cl7.webp";
import cl8 from "../assets/images/cl8.webp";
import cl9 from "../assets/images/cl9.webp";
import cl10 from "../assets/images/cl10.webp";
import cl11 from "../assets/images/cl11.webp";
import cl12 from "../assets/images/cl12.webp";
import cl13 from "../assets/images/cl13.webp";
import cl14 from "../assets/images/cl14.webp";
import cl15 from "../assets/images/cl15.webp";

const Home = () => {
  useEffect(() => {

    let currentSlide = 0;
    const sliderWrapper = document.getElementById('sliderWrapper');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentSlideSpan = document.getElementById('currentSlide');
    const totalSlidesSpan = document.getElementById('totalSlides');
    const progressFill = document.getElementById('progressFill');
    const totalSlides = 4;

    if (!sliderWrapper) return; // safety check

    totalSlidesSpan.textContent = totalSlides;

    function updateSlider(smooth = true) {
      sliderWrapper.style.transition = smooth
        ? 'transform 0.8s cubic-bezier(0.645,0.045,0.355,1)'
        : 'none';

      sliderWrapper.style.transform = `translateX(${-currentSlide * 100}%)`;

      const actualSlide = currentSlide >= totalSlides ? 0 : currentSlide;

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === actualSlide);
      });

      currentSlideSpan.textContent = actualSlide + 1;
      resetProgress();
    }

    function nextSlide() {
      currentSlide++;
      updateSlider(true);

      if (currentSlide >= totalSlides) {
        setTimeout(() => {
          currentSlide = 0;
          updateSlider(false);
        }, 800);
      }
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider(true);
    }

    function resetProgress() {
      progressFill.style.width = "0%";
      let p = 0;
      const interval = setInterval(() => {
        p += 0.5;
        progressFill.style.width = p + "%";
        if (p >= 100) clearInterval(interval);
      }, 20);
    }

    nextBtn.onclick = nextSlide;
    prevBtn.onclick = prevSlide;

    dots.forEach((dot, i) => {
      dot.onclick = () => {
        currentSlide = i;
        updateSlider();
      };
    });

    updateSlider();

    const CircularProgress = ({ percent }) => {
      const radius = 60;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (percent / 100) * circumference;

      return (
        <div className="circle_percent" data-percent={percent}>
          <svg width="120" height="120">
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke="#e6e6e6"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke="#2b5ab4"
              strokeWidth="10"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
              style={{
                transition: 'stroke-dashoffset 2s ease-in-out'
              }}
            />
          </svg>
          <span className="percent_text">{percent}%</span>
        </div>
      );
    };

    // Use karna:


  }, []);
  return (
    <>
      <Header />
      <main>
        <div className="slider-container">
          {/* Slide Counter */}
          <div className="slide-counter">
            <span id="currentSlide">1</span> / <span id="totalSlides">4</span>
          </div>
          {/* Background Images Slider */}
          <div className="slider-wrapper" id="sliderWrapper">
            <div className="slide slide-1" />
            <div className="slide slide-2" />
            <div className="slide slide-3" />
            <div className="slide slide-4" />
            {/* Clone of first slide for seamless loop */}
            <div className="slide slide-1" />
          </div>
          {/* Fixed Content Overlay */}
          <div className="content-overlay">
            <div className="content-wrapper">
              <h1 className="main-heading">
                Your
                <br />
                Business  Our commitment
              </h1>
              <p className="sub-heading">
                We help to Grow your Business & Clientele. Through the empowering of technologies
              </p>
              <div className="button-group">
                <button className="btn btn-primary">
                  SERVICE WE PROVIDE
                  <span className="btn-arrow">→</span>
                </button>
                <button className="btn btn-secondary">
                  LEARN MORE
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
          {/* Slider Navigation */}
          <div className="slider-nav">
            <button className="nav-arrow" id="prevBtn">
              ‹
            </button>
            <div className="dots-container">
              <div className="dot active" data-slide={0} />
              <div className="dot" data-slide={1} />
              <div className="dot" data-slide={2} />
              <div className="dot" data-slide={3} />
            </div>
            <button className="nav-arrow" id="nextBtn">
              ›
            </button>
          </div>
          {/* Progress Bar */}
          <div className="progress-bar">
            <div className="progress-fill" id="progressFill" />
          </div>
        </div>

        <ServicesSection />
        {/* about section */}
        <div style={{ background: '#F5F5F5', }} className="p-lg-5 p-sm-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className='sub_title'>
                  <span className="justify-content-start">About us</span>
                  <h3 className="justify-content-start">Empowering Your Digital Journey for Business</h3>
                  <p className="text-start">
                    With years of experience in the industry, we have successfully delivered
                    numerous high-quality websites to clients across various sectors. As one of
                    the top 10 website design company in the web design industry, our expertise
                    and knowledge allow us to understand and cater to the unique requirements of
                    businesses. Your digital success is our top priority, and we're committed to
                    bringing you more of that marketing advantage.
                  </p>
                </div>

                <div className="row box_rox">
                  {/* Client Retentions - 95% */}
                  <div className="col-8">
                    <div className="blurb_text_why">
                      <div className="blurb_icon">
                        <i className="fa-solid fa-check" />
                      </div>
                      <div className="blurb_text">
                        <h4 title="Website design company in india">Client Retentions</h4>
                        <p>
                          Delivers fast support, and personalized interaction, gathers customer
                          feedback, and fosters loyalty
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle_percent" data-percent="95">
                      <svg viewBox="0 0 140 140">
                        <circle cx="70" cy="70" r="65" />
                        <circle
                          cx="70"
                          cy="70"
                          r="65"
                          transform="rotate(-90 70 70)"
                        />
                      </svg>
                      <span className="percent_text">95%</span>
                    </div>
                  </div>

                  {/* Happy Clients - 100% */}
                  <div className="col-8">
                    <div className="blurb_text_why">
                      <div className="blurb_icon">
                        <i className="fa-solid fa-check" />
                      </div>
                      <div className="blurb_text">
                        <h4>Happy Clients</h4>
                        <p>Discover why our clients trust us with their web design needs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle_percent" data-percent="100">
                      <svg viewBox="0 0 140 140">
                        <circle cx="70" cy="70" r="65" />
                        <circle
                          cx="70"
                          cy="70"
                          r="65"
                          transform="rotate(-90 70 70)"
                        />
                      </svg>
                      <span className="percent_text">100%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12">
                <img src={about1} alt="about" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
        {/* tecnology */}
        <section className="hed_text inder_Sec px-lg-5 px-sm-1">
          <div className="container-fluid">
            <div className='sub_title'>
              <span>Our services</span>
              <h3>Read our latest blog</h3>
              <p>Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each client.</p>
            </div>
            <div className="row">
              <div className="tabs_box mt-5">
                <ul className="nav nav-tabs new_mobiletab skil_section_Res" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#web"
                      type="button"
                      role="tab"
                      aria-controls="web"
                      aria-selected="true"
                    >
                      <span className="tab_hss">
                        <span>Frontend</span>
                      </span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="Planning-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Planning"
                      type="button"
                      role="tab"
                      aria-controls="Planning"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <span className="tab_hss">
                        <span>Backend </span>
                      </span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="Creative-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Creative"
                      type="button"
                      role="tab"
                      aria-controls="Creative"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <span className="tab_hss">
                        <span>Database</span>
                      </span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="Responsive-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Responsive"
                      type="button"
                      role="tab"
                      aria-controls="Responsive"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <span className="tab_hss">
                        <span>Cloud Storage</span>
                      </span>
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent2">
                  <div
                    className="tab-pane fade active show"
                    id="web"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="container-lg pt-mt-5 pt-2 container-fliud">
                      <div className="row pt-mt-5 pt-2">
                        <div className="hlth-tab-content frontend">
                          {" "}
                          <div className="hlth-tech-section">
                            {" "}
                            <h3>Programming Language</h3>
                            <div className="hlth-tech-skills">
                              <div className="hlth-tech-skill">
                                <img
                                  alt="JavaScript"
                                  className="lazyloaded"
                                  decoding="async"
                                  src="https://omsoftsolution.com/assets/img/jsm.svg"
                                  loading="lazy"
                                />{" "}
                                <p>Javascript</p>{" "}
                              </div>{" "}
                              <div className="hlth-tech-skill">
                                <img
                                  alt="HTML"
                                  decoding="async"
                                  id="MjMzNToxMjI=-1"
                                  src="https://omsoftsolution.com/assets/img/htmlm.svg"
                                  loading="lazy"
                                />{" "}
                                <p>HTML</p>{" "}
                              </div>{" "}
                              <div className="hlth-tech-skill">
                                <img
                                  alt="CSS"
                                  className="lazyloaded"
                                  decoding="async"
                                  id="MjMzOToxMjE=-1"
                                  src="https://omsoftsolution.com/assets/img/cssm.svg"
                                  loading="lazy"
                                />{" "}
                                <p>CSS</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="TypeScript"
                                  className="lazyloaded"
                                  decoding="async"
                                  id="MjM0MzoxMjg=-1"
                                  src="https://omsoftsolution.com/assets/img/tsm.svg"
                                  loading="lazy"
                                />{" "}
                                <p>TypeScript</p>{" "}
                              </div>
                            </div>
                          </div>
                          <div className="hlth-tech-section">
                            <h3>Frameworks</h3>
                            <div className="hlth-tech-skills">
                              <div className="hlth-tech-skill">
                                <img
                                  alt="React"
                                  className="lazyloaded"
                                  decoding="async"
                                  id="MjM1MjoxMjM=-1"
                                  src="https://omsoftsolution.com/assets/img/Group-18.svg"
                                  loading="lazy"
                                />{" "}
                                <p>React</p>{" "}
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Vue"
                                  className="lazyloaded"
                                  decoding="async"
                                  id="MjM1NjoxMjE=-1"
                                  src="https://omsoftsolution.com/assets/img/Group-19.svg"
                                  loading="lazy"
                                />{" "}
                                <p>Vue</p>{" "}
                              </div>{" "}
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Angular"
                                  decoding="async"
                                  id="MjM2MDoxMjU=-1"
                                  src="https://omsoftsolution.com/assets/img/Group-20.svg"
                                  loading="lazy"
                                />{" "}
                                <p>Angular</p>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="Planning"
                    role="tabpanel"
                    aria-labelledby="Planning-tab"
                  >
                    <div className="container-lg pt-mt-5 pt-2 container">
                      <div className="row pt-mt-5 pt-2">
                        <div className="hlth-tab-content frontend">
                          {" "}
                          <div className="hlth-tech-section">
                            {" "}
                            <h3>Programming Language</h3>
                            <div className="hlth-tech-skills">
                              <div className="hlth-tech-skill">
                                <img
                                  alt="JavaScript"
                                  className="lazyloaded"
                                  decoding="async"
                                  src="https://omsoftsolution.com/assets/img/php.svg"
                                />{" "}
                                <p>PHP</p>{" "}
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Python"
                                  src="https://omsoftsolution.com/assets/img/python.svg"
                                />{" "}
                                <p>Python</p>{" "}
                              </div>{" "}
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Ruby"
                                  src="https://omsoftsolution.com/assets/img/ruby.svg"
                                />{" "}
                                <p>Ruby</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Javascript"
                                  src="https://omsoftsolution.com/assets/img/javascript.svg"
                                />{" "}
                                <p>Javascript</p>{" "}
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="JAVA"
                                  src="https://omsoftsolution.com/assets/img/java.svg"
                                />{" "}
                                <p>JAVA</p>{" "}
                              </div>
                            </div>
                          </div>
                          <div className="hlth-tech-section">
                            <h3>Frameworks</h3>
                            <div className="hlth-tech-skills">
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Laravel"
                                  src="https://omsoftsolution.com/assets/img/laravel.svg"
                                />{" "}
                                <p>Laravel</p>{" "}
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="CakePHP"
                                  src="https://omsoftsolution.com/assets/img/cakephp.svg"
                                />{" "}
                                <p>CakePHP</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Django"
                                  src="https://omsoftsolution.com/assets/img/django.svg"
                                />{" "}
                                <p>Django</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Flask"
                                  src="https://omsoftsolution.com/assets/img/flask.svg"
                                />{" "}
                                <p>Flask</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Node.Js"
                                  src="https://omsoftsolution.com/assets/img/nodejs.svg"
                                />{" "}
                                <p>Node.Js</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="Creative"
                    role="tabpanel"
                    aria-labelledby="Creative-tab"
                  >
                    <div className="container-lg pt-mt-5 pt-2 container">
                      <div className="row pt-mt-5 pt-2">
                        <div className="hlth-tab-content frontend">
                          {" "}
                          <div className="hlth-tech-section">
                            {" "}
                            <h3>Database</h3>
                            <div className="hlth-tech-skills">
                              <div className="hlth-tech-skill">
                                <img
                                  alt="JavaScript"
                                  src="https://omsoftsolution.com/assets/img/postsql.svg"
                                />{" "}
                                <p>PostgreSQL</p>{" "}
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="mysql"
                                  src="https://omsoftsolution.com/assets/img/mysql.svg"
                                />{" "}
                                <p>mysql</p>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="Responsive"
                    role="tabpanel"
                    aria-labelledby="Responsive-tab"
                  >
                    <div className="container-lg pt-mt-5 pt-2 container">
                      <div className="row pt-mt-5 pt-2">
                        <div className="hlth-tab-content frontend">
                          {" "}
                          <div className="hlth-tech-section">
                            <h3>Cloud Storage</h3>
                            <div className="hlth-tech-skills">
                              <div className="hlth-tech-skill">
                                <img
                                  alt="AWS"
                                  src="https://omsoftsolution.com/assets/img/aws.svg"
                                />{" "}
                                <p>AWS</p>{" "}
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Azure"
                                  src="https://omsoftsolution.com/assets/img/azure.svg"
                                />{" "}
                                <p>Azure</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Google Cloud Platform"
                                  src="https://omsoftsolution.com/assets/img/google.svg"
                                />{" "}
                                <p>Google Cloud Platform</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* client */}
        <div className="clinet_bg">
          <div className="container-fluid px-5">
            <div className="row g-5">
              <div className="col-lg-6 col-sm-12">
                <div className='sub_title mb-4 pb-3'>
                  <h3>Our Precious Clients</h3>
                </div>
                <div className="brands-grid">
                  {/* <!-- GeM --> */}
                  <div className="brand-card">
                    <div className="number-badge">01</div>
                    <div className="circle-outer">
                      <div className="logo-container">
                        <img src={client1} alt="client" className="w-100" />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Government of India --> */}
                  <div className="brand-card">
                    <div className="number-badge">02</div>
                    <div className="circle-outer">
                      <div className="logo-container">
                        <img src={client2} alt="client" className="w-100" />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Bark --> */}
                  <div className="brand-card">
                    <div className="number-badge">03</div>
                    <div className="circle-outer">
                      <div className="logo-container">
                        <img src={client3} alt="client" className="w-100" />
                      </div>
                    </div>
                  </div>


                  <div className="brand-card">
                    <div className="number-badge">04</div>
                    <div className="circle-outer">
                      <div className="logo-container">
                        <img src={client4} alt="client" className="w-100" />
                      </div>
                    </div>
                  </div>


                  <div className="brand-card">
                    <div className="number-badge">05</div>
                    <div className="circle-outer">
                      <div className="logo-container">
                        <img src={client5} alt="client" className="w-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className='sub_title mb-4 pb-3'>
                  <h3>Trusted By</h3>
                </div>

                <div className="logos">
                  <div className="logo_track trust_client">
                    <img src={Trusted_logo1} />
                    <img src={Trusted_logo2} />
                    <img src={Trusted_logo3} />
                    <img src={Trusted_logo4} />
                    <img src={Trusted_logo5} />
                    <img src={Trusted_logo6} />

                    {/* duplicate for seamless loop */}
                    <img src={Trusted_logo1} />
                    <img src={Trusted_logo2} />
                    <img src={Trusted_logo3} />
                    <img src={Trusted_logo4} />
                    <img src={Trusted_logo5} />
                    <img src={Trusted_logo6} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid p-5">
          <div className='sub_title mb-4'>
            <h3>Our Precious Clients</h3>
          </div>
          <div className="logos">
            <div className="logo_track client_logo_as">
            <img src={cl1} alt="client logo" className="w-100"/>
            <img src={cl2} alt="client logo" className="w-100"/>
            <img src={cl3} alt="client logo" className="w-100"/>
            <img src={cl4} alt="client logo" className="w-100"/>
            <img src={cl5} alt="client logo" className="w-100"/>
            <img src={cl6} alt="client logo" className="w-100"/>
            <img src={cl7} alt="client logo" className="w-100"/>
            <img src={cl8} alt="client logo" className="w-100"/>
            <img src={cl9} alt="client logo" className="w-100"/>
            <img src={cl10} alt="client logo" className="w-100"/>
            <img src={cl11} alt="client logo" className="w-100"/>
            <img src={cl12} alt="client logo" className="w-100"/>
            <img src={cl13} alt="client logo" className="w-100"/>
            <img src={cl14} alt="client logo" className="w-100"/>
            <img src={cl15} alt="client logo" className="w-100"/>

            {/* duplicate for seamless loop */}
            <img src={cl1} alt="client logo" className="w-100"/>
            <img src={cl2} alt="client logo" className="w-100"/>
            <img src={cl3} alt="client logo" className="w-100"/>
            <img src={cl4} alt="client logo" className="w-100"/>
            <img src={cl5} alt="client logo" className="w-100"/>
            <img src={cl6} alt="client logo" className="w-100"/>
            <img src={cl7} alt="client logo" className="w-100"/>
            <img src={cl8} alt="client logo" className="w-100"/>
            <img src={cl9} alt="client logo" className="w-100"/>
            <img src={cl10} alt="client logo" className="w-100"/>
            <img src={cl11} alt="client logo" className="w-100"/>
            <img src={cl12} alt="client logo" className="w-100"/>
            <img src={cl13} alt="client logo" className="w-100"/>
            <img src={cl14} alt="client logo" className="w-100"/>
            <img src={cl15} alt="client logo" className="w-100"/>
            </div>
          </div>
        </div>
        {/* Testimonials section */}
        <Testimonials />
        {/* blog section */}
        <Blog />


      </main>
    </>
  )
}
export default Home;