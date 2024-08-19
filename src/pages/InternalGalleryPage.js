import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent19 from "../components/FrameComponent19";
import Component from "../components/Component";
import { useNavigate } from "react-router-dom";
import "./InternalGalleryPage.css";

const InternalGalleryPage = () => {
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
    <div className="internal-gallery-page">
      <FrameComponent
        navbarAlignSelf="unset"
        navbarPadding="0rem var(--padding-3xs) var(--padding-lg)"
        navbarWidth="88.375rem"
        logo1="/logo-1@2x.png"
        logo1IconFlexWrap="unset"
        navMenuMinWidth="unset"
        homeMinWidth="unset"
      />
      <section className="instance-parent14">
        <FrameComponent19
          contact="Gallery"
          contactUs="Event Name"
          image36="/image-361@2x.png"
        />
        <div className="component-1-wrapper">
          <Component />
        </div>
      </section>
      <footer className="footer17">
        <div className="frame-parent61">
          <div className="frame-wrapper36">
            <div className="image-35-parent15">
              <img
                className="image-35-icon17"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
              <div className="montessori-prime-school-aims-p-wrapper12">
                <b className="montessori-prime-school17">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school!
                </b>
              </div>
            </div>
          </div>
          <div className="explore-links1">
            <div className="frame-parent62">
              <div className="explore-wrapper11">
                <h3 className="explore18">Explore</h3>
              </div>
              <div className="links1">
                <div
                  className="about-us17"
                  onClick={onAboutUsTextClick}
                >{`>>About Us`}</div>
                <a
                  className="gallery17"
                  onClick={onGalleryTextClick}
                >{`>> Gallery`}</a>
                <div
                  className="events17"
                  onClick={onEventsTextClick}
                >{`>> Events`}</div>
                <div
                  className="blogs17"
                  onClick={onBlogsTextClick}
                >{`>> Blogs`}</div>
                <div
                  className="virtual-tour18"
                  onClick={onVirtualTourTextClick}
                >{`>> Virtual Tour`}</div>
                <div
                  className="privacy-policy17"
                  onClick={onPrivacyPolicyTextClick}
                >{`>>Privacy Policy`}</div>
              </div>
            </div>
            <div className="opening-hours-parent13">
              <h3 className="opening-hours17">Opening Hours</h3>
              <div className="schedule-wrapper">
                <div className="schedule3">
                  <div className="mon-800-am17">Mon 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am17">Tue 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am17">Wed 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am17">Thur 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am17">Fri 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am17">Sat 8:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-info4">
            <div className="contact-details8">
              <div className="get-in-touch-wrapper10">
                <h3 className="opening-hours17">Get In Touch</h3>
              </div>
              <div className="contact-details-child">
                <div className="frame-parent63">
                  <div className="imgicons8-3-wrapper10">
                    <img
                      className="imgicons8-317"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-3@2x.png"
                    />
                  </div>
                  <div className="frr5f3-bavupet-x17">
                    3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                    506371
                  </div>
                </div>
              </div>
              <div className="contact-links6">
                <div className="imgicons8-4-parent15">
                  <img
                    className="imgicons8-417"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-4@2x.png"
                  />
                  <div className="wrapper2">
                    <a className="a10" href="tel:+917700043030" target="_blank">
                      +91 77000 43030
                    </a>
                  </div>
                </div>
                <div className="imgicons8-5-parent15">
                  <img
                    className="imgicons8-517"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-5@2x.png"
                  />
                  <div className="infomontessorijnprimecom-wrapper15">
                    <a
                      className="infomontessorijnprimecom17"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      info@montessorijnprime.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgicons8-5-parent15">
                <img
                  className="imgicons8-417"
                  loading="lazy"
                  alt=""
                  src="/imgicons8-6@2x.png"
                />
                <a className="a10" href="tel:+917700053030" target="_blank">
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

export default InternalGalleryPage;
