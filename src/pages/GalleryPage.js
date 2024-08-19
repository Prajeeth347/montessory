import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent19 from "../components/FrameComponent19";
import Events from "../components/Events";
import { useNavigate } from "react-router-dom";
import "./GalleryPage.css";

const GalleryPage = () => {
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
    <div className="gallery-page">
      <section className="main">
        <FrameComponent
          navbarAlignSelf="unset"
          navbarPadding="0rem var(--padding-3xs)"
          navbarWidth="88.375rem"
          logo1="/logo-1@2x.png"
          logo1IconFlexWrap="unset"
          navMenuMinWidth="unset"
          homeMinWidth="unset"
        />
        <FrameComponent19
          contact="Gallery"
          contactUs="Gallery"
          image36="/image-361@2x.png"
        />
        <Events />
      </section>
      <footer className="footer14">
        <div className="about-parent">
          <div className="about">
            <div className="image-35-parent12">
              <img className="image-35-icon14" alt="" src="/image-35@2x.png" />
              <div className="montessori-prime-school-aims-p-wrapper9">
                <b className="montessori-prime-school14">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school!
                </b>
              </div>
            </div>
          </div>
          <div className="explore14">
            <div className="links">
              <div className="explore-title">
                <b className="explore15">Explore</b>
              </div>
              <div className="page-links">
                <div
                  className="about-us14"
                  onClick={onAboutUsTextClick}
                >{`>>About Us`}</div>
                <a
                  className="gallery14"
                  onClick={onGalleryTextClick}
                >{`>> Gallery`}</a>
                <a
                  className="events14"
                  onClick={onEventsTextClick}
                >{`>> Events`}</a>
                <a
                  className="blogs14"
                  onClick={onBlogsTextClick}
                >{`>> Blogs`}</a>
                <div
                  className="virtual-tour15"
                  onClick={onVirtualTourTextClick}
                >{`>> Virtual Tour`}</div>
                <div
                  className="privacy-policy14"
                  onClick={onPrivacyPolicyTextClick}
                >{`>>Privacy Policy`}</div>
              </div>
            </div>
            <div className="hours">
              <b className="opening-hours14">Opening Hours</b>
              <div className="hours-list2">
                <div className="schedule2">
                  <div className="mon-800-am14">Mon 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am14">Tue 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am14">Wed 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am14">Thur 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am14">Fri 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am14">Sat 8:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="touch">
            <div className="address">
              <div className="touch-title">
                <b className="opening-hours14">Get In Touch</b>
              </div>
              <div className="location">
                <div className="address-icon-container">
                  <div className="address-icon2">
                    <img
                      className="imgicons8-314"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-3@2x.png"
                    />
                  </div>
                  <div className="frr5f3-bavupet-x14">
                    3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                    506371
                  </div>
                </div>
              </div>
              <div className="contact">
                <div className="imgicons8-4-parent12">
                  <img
                    className="imgicons8-414"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-4@2x.png"
                  />
                  <div className="email-wrapper">
                    <a
                      className="email3"
                      href="tel:+917700043030"
                      target="_blank"
                    >
                      +91 77000 43030
                    </a>
                  </div>
                </div>
                <div className="imgicons8-5-parent12">
                  <img
                    className="imgicons8-514"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-5@2x.png"
                  />
                  <div className="infomontessorijnprimecom-wrapper12">
                    <a
                      className="infomontessorijnprimecom14"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      info@montessorijnprime.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgicons8-5-parent12">
                <img
                  className="imgicons8-414"
                  loading="lazy"
                  alt=""
                  src="/imgicons8-6@2x.png"
                />
                <a className="email3" href="tel:+917700053030" target="_blank">
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

export default GalleryPage;
