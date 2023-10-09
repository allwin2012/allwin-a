import React from 'react';
import './HeroBanner.css';
import sliderImg from '../../Assets/slider-img.jpg';
import leftArrowBlack from '../../Assets/left-arrow-black.png'; // Adjust the path
import leftArrow from '../../Assets/left-arrow.png'; // Adjust the path



function HeroBanner() {
  return (
    <section className="slider_section position-relative">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slider_item-box layout_padding2">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img-box">
                      <div>
                        <img src={sliderImg} alt="" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail-box">
                      <div>
                        <h1>
                          IWAN <br />
                          Maintenance <br />
                          <span>
                            Service
                          </span>
                        </h1>
                        <p>
                          Our technical team would provide all support to maintain electrical and plumbing maintenance at site. We have a team of qualified technicians in the respective field/Job with professional background and experience.
                          Daily repairs and maintenance of property are conducted to keep the premises attractive and safe to live and work. This includes both preventive maintenance and on-call services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat carousel items as needed */}
          <div className="carousel-item active">
            <div className="slider_item-box layout_padding2">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img-box">
                      <div>
                        <img src={sliderImg} alt="" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail-box">
                      <div>
                        <h1>
                          IWAN <br />
                          Maintenance <br />
                          <span>
                            Service
                          </span>
                        </h1>
                        <p>
                          Our technical team would provide all support to maintain electrical and plumbing maintenance at site. We have a team of qualified technicians in the respective field/Job with professional background and experience.
                          Daily repairs and maintenance of property are conducted to keep the premises attractive and safe to live and work. This includes both preventive maintenance and on-call services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      <div className="container">
        <div className="slider_nav-box">
          <div className="btn-box">
            <a href="">
              Read More
            </a>
            <hr />
          </div>
          <div className="custom_carousel-control">
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
