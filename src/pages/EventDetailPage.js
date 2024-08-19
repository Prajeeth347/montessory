import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent32 from "../components/FrameComponent32";
import FrameComponent29 from "../components/FrameComponent29";
import { useNavigate } from "react-router-dom";
import "./EventDetailPage.css";

const EventDetailPage = () => {
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
    <div className="event-detail-page">
      <FrameComponent
        navbarAlignSelf="unset"
        navbarPadding="0rem var(--padding-3xs)"
        navbarWidth="88.375rem"
        logo1="/logo-1@2x.png"
        logo1IconFlexWrap="unset"
        navMenuMinWidth="unset"
        homeMinWidth="unset"
      />
      <main className="footer-container">
        <FrameComponent32
          homeContact="Home / Events/Event name"
          contactUs="Events Details"
          propGap="22px"
          propMinHeight="15.5rem"
          propPosition="relative"
          propWidth="10.375rem"
          propHeight="unset"
          propDisplay="inline-block"
          propPosition1="unset"
          propFontSize="28px"
          propBottom="3.056rem"
          propLeft="9.044rem"
        />
        <section className="instance-parent5">
          <FrameComponent29 />
          <footer className="footer10">
            <div className="footer-left-parent">
              <div className="footer-left">
                <div className="footer-container">
                  <img
                    className="image-35-icon10"
                    loading="lazy"
                    alt=""
                    src="/image-35@2x.png"
                  />
                  <div className="school-description3">
                    <b className="montessori-prime-school10">
                      Montessori Prime School aims primarily at the education of
                      young children without distinction of caste and creed
                      through the play way and other modern methods of imparting
                      education, in order to eradicate from their minds the fear
                      of going to school!
                    </b>
                  </div>
                </div>
              </div>
              <div className="footer-links-container1">
                <div className="explore-link-group">
                  <div className="explore-link1">
                    <h3 className="explore10">Explore</h3>
                  </div>
                  <div className="footer-links-list">
                    <div
                      className="about-us10"
                      onClick={onAboutUsTextClick}
                    >{`>>About Us`}</div>
                    <a
                      className="gallery10"
                      onClick={onGalleryTextClick}
                    >{`>> Gallery`}</a>
                    <div
                      className="events10"
                      onClick={onEventsTextClick}
                    >{`>> Events`}</div>
                    <div
                      className="blogs10"
                      onClick={onBlogsTextClick}
                    >{`>> Blogs`}</div>
                    <div
                      className="virtual-tour11"
                      onClick={onVirtualTourTextClick}
                    >{`>> Virtual Tour`}</div>
                    <div
                      className="privacy-policy10"
                      onClick={onPrivacyPolicyTextClick}
                    >{`>>Privacy Policy`}</div>
                  </div>
                </div>
                <div className="opening-hours-parent7">
                  <h3 className="opening-hours10">Opening Hours</h3>
                  <div className="hours-details3">
                    <div className="hours-list1">
                      <div className="mon-800-am10">Mon 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am10">Tue 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am10">Wed 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am10">Thur 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am10">Fri 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am10">Sat 8:00 am - 5:00 pm</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-details-frame">
                <div className="contact-details6">
                  <div className="get-in-touch11">
                    <h3 className="opening-hours10">Get In Touch</h3>
                  </div>
                  <div className="contact-info3">
                    <div className="address-icon-group">
                      <div className="address-icon1">
                        <img
                          className="imgicons8-310"
                          loading="lazy"
                          alt=""
                          src="/imgicons8-3@2x.png"
                        />
                      </div>
                      <div className="frr5f3-bavupet-x10">
                        3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                        506371
                      </div>
                    </div>
                    <div className="contact-links4">
                      <div className="imgicons8-4-parent8">
                        <img
                          className="imgicons8-410"
                          loading="lazy"
                          alt=""
                          src="/imgicons8-4@2x.png"
                        />
                        <div className="link-labels">
                          <a
                            className="email-link1"
                            href="tel:+917700043030"
                            target="_blank"
                          >
                            +91 77000 43030
                          </a>
                        </div>
                      </div>
                      <div className="imgicons8-5-parent8">
                        <img
                          className="imgicons8-510"
                          loading="lazy"
                          alt=""
                          src="/imgicons8-5@2x.png"
                        />
                        <div className="infomontessorijnprimecom-wrapper8">
                          <a
                            className="infomontessorijnprimecom10"
                            href="mailto:info@montessorijnprime.com"
                            target="_blank"
                          >
                            info@montessorijnprime.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="imgicons8-5-parent8">
                      <img
                        className="imgicons8-410"
                        loading="lazy"
                        alt=""
                        src="/imgicons8-6@2x.png"
                      />
                      <a
                        className="email-link1"
                        href="tel:+917700053030"
                        target="_blank"
                      >
                        +91 77000 53030
                      </a>
                    </div>
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

export default EventDetailPage;
