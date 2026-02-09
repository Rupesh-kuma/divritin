import { useEffect } from "react";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";
import about1 from '../assets/images/about_image.webp';
import ServicesSection from "../components/ServicesSection";
import client1 from "../assets/images/c1.webp";

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

        <ServicesSection/>
        {/* about section */}
        <div style={{ background: '#F5F5F5', padding: "4%" }}>
          <div className="container">
            <div className="row">
              <div className="col-6">
              <div className='sub_title'>
                        <span className="justify-content-start">About us</span>
                        <h3>Empowering Your Digital Journey for Business</h3>
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
                  <div className="col-sm-8">
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
                  <div className="col-sm-4">
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
                  <div className="col-sm-8">
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
                  <div className="col-sm-4">
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

              <div className="col-6">
                <img src={about1} alt="about" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
        {/* tecnology */}
        <section className="hed_text inder_Sec">
          <div className="container-lg container">
          <div className='sub_title'>
                    <span>Our services</span>
                    <h3>Read our latest blog</h3>
                    <p>Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each client.</p>
                </div>
            <div className="row">
              <div className="tabs_box mt-5">
                <ul className="nav nav-tabs new_mobiletab" id="myTab" role="tablist">
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
        <div class="container">
        <div class="brands-grid">
            {/* <!-- GeM --> */}
            <div class="brand-card">
                <div class="number-badge">01</div>
                <div class="circle-outer">
                    <div class="logo-container">
                            <img src={client1} alt="client" className="w-100" />
                    </div>
                </div>
            </div>

            {/* <!-- Government of India --> */}
            <div class="brand-card">
                <div class="number-badge">02</div>
                <div class="circle-outer">
                    <div class="logo-container">
                        <svg viewBox="0 0 80 80" fill="none">
                            <circle cx="40" cy="40" r="35" fill="#138808"/>
                            <circle cx="40" cy="40" r="30" fill="white"/>
                            <circle cx="40" cy="40" r="25" fill="#000080"/>
                            <circle cx="40" cy="40" r="5" fill="#138808"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* <!-- Bark --> */}
            <div class="brand-card">
                <div class="number-badge">03</div>
                <div class="circle-outer">
                    <div class="logo-container">
                        <svg viewBox="0 0 100 40" fill="none">
                            <text x="5" y="28" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#333">≤bark</text>
                        </svg>
                    </div>
                </div>
            </div>

            
            <div class="brand-card">
                <div class="number-badge">04</div>
                <div class="circle-outer">
                    <div class="logo-container">
                        <svg viewBox="0 0 120 40" fill="none">
                            <text x="10" y="28" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#333">Clutch</text>
                        </svg>
                    </div>
                </div>
            </div>

            
            <div class="brand-card">
                <div class="number-badge">05</div>
                <div class="circle-outer">
                    <div class="logo-container">
                        <svg viewBox="0 0 80 80" fill="none">
                            <path d="M40 20C48.84 20 56 27.16 56 36C56 44.84 48.84 52 40 52C31.16 52 24 44.84 24 36C24 27.16 31.16 20 40 20Z" fill="#4285F4"/>
                            <path d="M40 28C44.42 28 48 31.58 48 36C48 40.42 44.42 44 40 44C35.58 44 32 40.42 32 36C32 31.58 35.58 28 40 28Z" fill="white"/>
                            <text x="32" y="40" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#4285F4">G</text>
                        </svg>
                    </div>
                </div>
            </div>

            
            <div class="brand-card">
                <div class="number-badge">06</div>
                <div class="circle-outer">
                    <div class="logo-container">
                        <svg viewBox="0 0 80 80" fill="none">
                            <rect x="20" y="20" width="18" height="18" fill="#F25022"/>
                            <rect x="42" y="20" width="18" height="18" fill="#7FBA00"/>
                            <rect x="20" y="42" width="18" height="18" fill="#00A4EF"/>
                            <rect x="42" y="42" width="18" height="18" fill="#FFB900"/>
                        </svg>
                    </div>
                </div>
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