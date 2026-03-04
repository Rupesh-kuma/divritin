import { useEffect } from "react";
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";
import about1 from '/images/about_image.webp';
import ServicesSection from "../components/ServicesSection";
import accurect from "/images/accurect.png";
import client2 from "/images/logo_client.webp";
import client3 from "/images/client_logo.webp";
import client4 from "/images/client_logo_3.webp";
import client5 from "/images/client_logo_4.webp";
import Trusted_logo1 from "/images/Trusted_logo.webp";
import Trusted_logo2 from "/images/Trusted_logo_2.webp";
import Trusted_logo3 from "/images/b4.webp";
import Trusted_logo4 from "/images/b5.webp";
import Trusted_logo5 from "/images/b6.webp";
import Trusted_logo6 from "/images/b7.webp";
import cl1 from "/images/accurect.png";
import cl2 from "/images/cl2.webp";
import cl3 from "/images/cl3.webp";
import cl4 from "/images/cl4.webp";
import cl5 from "/images/cl5.webp";
import cl6 from "/images/cl6.webp";
import cl7 from "/images/cl7.webp";
import cl8 from "/images/cl8.webp";
import cl9 from "/images/cl9.webp";
import cl10 from "/images/cl10.webp";
import cl11 from "/images/cl11.webp";
import cl12 from "/images/cl12.webp";
import cl13 from "/images/cl13.webp";
import cl14 from "/images/cl14.webp";
import cl15 from "/images/cl15.webp";
import jsm from "/images/jsm.svg";
import htmlm from "/images/htmlm.svg";
import cssm from "/images/cssm.svg";
import tsm from "/images/tsm.svg";
import Group18 from "/images/Group-18.svg";
import Group19 from "/images/Group-19.svg";
import Group20 from "/images/Group-20.svg";
import php from "/images/php.svg";
import python from "/images/python.svg";
import ruby from "/images/ruby.svg";
import javascript from "/images/javascript.svg";
import java from "/images/java.svg";
import laravel from "/images/laravel.svg";
import cakephp from "/images/cakephp.svg";
import django from "/images/django.svg";
import flask from "/images/flask.svg";
import nodejs from "/images/nodejs.svg";
import postsql from "/images/postsql.svg";
import mysql from "/images/mysql.svg";
import bootstrap from "/images/bootstrap.webp";
import wordpress from "/images/wordpress.webp";
import TailwindCss from "/images/TailwindCss.webp";
import c_longuage from "/images/c_longuage.webp";
import Express from "/images/Express.webp";
import net_core from "/images/net_core.webp";
import MongoDB from "/images/MongoDB.webp";
import Firebase from "/images/Firebase.webp";
import Microsoft from "/images/Microsoft.webp";
import Redis from "/images/Redis.webp";
import Relational from "/images/Relational.webp";
import NoSQL_Databases from "/images/NoSQL_Databases.webp";
import Cloud_Databases from "/images/Cloud_Databases.webp";
import DropboxBusiness from "/images/DropboxBusiness.webp";
import OneDriveCloudStorage from "/images/OneDriveCloudStorage.webp";
import PrivateCloudStorageSolutions from "/images/PrivateCloudStorageSolutions.webp";
import ObjectStorage from "/images/ObjectStorage.webp";
import ObjectStorages from "/images/ObjectStorages.webp";
import ScalableCloudDatabases from "/images/ScalableCloudDatabases.webp";
import EncryptedSecureStorage from "/images/EncryptedSecureStorage.webp";
import aws from "/images/aws.svg";
import azure from "/images/azure.svg";
import google from "/images/google.svg";
import WorkProcess from "../components/WorkProcess";
import clinetLogo from "/src/datas/ourClient.json";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const half = Math.ceil(clinetLogo.logos.length / 2);

  const firstRow = clinetLogo.logos.slice(0, half);
  const secondRow = clinetLogo.logos.slice(half);
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



    // Use karna:


  }, []);
  return (
    <>
      <Helmet>

        <title>
          Divrit Technologies Pvt Ltd | Cloud Services, Resource Augmentation & Tally Implementation
        </title>

        <meta name="description" content="Divrit Technologies Pvt Ltd provides cloud services, resource augmentation, web development and Tally implementation to help businesses scale with secure and modern IT solutions." />

        <meta name="keywords" content="Divrit Technologies, Cloud Services, Resource Augmentation, IT Solutions Company, Tally Implementation, Software Development Company" />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Divrit Technologies Pvt Ltd - IT Solutions & Cloud Services" />

        <meta property="og:description" content="Reliable cloud services, resource augmentation and Tally implementation for modern businesses." />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://divritin.com/" />

        <meta property="og:image" content="/images/work_image.png" />

        <link rel="canonical" href="https://divritin.com/" />

      </Helmet>
      <main>
        {/* hero section start */}
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
                <a href="/Contact-Us" className="btn banner_btn">
                  Get Connect with Our Experts
                  {/* <span className="btn-arrow">→</span> */}
                </a>
                {/* <button className="btn btn-secondary">
                  LEARN MORE
                  <span className="btn-arrow">→</span>
                </button> */}
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
        {/* hero section end */}

        <ServicesSection />

        {/* about section */}
        <div style={{ background: '#F5F5F5', }} className="container_padd_Res">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className='sub_title'>
                  <span className="justify-content-lg-start">Who We Are :</span>
                  <h3 className="justify-content-lg-start align-iteams-lg-start">Empowering Your Digital Journey for Business</h3>
                  <p className="abuot_p">
                    <strong>Divrit Technologies Pvt. Ltd.</strong> is an IT company that provides a one-stop solution for all IT services with its skilled team, best practices, and cutting-edge technologies. We deliver tailored solutions for our IT partners. Divrit Technologies is a sister company of Katyayni Technologies Pvt. Ltd., founded in 2017.
                  </p>
                  <p className="abuot_p">We are committed to providing cost-effective, high-quality solutions for our partners. Our experienced team strives to help increase business revenue and clientele through skilled work and best practices. Trust us, and let us help you achieve your goals.</p>
                </div>

                <div className="row box_rox">
                  {/* Client Retentions - 95% */}
                  <div className="col-8">
                    <div className="blurb_text_why">
                      {/* <div className="blurb_icon">
                        <i className="fa-solid fa-check" />
                      </div> */}
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
                    <div className="why-ring">
                      <span className="why-ring-inner">95%</span>
                    </div>
                  </div>

                  {/* Happy Clients - 100% */}
                  <div className="col-8">
                    <div className="blurb_text_why">
                      {/* <div className="blurb_icon">
                        <i className="fa-solid fa-check" />
                      </div> */}
                      <div className="blurb_text">
                        <h4>Happy Clients</h4>
                        <p>Discover why our clients trust us with their web design needs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="why-ring why-ring--b">
                      <span className="why-ring-inner">100%</span>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12">
                <img src={about1} alt="about" style={{ width: '100%' }} />
              </div>
            </div>

            <div className="stats-wrapper">
              <div className="row g-4">
                {/* Experience */}
                <div className="col-lg-3 col-md-6">
                  <div className="stat-box">
                    <div className="stat-stamp">EST.</div>
                    <div className="stat-number" data-number="8+">
                      8+
                    </div>
                    <div className="stat-label">Experience</div>
                  </div>
                </div>
                {/* Clients */}
                <div className="col-lg-3 col-md-6">
                  <div className="stat-box">
                    <div className="stat-stamp">TOP</div>
                    <div className="stat-number" data-number="50+">
                      50+
                    </div>
                    <div className="stat-label">Clients</div>
                  </div>
                </div>
                {/* Projects */}
                <div className="col-lg-3 col-md-6">
                  <div className="stat-box">
                    <div className="stat-stamp">PRO</div>
                    <div className="stat-number" data-number="121+">
                      121+
                    </div>
                    <div className="stat-label">Projects</div>
                  </div>
                </div>
                {/* Awards */}
                <div className="col-lg-3 col-md-6">
                  <div className="stat-box">
                    <div className="stat-stamp">WIN</div>
                    <div className="stat-number" data-number="25+">
                      25+
                    </div>
                    <div className="stat-label">Awards</div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        {/* tecnology */}
        <section className="hed_text inder_Sec container_padd_Res">
          <div className="container-fluid">
            <div className='sub_title'>
              <span>Our Technology Expertise</span>
              <h3>Building Powerful Digital Solutions with Modern Tech Stack</h3>
              <p>We leverage industry-leading technologies, programming languages, and frameworks to create high-performance, secure, and scalable digital solutions. From intuitive frontends to robust backend systems and cloud infrastructure, our expertise ensures seamless development and long-term success.</p>
            </div>
            <div className="row">
              <div className="tabs_box mt-4">
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
                          <div className="hlth-tech-section">
                            <h3>Programming Language</h3>
                            <div className="hlth-tech-skills">
                              <div className="hlth-tech-skill">
                                <img
                                  alt="JavaScript"
                                  className="lazyloaded"
                                  decoding="async"
                                  src={jsm}
                                  loading="lazy"
                                />
                                <p>Javascript</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="HTML"
                                  decoding="async"
                                  id="MjMzNToxMjI=-1"
                                  src={htmlm}
                                  loading="lazy"
                                />
                                <p>HTML</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="CSS"
                                  className="lazyloaded"
                                  decoding="async"
                                  id="MjMzOToxMjE=-1"
                                  src={cssm}
                                  loading="lazy"
                                />
                                <p>CSS</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="TypeScript"
                                  className="lazyloaded"
                                  decoding="async"
                                  id="MjM0MzoxMjg=-1"
                                  src={tsm}
                                  loading="lazy"
                                />
                                <p>TypeScript</p>
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
                                  src={Group18}
                                  loading="lazy"
                                />
                                <p>React</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Vue"
                                  className="lazyloaded"
                                  decoding="async"
                                  id="MjM1NjoxMjE=-1"
                                  src={Group19}
                                  loading="lazy"
                                />
                                <p>Vue</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Angular"
                                  decoding="async"
                                  id="MjM2MDoxMjU=-1"
                                  src={Group20}
                                  loading="lazy"
                                />
                                <p>Angular</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Angular"
                                  decoding="async"
                                  id="MjM2MDoxMjU=-1"
                                  src={bootstrap}
                                  loading="lazy"
                                />
                                <p>Bootstrap</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Angular"
                                  decoding="async"
                                  id="MjM2MDoxMjU=-1"
                                  src={TailwindCss}
                                  loading="lazy"
                                />
                                <p>Tailwind CSS</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Angular"
                                  decoding="async"
                                  id="MjM2MDoxMjU=-1"
                                  src={wordpress}
                                  loading="lazy"
                                />
                                <p>WordPress</p>
                              </div>
                            </div>
                          </div>
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
                          <div className="hlth-tech-section">
                            <h3>Programming Language</h3>
                            <div className="hlth-tech-skills">
                              <div className="hlth-tech-skill">
                                <img
                                  alt="JavaScript"
                                  className="lazyloaded"
                                  decoding="async"
                                  src={php}
                                />
                                <p>PHP</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Python"
                                  src={python}
                                />
                                <p>Python</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Ruby"
                                  src={ruby}
                                />
                                <p>Ruby</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Javascript"
                                  src={javascript}
                                />
                                <p>Javascript</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="JAVA"
                                  src={java}
                                />
                                <p>JAVA</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="c#"
                                  src={c_longuage}
                                />
                                <p>C#</p>
                              </div>
                            </div>
                          </div>
                          <div className="hlth-tech-section">
                            <h3>Frameworks</h3>
                            <div className="hlth-tech-skills">
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Laravel"
                                  src={laravel}
                                />
                                <p>Laravel</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="CakePHP"
                                  src={cakephp}
                                />
                                <p>CakePHP</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Django"
                                  src={django}
                                />
                                <p>Django</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Flask"
                                  src={flask}
                                />
                                <p>Flask</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Node.Js"
                                  src={nodejs}
                                />
                                <p>Node.Js</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Express.js"
                                  src={Express}
                                />
                                <p>Express.js</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt=".NET Core"
                                  src={net_core}
                                />
                                <p>.NET Core</p>
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
                          <div className="hlth-tech-section">
                            <h3>Database</h3>
                            <div className="hlth-tech-skills">
                              <div className="hlth-tech-skill">
                                <img
                                  alt="MySQL"
                                  src={mysql}
                                />
                                <p>MySQL</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="JavaScript"
                                  src={postsql}
                                />
                                <p>PostgreSQL</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="MongoDB"
                                  src={MongoDB}
                                />
                                <p>MongoDB</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Firebase"
                                  src={Firebase}
                                />
                                <p>Firebase</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Microsoft SQL Server"
                                  src={Microsoft}
                                />
                                <p>Microsoft SQL Server</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Redis"
                                  src={Redis}
                                />
                                <p>Redis</p>
                              </div>
                            </div>
                          </div>
                          <div className="hlth-tech-section">
                            <h3>Data Storage & Management Systems</h3>
                            <div className="hlth-tech-skills">
                              <div className="hlth-tech-skill">
                                <img
                                  alt="MySQL"
                                  src={Relational}
                                />
                                <p>Relational Databases (SQL)</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="NoSQL Databases"
                                  src={NoSQL_Databases}
                                />
                                <p>NoSQL Databases</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Cloud Databases"
                                  src={Cloud_Databases}
                                />
                                <p>Cloud Databases</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Real-Time Databases"
                                  src={Firebase}
                                />
                                <p>Real-Time Databases</p>
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
                          <div className="hlth-tech-section">
                            <h3>Cloud Storage</h3>
                            <div className="hlth-tech-skills">
                              <div className="hlth-tech-skill">
                                <img
                                  alt="AWS"
                                  src={aws}
                                />
                                <p>AWS</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Azure"
                                  src={azure}
                                />
                                <p>Azure</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Google Cloud Platform"
                                  src={google}
                                />
                                <p>Google Cloud Platform</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Dropbox Business"
                                  src={DropboxBusiness}
                                />
                                <p>Dropbox Business</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="OneDrive Cloud Storage"
                                  src={OneDriveCloudStorage}
                                />
                                <p>OneDrive Cloud Storage</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Private Cloud Storage Solutions"
                                  src={PrivateCloudStorageSolutions}
                                />
                                <p>Private Cloud Storage Solutions</p>
                              </div>
                            </div>

                          </div>
                          <div className="hlth-tech-section">
                            <h3>Cloud-Based Data Management</h3>
                            <div className="hlth-tech-skills">
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Object Storage"
                                  src={ObjectStorage}
                                />
                                <p>Object Storage</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Backup & Disaster Recovery Storage"
                                  src={ObjectStorages}
                                />
                                <p>Backup & Disaster Recovery Storage</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Scalable Cloud Databases"
                                  src={ScalableCloudDatabases}
                                />
                                <p>Scalable Cloud Databases</p>
                              </div>
                              <div className="hlth-tech-skill">
                                <img
                                  alt="Encrypted Secure Storage"
                                  src={EncryptedSecureStorage}
                                />
                                <p>Encrypted Secure Storage</p>
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

        <WorkProcess />
        {/* client */}

        <div className="container-fluid container_padd_Res">
          <div className='sub_title  pb-sm-0'>
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
              <img src={cl1} />

              {/* duplicate for seamless loop */}
              <img src={Trusted_logo1} />
              <img src={Trusted_logo2} />
              <img src={Trusted_logo3} />
              <img src={Trusted_logo4} />
              <img src={Trusted_logo5} />
              <img src={Trusted_logo6} />
              <img src={cl1} />
            </div>
          </div>
          <div className='sub_title  preciour_client'>
            <h3>Our Precious Clients</h3>
          </div>
          <div className="logos">

            {/* FIRST ROW */}
            <div className="logo_track client_logo_as mb-4">
              {firstRow.map((item, index) => (
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

            {/* SECOND ROW */}
            <div className="logo_track client_logo_as second_row">
              {secondRow.map((item, index) => (
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