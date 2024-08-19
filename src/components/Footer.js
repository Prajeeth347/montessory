import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-school-page");
  }, [navigate]);

  const onGalleryTextClick = useCallback(() => {
    navigate("/gallery-page");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    navigate("/events-page");
  }, [navigate]);

  const onBlogsTextClick = useCallback(() => {
    navigate("/blogs-page");
  }, [navigate]);

  const onVirtualTourTextClick = useCallback(() => {
    navigate("/virtual-tour");
  }, [navigate]);

  const onPrivacyPolicyTextClick = useCallback(() => {
    navigate("/privacy-policy-page");
  }, [navigate]);

  return (
    <footer className={`footer20 ${className}`}>
      <div className="frame-parent118">
        <div className="frame-wrapper57">
          <div className="image-35-parent18">
            <img
              className="image-35-icon20"
              loading="lazy"
              alt=""
              src="/image-35@2x.png"
            />
            <div className="school-description4">
              <b className="montessori-prime-school29">
                Montessori Prime School aims primarily at the education of young
                children without distinction of caste and creed through the play
                way and other modern methods of imparting education, in order to
                eradicate from their minds the fear of going to school!
              </b>
            </div>
          </div>
        </div>
        <div className="footer-links2">
          <div className="link-column">
            <div className="link-header">
              <h3 className="explore21">Explore</h3>
            </div>
            <div className="page-links1">
              <div
                className="about-us23"
                onClick={onAboutUsTextClick}
              >{`>>About Us`}</div>
              <a
                className="gallery21"
                onClick={onGalleryTextClick}
              >{`>> Gallery`}</a>
              <a
                className="events22"
                onClick={onEventsTextClick}
              >{`>> Events`}</a>
              <div
                className="blogs21"
                onClick={onBlogsTextClick}
              >{`>> Blogs`}</div>
              <div
                className="virtual-tour22"
                onClick={onVirtualTourTextClick}
              >{`>> Virtual Tour`}</div>
              <div
                className="privacy-policy20"
                onClick={onPrivacyPolicyTextClick}
              >{`>>Privacy Policy`}</div>
            </div>
          </div>
          <div className="operating-hours">
            <h3 className="opening-hours20">Opening Hours</h3>
            <div className="hours-detail">
              <div className="school-days">
                <div className="mon-800-am20">Mon 8:00 am - 5:00 pm</div>
                <div className="mon-800-am20">Tue 8:00 am - 5:00 pm</div>
                <div className="mon-800-am20">Wed 8:00 am - 5:00 pm</div>
                <div className="mon-800-am20">Thur 8:00 am - 5:00 pm</div>
                <div className="mon-800-am20">Fri 8:00 am - 5:00 pm</div>
                <div className="mon-800-am20">Sat 8:00 am - 5:00 pm</div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-info7">
          <div className="contact-container1">
            <div className="contact-header">
              <div className="contact-title1">
                <h3 className="opening-hours20">Get In Touch</h3>
              </div>
              <div className="location-icon-container-group">
                <div className="location-icon-container1">
                  <img
                    className="imgicons8-320"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-3@2x.png"
                  />
                </div>
                <div className="frr5f3-bavupet-x21">
                  3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                  506371
                </div>
              </div>
              <div className="communication">
                <div className="imgicons8-4-parent18">
                  <img
                    className="imgicons8-420"
                    alt=""
                    src="/imgicons8-4@2x.png"
                  />
                  <div className="contact-value-wrapper">
                    <a
                      className="contact-value"
                      href="tel:+917700043030"
                      target="_blank"
                    >
                      +91 77000 43030
                    </a>
                  </div>
                </div>
                <div className="imgicons8-5-parent18">
                  <img
                    className="imgicons8-520"
                    alt=""
                    src="/imgicons8-5@2x.png"
                  />
                  <div className="infomontessorijnprimecom-wrapper17">
                    <a
                      className="infomontessorijnprimecom24"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      info@montessorijnprime.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="imgicons8-5-parent18">
              <img className="imgicons8-420" alt="" src="/imgicons8-6@2x.png" />
              <a
                className="contact-value"
                href="tel:+917700053030"
                target="_blank"
              >
                +91 77000 53030
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
