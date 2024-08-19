import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent32 from "../components/FrameComponent32";
import FrameComponent27 from "../components/FrameComponent27";
import { useNavigate } from "react-router-dom";
import "./VirtualTour.css";

const VirtualTour = () => {
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
    <div className="virtual-tour4">
      <FrameComponent
        navbarAlignSelf="unset"
        navbarPadding="0rem var(--padding-3xs)"
        navbarWidth="88.375rem"
        logo1="/logo-1@2x.png"
        logo1IconFlexWrap="unset"
        navMenuMinWidth="unset"
        homeMinWidth="unset"
      />
      <main className="instance-parent1">
        <FrameComponent32
          homeContact="Home / Virtual Tour"
          contactUs="Virtual Tour"
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
        <section className="instance-parent1">
          <FrameComponent27 />
          <footer className="footer4">
            <div className="frame-parent15">
              <div className="frame-wrapper9">
                <div className="instance-parent1">
                  <img
                    className="image-35-icon4"
                    alt=""
                    src="/image-35@2x.png"
                  />
                  <div className="montessori-prime-school-aims-p-wrapper2">
                    <b className="montessori-prime-school4">
                      Montessori Prime School aims primarily at the education of
                      young children without distinction of caste and creed
                      through the play way and other modern methods of imparting
                      education, in order to eradicate from their minds the fear
                      of going to school!
                    </b>
                  </div>
                </div>
              </div>
              <div className="footer-navigation-parent">
                <div className="footer-navigation">
                  <div className="explore-wrapper2">
                    <h3 className="explore4">Explore</h3>
                  </div>
                  <div className="navigation-links-footer">
                    <div
                      className="about-us4"
                      onClick={onAboutUsTextClick}
                    >{`>>About Us`}</div>
                    <div
                      className="gallery4"
                      onClick={onGalleryTextClick}
                    >{`>> Gallery`}</div>
                    <div
                      className="events4"
                      onClick={onEventsTextClick}
                    >{`>> Events`}</div>
                    <div
                      className="blogs4"
                      onClick={onBlogsTextClick}
                    >{`>> Blogs`}</div>
                    <div
                      className="virtual-tour5"
                      onClick={onVirtualTourTextClick}
                    >{`>> Virtual Tour`}</div>
                    <div
                      className="privacy-policy4"
                      onClick={onPrivacyPolicyTextClick}
                    >{`>>Privacy Policy`}</div>
                  </div>
                </div>
                <div className="opening-hours-parent2">
                  <h3 className="opening-hours4">Opening Hours</h3>
                  <div className="hours-details1">
                    <div className="day-schedule">
                      <div className="mon-800-am4">Mon 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am4">Tue 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am4">Wed 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am4">Thur 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am4">Fri 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am4">Sat 8:00 am - 5:00 pm</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-details-wrapper">
                <div className="contact-details2">
                  <div className="get-in-touch-wrapper2">
                    <h3 className="opening-hours4">Get In Touch</h3>
                  </div>
                  <div className="contact-details-inner">
                    <div className="frame-parent16">
                      <div className="imgicons8-3-wrapper2">
                        <img
                          className="imgicons8-34"
                          alt=""
                          src="/imgicons8-3@2x.png"
                        />
                      </div>
                      <div className="frr5f3-bavupet-x4">
                        3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                        506371
                      </div>
                    </div>
                  </div>
                  <div className="contact-links">
                    <div className="imgicons8-4-parent2">
                      <img
                        className="imgicons8-44"
                        alt=""
                        src="/imgicons8-4@2x.png"
                      />
                      <div className="contact-link-details">
                        <a
                          className="social-space"
                          href="tel:+917700043030"
                          target="_blank"
                        >
                          +91 77000 43030
                        </a>
                      </div>
                    </div>
                    <div className="imgicons8-5-parent2">
                      <img
                        className="imgicons8-54"
                        alt=""
                        src="/imgicons8-5@2x.png"
                      />
                      <div className="infomontessorijnprimecom-wrapper2">
                        <a
                          className="infomontessorijnprimecom4"
                          href="mailto:info@montessorijnprime.com"
                          target="_blank"
                        >
                          info@montessorijnprime.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="imgicons8-5-parent2">
                    <img
                      className="imgicons8-44"
                      alt=""
                      src="/imgicons8-6@2x.png"
                    />
                    <a
                      className="social-space"
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
        </section>
      </main>
    </div>
  );
};

export default VirtualTour;
