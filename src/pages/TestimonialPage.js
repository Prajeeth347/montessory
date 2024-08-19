import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent32 from "../components/FrameComponent32";
import TestimonialFrame from "../components/TestimonialFrame";
import { useNavigate } from "react-router-dom";
import "./TestimonialPage.css";

const TestimonialPage = () => {
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
    <div className="testimonial-page">
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
        homeContact="Home / Testimonials"
        contactUs="Testimonials"
      />
      <main className="testimonial-frame-parent">
        <TestimonialFrame />
        <footer className="footer">
          <div className="frame-parent">
            <div className="frame-wrapper">
              <div className="testimonial-frame-parent">
                <img
                  className="image-35-icon"
                  loading="lazy"
                  alt=""
                  src="/image-35@2x.png"
                />
                <div className="montessori-prime-school-aims-p-wrapper">
                  <b className="montessori-prime-school">
                    Montessori Prime School aims primarily at the education of
                    young children without distinction of caste and creed
                    through the play way and other modern methods of imparting
                    education, in order to eradicate from their minds the fear
                    of going to school!
                  </b>
                </div>
              </div>
            </div>
            <div className="frame-group">
              <div className="frame-container">
                <div className="explore-wrapper">
                  <h3 className="explore">Explore</h3>
                </div>
                <div className="about-us-parent">
                  <div
                    className="about-us"
                    onClick={onAboutUsTextClick}
                  >{`>>About Us`}</div>
                  <div
                    className="gallery"
                    onClick={onGalleryTextClick}
                  >{`>> Gallery`}</div>
                  <div
                    className="events"
                    onClick={onEventsTextClick}
                  >{`>> Events`}</div>
                  <div
                    className="blogs"
                    onClick={onBlogsTextClick}
                  >{`>> Blogs`}</div>
                  <div
                    className="virtual-tour"
                    onClick={onVirtualTourTextClick}
                  >{`>> Virtual Tour`}</div>
                  <div
                    className="privacy-policy"
                    onClick={onPrivacyPolicyTextClick}
                  >{`>>Privacy Policy`}</div>
                </div>
              </div>
              <div className="opening-hours-parent">
                <h3 className="opening-hours">Opening Hours</h3>
                <div className="timings-row-wrapper">
                  <div className="timings-row">
                    <div className="mon-800-am">Mon 8:00 am - 5:00 pm</div>
                    <div className="mon-800-am">Tue 8:00 am - 5:00 pm</div>
                    <div className="mon-800-am">Wed 8:00 am - 5:00 pm</div>
                    <div className="mon-800-am">Thur 8:00 am - 5:00 pm</div>
                    <div className="mon-800-am">Fri 8:00 am - 5:00 pm</div>
                    <div className="mon-800-am">Sat 8:00 am - 5:00 pm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-div">
              <div className="frame-parent1">
                <div className="get-in-touch-wrapper">
                  <h3 className="opening-hours">Get In Touch</h3>
                </div>
                <div className="frame-wrapper1">
                  <div className="group-div">
                    <div className="imgicons8-3-wrapper">
                      <img
                        className="imgicons8-3"
                        loading="lazy"
                        alt=""
                        src="/imgicons8-3@2x.png"
                      />
                    </div>
                    <div className="frr5f3-bavupet-x">
                      3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                      506371
                    </div>
                  </div>
                </div>
                <div className="contact-details">
                  <div className="imgicons8-4-parent">
                    <img
                      className="imgicons8-4"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-4@2x.png"
                    />
                    <div className="contact-labels-wrapper">
                      <a
                        className="contact-labels"
                        href="tel:+917700043030"
                        target="_blank"
                      >
                        +91 77000 43030
                      </a>
                    </div>
                  </div>
                  <div className="imgicons8-5-parent">
                    <img
                      className="imgicons8-5"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-5@2x.png"
                    />
                    <div className="infomontessorijnprimecom-wrapper">
                      <a
                        className="infomontessorijnprimecom"
                        href="mailto:info@montessorijnprime.com"
                        target="_blank"
                      >
                        info@montessorijnprime.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="imgicons8-5-parent">
                  <img
                    className="imgicons8-4"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-6@2x.png"
                  />
                  <a
                    className="contact-labels"
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

export default TestimonialPage;
