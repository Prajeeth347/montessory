import FrameComponent16 from "./FrameComponent16";
import FrameComponent15 from "./FrameComponent15";
import PropTypes from "prop-types";
import "./MacBookAir.css";

const MacBookAir = ({ className = "" }) => {
  return (
    <div className={`macbook-air-2 ${className}`}>
      <div className="strengths-container">
        <div className="content">
          <div className="inner-content">
            <div className="heading-container">
              <div className="heading">
                <div className="our-strengths-statistics-wrapper">
                  <b className="our-strengths">{`OUR STRENGTHS & STATISTICS`}</b>
                </div>
                <div className="description">
                  <h1 className="the-best-choice">
                    The Best Choice For Your Child
                  </h1>
                  <div className="montessori-prime-school25">
                    Montessori Prime School aims primarily at the education of
                    young children without distinction of caste and creed
                    through the play way and other modern methods of imparting
                    education.
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <FrameComponent16 />
              <div className="view-testimonials">
                <div className="get-into-details-container">
                  <span className="get-into-details">
                    Get into details now?
                  </span>
                  <span> </span>
                  <a
                    className="view-all-testimonials"
                    href="https://www.montessorijnprime.com/montessori/prime/about/testimonials"
                    target="_blank"
                  >
                    <span>
                      <span className="view-all-testimonials1">
                        View All Testimonials
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="statistics-container-parent">
          <div className="statistics-container">
            <div className="statistics-items">
              <div className="placeholder-parent">
                <div className="placeholder1">
                  <div className="placeholder2">0</div>
                </div>
                <div className="statistics-data">
                  <img
                    className="funfacts-shapes74a2ab2763dcee-icon1"
                    loading="lazy"
                    alt=""
                    src="/funfactsshapes74a2ab2763dcee20-1@2x.png"
                  />
                  <div className="finished-sessions">FINISHED SESSIONS</div>
                </div>
              </div>
              <div className="placeholder-parent">
                <div className="placeholder1">
                  <div className="placeholder2">0</div>
                </div>
                <div className="statistics-data">
                  <img
                    className="funfacts-shapes74a2ab2763dcee-icon1"
                    alt=""
                    src="/funfactsshapes74a2ab2763dcee20-1@2x.png"
                  />
                  <div className="finished-sessions">ONLINE INSTRUCTORS</div>
                </div>
              </div>
            </div>
          </div>
          <div className="statistics-items1">
            <FrameComponent15
              propWidth="unset"
              propPadding="0rem var(--padding-40xl) 0rem var(--padding-35xl)"
              propFlex="unset"
              prop="343"
              propFlex1="unset"
              propDisplay="inline-block"
              propMinWidth="5.875rem"
              funfactsShapesaabdcee="/funfactsshapes74a2ab2763dcee20-1@2x.png"
              propLeft="-2.312rem"
              sATISFACTIONRATE="ENROLLED LEARNERS"
            />
            <FrameComponent15
              prop="95%"
              funfactsShapesaabdcee="/funfactsshapes74a2ab2763dcee20-1@2x.png"
              sATISFACTIONRATE="SATISFACTION RATE"
            />
          </div>
        </div>
      </div>
      <div className="shape-container">
        <div className="shape-row">
          <div className="shape-column">
            <img className="shape9-1-icon" alt="" src="/shape9-1@2x.png" />
          </div>
          <div className="shape">
            <img
              className="shape2-1-icon"
              loading="lazy"
              alt=""
              src="/shape2-1@2x.png"
            />
            <img className="image-25-icon" alt="" src="/image-25@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

MacBookAir.propTypes = {
  className: PropTypes.string,
};

export default MacBookAir;
