import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent32 from "../components/FrameComponent32";
import { useNavigate } from "react-router-dom";
import "./ApplicationPage.css";

const ApplicationPage = () => {
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
    <div className="application-page">
      <section className="frame-section">
        <FrameComponent
          navbarAlignSelf="unset"
          navbarPadding="0rem var(--padding-3xs)"
          navbarWidth="88.375rem"
          logo1="/logo-1@2x.png"
          logo1IconFlexWrap="unset"
          navMenuMinWidth="unset"
          homeMinWidth="unset"
        />
        <div className="instance-group">
          <FrameComponent32
            homeContact="Home / Privacy Policy"
            contactUs="Application Form"
            propGap="43px"
            propMinHeight="unset"
            propPosition="relative"
            propWidth="unset"
            propHeight="unset"
            propDisplay="unset"
            propPosition1="unset"
            propFontSize="36px"
            propBottom="3.056rem"
            propLeft="9.044rem"
          />
          <div className="image-71-wrapper">
            <img
              className="image-71-icon"
              loading="lazy"
              alt=""
              src="/image-71@2x.png"
            />
          </div>
        </div>
      </section>
      <footer className="footer2">
        <div className="footer-content-parent">
          <div className="footer-content">
            <div className="image-35-container">
              <img
                className="image-35-icon2"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
              <div className="montessori-prime-school-aims-p-frame">
                <b className="montessori-prime-school2">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school!
                </b>
              </div>
            </div>
          </div>
          <div className="explore-hours">
            <div className="frame-parent8">
              <div className="explore-frame">
                <h3 className="explore2">Explore</h3>
              </div>
              <div className="about-us-container">
                <div
                  className="about-us2"
                  onClick={onAboutUsTextClick}
                >{`>>About Us`}</div>
                <div
                  className="gallery2"
                  onClick={onGalleryTextClick}
                >{`>> Gallery`}</div>
                <div
                  className="events2"
                  onClick={onEventsTextClick}
                >{`>> Events`}</div>
                <div
                  className="blogs2"
                  onClick={onBlogsTextClick}
                >{`>> Blogs`}</div>
                <div
                  className="virtual-tour2"
                  onClick={onVirtualTourTextClick}
                >{`>> Virtual Tour`}</div>
                <div
                  className="privacy-policy2"
                  onClick={onPrivacyPolicyTextClick}
                >{`>>Privacy Policy`}</div>
              </div>
            </div>
            <div className="opening-hours-container">
              <h3 className="opening-hours2">Opening Hours</h3>
              <div className="hours-details">
                <div className="weekdays">
                  <div className="mon-800-am2">Mon 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am2">Tue 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am2">Wed 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am2">Thur 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am2">Fri 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am2">Sat 8:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="get-in-touch-content-wrapper">
            <div className="get-in-touch-content">
              <div className="get-in-touch-frame">
                <h3 className="opening-hours2">Get In Touch</h3>
              </div>
              <div className="contact-details1">
                <div className="frame-parent9">
                  <div className="imgicons8-3-frame">
                    <img
                      className="imgicons8-32"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-3@2x.png"
                    />
                  </div>
                  <div className="frr5f3-bavupet-x2">
                    3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                    506371
                  </div>
                </div>
              </div>
              <div className="contact-icons">
                <div className="imgicons8-4-container">
                  <img
                    className="imgicons8-42"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-4@2x.png"
                  />
                  <div className="contact-info-wrapper">
                    <a
                      className="contact-info"
                      href="tel:+917700043030"
                      target="_blank"
                    >
                      +91 77000 43030
                    </a>
                  </div>
                </div>
                <div className="imgicons8-5-container">
                  <img
                    className="imgicons8-52"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-5@2x.png"
                  />
                  <div className="infomontessorijnprimecom-frame">
                    <a
                      className="infomontessorijnprimecom2"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      info@montessorijnprime.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgicons8-5-container">
                <img
                  className="imgicons8-42"
                  loading="lazy"
                  alt=""
                  src="/imgicons8-6@2x.png"
                />
                <a
                  className="contact-info"
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
    </div>
  );
};

export default ApplicationPage;
