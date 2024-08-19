import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent19 from "../components/FrameComponent19";
import FrameComponent23 from "../components/FrameComponent23";
import { useNavigate } from "react-router-dom";
import "./EventsPage.css";

const EventsPage = () => {
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
    <div className="events-page">
      <FrameComponent
        navbarAlignSelf="unset"
        navbarPadding="0rem var(--padding-3xs)"
        navbarWidth="88.375rem"
        logo1="/logo-1@2x.png"
        logo1IconFlexWrap="unset"
        navMenuMinWidth="unset"
        homeMinWidth="unset"
      />
      <main className="frame-parent19">
        <section className="frame-parent19">
          <FrameComponent19
            contact="Events"
            contactUs="Events"
            image36="/image-361@2x.png"
          />
          <FrameComponent23 />
        </section>
        <footer className="footer7">
          <div className="frame-parent20">
            <div className="frame-wrapper10">
              <div className="frame-parent19">
                <img
                  className="image-35-icon7"
                  loading="lazy"
                  alt=""
                  src="/image-35@2x.png"
                />
                <div className="montessori-prime-school-aims-p-wrapper4">
                  <b className="montessori-prime-school7">
                    Montessori Prime School aims primarily at the education of
                    young children without distinction of caste and creed
                    through the play way and other modern methods of imparting
                    education, in order to eradicate from their minds the fear
                    of going to school!
                  </b>
                </div>
              </div>
            </div>
            <div className="explore-container-container">
              <div className="explore-container3">
                <div className="explore-wrapper3">
                  <h3 className="explore7">Explore</h3>
                </div>
                <div className="explore-links">
                  <div
                    className="about-us7"
                    onClick={onAboutUsTextClick}
                  >{`>>About Us`}</div>
                  <a
                    className="gallery7"
                    onClick={onGalleryTextClick}
                  >{`>> Gallery`}</a>
                  <div
                    className="events7"
                    onClick={onEventsTextClick}
                  >{`>> Events`}</div>
                  <div
                    className="blogs7"
                    onClick={onBlogsTextClick}
                  >{`>> Blogs`}</div>
                  <div
                    className="virtual-tour8"
                    onClick={onVirtualTourTextClick}
                  >{`>> Virtual Tour`}</div>
                  <div
                    className="privacy-policy7"
                    onClick={onPrivacyPolicyTextClick}
                  >{`>>Privacy Policy`}</div>
                </div>
              </div>
              <div className="opening-hours-parent5">
                <h3 className="opening-hours7">Opening Hours</h3>
                <div className="hours-container-wrapper">
                  <div className="hours-container1">
                    <div className="mon-800-am7">Mon 8:00 am - 5:00 pm</div>
                    <div className="mon-800-am7">Tue 8:00 am - 5:00 pm</div>
                    <div className="mon-800-am7">Wed 8:00 am - 5:00 pm</div>
                    <div className="mon-800-am7">Thur 8:00 am - 5:00 pm</div>
                    <div className="mon-800-am7">Fri 8:00 am - 5:00 pm</div>
                    <div className="mon-800-am7">Sat 8:00 am - 5:00 pm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-container-wrapper">
              <div className="contact-container">
                <div className="get-in-touch-wrapper3">
                  <h3 className="opening-hours7">Get In Touch</h3>
                </div>
                <div className="contact-container-inner">
                  <div className="frame-parent21">
                    <div className="imgicons8-3-wrapper3">
                      <img
                        className="imgicons8-37"
                        loading="lazy"
                        alt=""
                        src="/imgicons8-3@2x.png"
                      />
                    </div>
                    <div className="frr5f3-bavupet-x7">
                      3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                      506371
                    </div>
                  </div>
                </div>
                <div className="frame-parent22">
                  <div className="imgicons8-4-parent5">
                    <img
                      className="imgicons8-47"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-4@2x.png"
                    />
                    <div className="contact-link-details1">
                      <a
                        className="email-link"
                        href="tel:+917700043030"
                        target="_blank"
                      >
                        +91 77000 43030
                      </a>
                    </div>
                  </div>
                  <div className="imgicons8-5-parent5">
                    <img
                      className="imgicons8-57"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-5@2x.png"
                    />
                    <div className="infomontessorijnprimecom-wrapper5">
                      <a
                        className="infomontessorijnprimecom7"
                        href="mailto:info@montessorijnprime.com"
                        target="_blank"
                      >
                        info@montessorijnprime.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="imgicons8-5-parent5">
                  <img
                    className="imgicons8-47"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-6@2x.png"
                  />
                  <a
                    className="email-link"
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
      </main>
    </div>
  );
};

export default EventsPage;
