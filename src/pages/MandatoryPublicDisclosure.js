import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent5 from "../components/FrameComponent5";
import { useNavigate } from "react-router-dom";
import "./MandatoryPublicDisclosure.css";

const MandatoryPublicDisclosure = () => {
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
    <div className="mandatory-public-disclosure">
      <FrameComponent
        navbarAlignSelf="unset"
        navbarPadding="0rem var(--padding-3xs) var(--padding-7xl)"
        navbarWidth="88.375rem"
        logo1="/logo-1@2x.png"
        logo1IconFlexWrap="unset"
        navMenuMinWidth="unset"
        homeMinWidth="unset"
      />
      <FrameComponent5 />
      <img className="image-68-icon" alt="" src="/image-68@2x.png" />
      <img className="image-68-icon" alt="" src="/image-69@2x.png" />
      <section className="image-container">
        <img
          className="image-70-icon"
          loading="lazy"
          alt=""
          src="/image-70@2x.png"
        />
      </section>
      <footer className="footer6">
        <div className="school-info-parent">
          <div className="school-info">
            <div className="image-35-parent4">
              <img
                className="image-35-icon6"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
              <div className="montessori-prime-school-aims-p-wrapper3">
                <b className="montessori-prime-school6">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school!
                </b>
              </div>
            </div>
          </div>
          <div className="explore-container-group">
            <div className="explore-container2">
              <div className="explore-title-container">
                <h3 className="explore6">Explore</h3>
              </div>
              <div className="links-one">
                <div
                  className="about-us6"
                  onClick={onAboutUsTextClick}
                >{`>>About Us`}</div>
                <div
                  className="gallery6"
                  onClick={onGalleryTextClick}
                >{`>> Gallery`}</div>
                <div
                  className="events6"
                  onClick={onEventsTextClick}
                >{`>> Events`}</div>
                <div className="links-two">
                  <div
                    className="blogs6"
                    onClick={onBlogsTextClick}
                  >{`>> Blogs`}</div>
                  <div
                    className="virtual-tour7"
                    onClick={onVirtualTourTextClick}
                  >{`>> Virtual Tour`}</div>
                  <div
                    className="privacy-policy6"
                    onClick={onPrivacyPolicyTextClick}
                  >{`>>Privacy Policy`}</div>
                </div>
              </div>
            </div>
            <div className="opening-hours-parent4">
              <h3 className="opening-hours6">Opening Hours</h3>
              <div className="hours-container">
                <div className="schedule1">
                  <div className="mon-800-am6">Mon 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am6">Tue 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am6">Wed 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am6">Thur 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am6">Fri 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am6">Sat 8:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-details-container-wrapper">
            <div className="contact-details-container">
              <div className="get-in-touch-container1">
                <h3 className="opening-hours6">Get In Touch</h3>
              </div>
              <div className="contact-methods">
                <div className="location-icon-container-parent">
                  <div className="location-icon-container">
                    <img
                      className="imgicons8-36"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-3@2x.png"
                    />
                  </div>
                  <div className="frr5f3-bavupet-x6">
                    3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                    506371
                  </div>
                </div>
              </div>
              <div className="contact-links2">
                <div className="imgicons8-4-parent4">
                  <img
                    className="imgicons8-46"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-4@2x.png"
                  />
                  <div className="frame">
                    <a
                      className="space"
                      href="tel:+917700043030"
                      target="_blank"
                    >
                      +91 77000 43030
                    </a>
                  </div>
                </div>
                <div className="imgicons8-5-parent4">
                  <img
                    className="imgicons8-56"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-5@2x.png"
                  />
                  <div className="infomontessorijnprimecom-wrapper4">
                    <a
                      className="infomontessorijnprimecom6"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      info@montessorijnprime.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgicons8-5-parent4">
                <img
                  className="imgicons8-46"
                  loading="lazy"
                  alt=""
                  src="/imgicons8-6@2x.png"
                />
                <a className="space" href="tel:+917700053030" target="_blank">
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

export default MandatoryPublicDisclosure;
