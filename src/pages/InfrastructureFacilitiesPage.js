import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent21 from "../components/FrameComponent21";
import FrameComponent4 from "../components/FrameComponent4";
import { useNavigate } from "react-router-dom";
import "./InfrastructureFacilitiesPage.css";

const InfrastructureFacilitiesPage = () => {
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
    <div className="infrastructure-facilities-page">
      <FrameComponent
        navbarAlignSelf="unset"
        navbarPadding="0rem var(--padding-3xs) var(--padding-7xl)"
        navbarWidth="88.375rem"
        logo1="/logo-1@2x.png"
        logo1IconFlexWrap="unset"
        navMenuMinWidth="unset"
        homeMinWidth="unset"
      />
      <FrameComponent3 />
      <FrameComponent21 />
      <FrameComponent4 />
      <footer className="footer11">
        <div className="footer-left-group">
          <div className="footer-left1">
            <div className="image-35-parent9">
              <img
                className="image-35-icon11"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
              <div className="montessori-prime-school-aims-p-wrapper6">
                <b className="montessori-prime-school11">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school!
                </b>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-links1">
              <div className="explore-wrapper6">
                <h3 className="explore11">Explore</h3>
              </div>
              <div className="footer-nav">
                <div
                  className="about-us11"
                  onClick={onAboutUsTextClick}
                >{`>>About Us`}</div>
                <div
                  className="gallery11"
                  onClick={onGalleryTextClick}
                >{`>> Gallery`}</div>
                <div
                  className="events11"
                  onClick={onEventsTextClick}
                >{`>> Events`}</div>
                <div
                  className="blogs11"
                  onClick={onBlogsTextClick}
                >{`>> Blogs`}</div>
                <div
                  className="virtual-tour12"
                  onClick={onVirtualTourTextClick}
                >{`>> Virtual Tour`}</div>
                <div
                  className="privacy-policy11"
                  onClick={onPrivacyPolicyTextClick}
                >{`>>Privacy Policy`}</div>
              </div>
            </div>
            <div className="opening-hours-parent8">
              <h3 className="opening-hours11">Opening Hours</h3>
              <div className="days-time-wrapper">
                <div className="days-time">
                  <div className="mon-800-am11">Mon 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am11">Tue 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am11">Wed 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am11">Thur 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am11">Fri 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am11">Sat 8:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper13">
            <div className="frame-parent26">
              <div className="get-in-touch-wrapper5">
                <h3 className="opening-hours11">Get In Touch</h3>
              </div>
              <div className="frame-wrapper14">
                <div className="frame-parent27">
                  <div className="imgicons8-3-wrapper5">
                    <img
                      className="imgicons8-311"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-3@2x.png"
                    />
                  </div>
                  <div className="frr5f3-bavupet-x11">
                    3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                    506371
                  </div>
                </div>
              </div>
              <div className="frame-parent28">
                <div className="imgicons8-4-parent9">
                  <img
                    className="imgicons8-411"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-4@2x.png"
                  />
                  <div className="contact-links-wrapper">
                    <a
                      className="contact-links5"
                      href="tel:+917700043030"
                      target="_blank"
                    >
                      +91 77000 43030
                    </a>
                  </div>
                </div>
                <div className="imgicons8-5-parent9">
                  <img
                    className="imgicons8-511"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-5@2x.png"
                  />
                  <div className="infomontessorijnprimecom-wrapper9">
                    <a
                      className="infomontessorijnprimecom11"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      info@montessorijnprime.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgicons8-5-parent9">
                <img
                  className="imgicons8-411"
                  loading="lazy"
                  alt=""
                  src="/imgicons8-6@2x.png"
                />
                <a
                  className="contact-links5"
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

export default InfrastructureFacilitiesPage;
