import React, { useEffect } from "react";
import client1 from "../assets/images/cliente.png";

const Testimonials = () => {

  useEffect(() => {
    // Vanilla JS se select kiya element
    jQuery(document).ready(function($) {
      // Team Slider - shows 4 items
      $('.settings').slick({
          infinite: true,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    })

  
  }, []); // Empty dependency => run once on mount


  return (
    <div className="background_image px-lg-5 px-sm-2">
      <div className="container-fluid">
        <div className='sub_title'>
          <span>What Our Clients Say</span>
          <h3>Trusted by Businesses for Reliable IT Solutions</h3>
          <p>Our clients trust us to deliver high-quality IT services that drive efficiency, innovation, and business success. Here’s what they have to say about working with our expert team and technology-driven solutions.</p>
        </div>

        <div className="settings">

          <div class="testimonial-card">
            <div class="item">
              <div class="row">
                <div class="col-lg-3">
                  <div class="thumb">
                    <img decoding="async" src={client1} alt="Thumb" />
                    <i class="fas fa-quote-right"></i>
                  </div>
                </div>
                <div class="info col-lg-9">
                  <p>Working with Divrit Technologies was a great experience. Their commitment to quality, transparency, and performance truly sets them apart in the IT industry.</p>
                  <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div class="provider">
                    <h4>Aman Gupta</h4>
                    <span>Business Owner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="item">
              <div class="row">
                <div class="col-lg-3">
                  <div class="thumb">
                    <img decoding="async" src={client1} alt="Thumb" />
                    <i class="fas fa-quote-right"></i>
                  </div>
                </div>
                <div class="info col-lg-9">
                  <p>Great support! Thank you for your prompt and effective service. Your friendly and professional support staff exceeded my expectations!</p>
                  <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div class="provider">
                    <h4>William Hoy</h4>
                    <span>Head of IT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="item">
              <div class="row">
                <div class="col-lg-3">
                  <div class="thumb">
                    <img decoding="async" src={client1} alt="Thumb" />
                    <i class="fas fa-quote-right"></i>
                  </div>
                </div>
                <div class="info col-lg-9">
                  <p>Wow! Very nice team. I'm so happy with your service. Great team! You managed to exceed my expectations. You guys are very efficient and I will refer more people to your company!</p>
                  <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div class="provider">
                    <h4>Imaan Butt</h4>
                    <span>Head of IT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="item">
              <div class="row">
                <div class="col-lg-3">
                  <div class="thumb">
                    <img decoding="async" src={client1} alt="Thumb" />
                    <i class="fas fa-quote-right"></i>
                  </div>
                </div>
                <div class="info col-lg-9">
                  <p>Superb customer service and an amazing product! I highly recommend them for their excellent professionalism and dedication.</p>
                  <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div class="provider">
                    <h4>Ayesha Khan</h4>
                    <span>Operations Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
