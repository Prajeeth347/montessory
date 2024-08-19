import FrameComponent26 from "./FrameComponent26";
import QueryForm from "./QueryForm";
import PropTypes from "prop-types";
import "./FrameComponent25.css";

const FrameComponent25 = ({ className = "" }) => {
  return (
    <div className={`details-wrapper-parent ${className}`}>
      <div className="details-wrapper">
        <div className="details-content">
          <div className="details-content-inner">
            <div className="frame-parent96">
              <div className="contact-details-wrapper1">
                <b className="contact-details9">Contact Details</b>
              </div>
              <div className="get-in-touch-wrapper12">
                <h1 className="get-in-touch23">Get in touch</h1>
              </div>
              <div className="montessori-prime-school-aims-p-wrapper14">
                <div className="montessori-prime-school24">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school or sitting for examinations.
                </div>
              </div>
            </div>
          </div>
          <div className="instance-parent17">
            <div className="address-contact-labels-parent">
              <div className="address-contact-labels">
                <h3 className="our-address">Our Address</h3>
                <div className="frr5f3-bavupet-x20">
                  3FRR+5F3, Bavupet, X Road, Yellapur, Hanmakonda, Telangana
                  506371
                </div>
              </div>
              <img
                className="image-icon4"
                loading="lazy"
                alt=""
                src="/image1@2x.png"
              />
              <img className="image-icon5" alt="" src="/image-11@2x.png" />
            </div>
            <div className="address-contact-labels-parent">
              <div className="address-contact-labels">
                <h3 className="contact1">Contact</h3>
                <div className="frr5f3-bavupet-x20">
                  <p className="p2">
                    <a className="a13" href="tel:+917700043030" target="_blank">
                      <span className="span">+91 77000 43030</span>
                    </a>
                    , 
                    <a className="a13" href="tel:+917700053030" target="_blank">
                      <span className="span">+91 77000 53030</span>
                    </a>
                  </p>
                  <p className="p2">
                    <a
                      className="a13"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      <span className="span">info@montessorijnprime.com</span>
                    </a>
                  </p>
                </div>
              </div>
              <img className="image-icon4" alt="" src="/image1@2x.png" />
              <img className="image-icon5" alt="" src="/image-3@2x.png" />
            </div>
            <FrameComponent26 />
          </div>
        </div>
      </div>
      <QueryForm />
    </div>
  );
};

FrameComponent25.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent25;
