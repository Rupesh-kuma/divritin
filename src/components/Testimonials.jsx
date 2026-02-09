import Slider from "react-slick";

const Testimonials = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="background_image">
    <div className="container">
      <div className='sub_title'>
        <span>Latest News</span>
        <h3>Read our latest blog</h3>
        <p>Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each client.</p>
      </div>

      <Slider {...settings}>

        <div class="testimonial-card">
          <div class="item">
            <div class="row">
              <div class="col-lg-4">
                <div class="thumb">
                  <img decoding="async" src="https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/03/1-2.jpg" alt="Thumb" className="w-100" />
                  <i class="fas fa-quote-right"></i>
                </div>
              </div>
              <div class="info col-lg-7">
                <p>
                  Excited main sixteen parties. direction has led immediate. Law gate her well bed life feet seen rent per instructions!                        </p>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="provider">
                  <h4>Ocean Babs</h4>
                  <span>Head of IT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="item">
            <div class="row">
              <div class="col-lg-4">
                <div class="thumb">
                  <img decoding="async" src="https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/03/1-2.jpg" alt="Thumb" className="w-100" />
                  <i class="fas fa-quote-right"></i>
                </div>
              </div>
              <div class="info col-lg-7">
                <p>
                  Excited main sixteen parties. direction has led immediate. Law gate her well bed life feet seen rent per instructions!                        </p>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="provider">
                  <h4>Ocean Babs</h4>
                  <span>Head of IT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="item">
            <div class="row">
              <div class="col-lg-4">
                <div class="thumb">
                  <img decoding="async" src="https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/03/1-2.jpg" alt="Thumb" className="w-100" />
                  <i class="fas fa-quote-right"></i>
                </div>
              </div>
              <div class="info col-lg-7">
                <p>
                  Excited main sixteen parties. direction has led immediate. Law gate her well bed life feet seen rent per instructions!                        </p>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="provider">
                  <h4>Ocean Babs</h4>
                  <span>Head of IT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="item">
            <div class="row">
              <div class="col-lg-4">
                <div class="thumb">
                  <img decoding="async" src="https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/03/1-2.jpg" alt="Thumb" className="w-100" />
                  <i class="fas fa-quote-right"></i>
                </div>
              </div>
              <div class="info col-lg-7">
                <p>
                  Excited main sixteen parties. direction has led immediate. Law gate her well bed life feet seen rent per instructions!                        </p>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="provider">
                  <h4>Ocean Babs</h4>
                  <span>Head of IT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Slider>
    </div>
    </div>
  );
};

export default Testimonials;
