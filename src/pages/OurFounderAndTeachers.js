import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent7 from "../components/FrameComponent7";
import Frame41Variant from "../components/Frame41Variant";
import { useNavigate } from "react-router-dom";
import "./OurFounderAndTeachers.css";

const OurFounderAndTeachers = () => {
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
    <div className="our-founder-and-teachers">
      <FrameComponent
        navbarAlignSelf="unset"
        navbarPadding="0rem var(--padding-3xs) var(--padding-9xl)"
        navbarWidth="88.375rem"
        logo1="/logo-1@2x.png"
        logo1IconFlexWrap="unset"
        navMenuMinWidth="unset"
        homeMinWidth="unset"
      />
      <FrameComponent7 />
      <Frame41Variant />
      <footer className="footer8">
        <div className="frame-parent23">
          <div className="frame-wrapper11">
            <div className="image-35-parent6">
              <img
                className="image-35-icon8"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
              <div className="school-description1">
                <b className="montessori-prime-school8">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school!
                </b>
              </div>
            </div>
          </div>
          <div className="footer-links-container-parent">
            <div className="footer-links-container">
              <div className="explore-wrapper4">
                <h3 className="explore8">Explore</h3>
              </div>
              <div className="about-us-parent2">
                <div
                  className="about-us8"
                  onClick={onAboutUsTextClick}
                >{`>>About Us`}</div>
                <a
                  className="gallery8"
                  onClick={onGalleryTextClick}
                >{`>> Gallery`}</a>
                <a
                  className="events8"
                  onClick={onEventsTextClick}
                >{`>> Events`}</a>
                <div className="secondary-footer-links">
                  <div
                    className="blogs8"
                    onClick={onBlogsTextClick}
                  >{`>> Blogs`}</div>
                  <div
                    className="virtual-tour9"
                    onClick={onVirtualTourTextClick}
                  >{`>> Virtual Tour`}</div>
                  <div
                    className="privacy-policy8"
                    onClick={onPrivacyPolicyTextClick}
                  >{`>>Privacy Policy`}</div>
                </div>
              </div>
            </div>
            <div className="opening-hours-parent6">
              <h3 className="opening-hours8">Opening Hours</h3>
              <div className="hours-details2">
                <div className="timings">
                  <div className="mon-800-am8">Mon 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am8">Tue 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am8">Wed 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am8">Thur 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am8">Fri 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am8">Sat 8:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-details4">
            <div className="get-in-touch-container-parent">
              <div className="get-in-touch-container2">
                <h3 className="opening-hours8">Get In Touch</h3>
              </div>
              <div className="contact-info2">
                <div className="address-icon-parent">
                  <div className="address-icon">
                    <img
                      className="imgicons8-38"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-3@2x.png"
                    />
                  </div>
                  <div className="frr5f3-bavupet-x8">
                    3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                    506371
                  </div>
                </div>
              </div>
              <div className="contact-links3">
                <div className="imgicons8-4-parent6">
                  <img
                    className="imgicons8-48"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-4@2x.png"
                  />
                  <div className="link-values">
                    <a
                      className="email"
                      href="tel:+917700043030"
                      target="_blank"
                    >
                      +91 77000 43030
                    </a>
                  </div>
                </div>
                <div className="imgicons8-5-parent6">
                  <img
                    className="imgicons8-58"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-5@2x.png"
                  />
                  <div className="infomontessorijnprimecom-wrapper6">
                    <a
                      className="infomontessorijnprimecom8"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      info@montessorijnprime.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgicons8-5-parent6">
                <img
                  className="imgicons8-48"
                  loading="lazy"
                  alt=""
                  src="/imgicons8-6@2x.png"
                />
                <a className="email" href="tel:+917700053030" target="_blank">
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

export default OurFounderAndTeachers;
