import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import FrameComponent32 from "../components/FrameComponent32";
import "./CAREERPAGE.css";

const CAREERPAGE = () => {
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
    <div className="career-page">
      <img className="image-60-icon" alt="" src="/image-60@2x.png" />
      <footer className="footer5">
        <div className="footer-content-group">
          <div className="footer-content1">
            <div className="image-35-parent3">
              <img
                className="image-35-icon5"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
              <div className="school-description">
                <b className="montessori-prime-school5">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school!
                </b>
              </div>
            </div>
          </div>
          <div className="footer-navigation1">
            <div className="explore-link-parent">
              <div className="explore-link">
                <h3 className="explore5">Explore</h3>
              </div>
              <div className="footer-links">
                <div
                  className="about-us5"
                  onClick={onAboutUsTextClick}
                >{`>>About Us`}</div>
                <div
                  className="gallery5"
                  onClick={onGalleryTextClick}
                >{`>> Gallery`}</div>
                <div
                  className="events5"
                  onClick={onEventsTextClick}
                >{`>> Events`}</div>
                <div
                  className="blogs5"
                  onClick={onBlogsTextClick}
                >{`>> Blogs`}</div>
                <div
                  className="virtual-tour6"
                  onClick={onVirtualTourTextClick}
                >{`>> Virtual Tour`}</div>
                <div
                  className="privacy-policy5"
                  onClick={onPrivacyPolicyTextClick}
                >{`>>Privacy Policy`}</div>
              </div>
            </div>
            <div className="opening-hours-parent3">
              <h3 className="opening-hours5">Opening Hours</h3>
              <div className="schedule">
                <div className="weekly-schedule">
                  <div className="mon-800-am5">Mon 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am5">Tue 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am5">Wed 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am5">Thur 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am5">Fri 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am5">Sat 8:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-info-container">
            <div className="contact-info1">
              <div className="contact-title">
                <h3 className="opening-hours5">Get In Touch</h3>
              </div>
              <div className="contact-details3">
                <div className="location-icon-parent">
                  <div className="location-icon">
                    <img
                      className="imgicons8-35"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-3@2x.png"
                    />
                  </div>
                  <div className="frr5f3-bavupet-x5">
                    3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                    506371
                  </div>
                </div>
              </div>
              <div className="frame-parent17">
                <div className="imgicons8-4-parent3">
                  <img
                    className="imgicons8-45"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-4@2x.png"
                  />
                  <div className="contact-links1">
                    <a
                      className="info-email"
                      href="tel:+917700043030"
                      target="_blank"
                    >
                      +91 77000 43030
                    </a>
                  </div>
                </div>
                <div className="imgicons8-5-parent3">
                  <img
                    className="imgicons8-55"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-5@2x.png"
                  />
                  <div className="infomontessorijnprimecom-wrapper3">
                    <a
                      className="infomontessorijnprimecom5"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      info@montessorijnprime.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgicons8-5-parent3">
                <img
                  className="imgicons8-45"
                  loading="lazy"
                  alt=""
                  src="/imgicons8-6@2x.png"
                />
                <a
                  className="info-email"
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
      <section className="frame-parent18">
        <FrameComponent
          navbarAlignSelf="unset"
          navbarPadding="0rem var(--padding-3xs)"
          navbarWidth="88.375rem"
          logo1="/logo-1@2x.png"
          logo1IconFlexWrap="unset"
          navMenuMinWidth="unset"
          homeMinWidth="unset"
        />
        <FrameComponent32
          homeContact="Home / Career"
          contactUs="Career"
          propGap="43px"
          propMinHeight="unset"
          propPosition="relative"
          propWidth="10.375rem"
          propHeight="unset"
          propDisplay="inline-block"
          propPosition1="unset"
          propFontSize="48px"
          propBottom="3.056rem"
          propLeft="9.044rem"
        />
        <div className="background-image">
          <img
            className="image-72-icon"
            loading="lazy"
            alt=""
            src="/image-72@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default CAREERPAGE;
