import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent32 from "../components/FrameComponent32";
import { useNavigate } from "react-router-dom";
import "./SchoolCalendar.css";

const SchoolCalendar = () => {
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
    <div className="school-calendar">
      <section className="frame-parent10">
        <FrameComponent
          navbarAlignSelf="unset"
          navbarPadding="0rem var(--padding-3xs)"
          navbarWidth="88.375rem"
          logo1="/logo-1@2x.png"
          logo1IconFlexWrap="unset"
          navMenuMinWidth="unset"
          homeMinWidth="unset"
        />
        <div className="instance-container">
          <FrameComponent32
            homeContact="Home / School Calendar"
            contactUs="School Calendar"
            propGap="22px"
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
          <img
            className="image-65-icon"
            loading="lazy"
            alt=""
            src="/image-65@2x.png"
          />
        </div>
      </section>
      <footer className="footer3">
        <div className="frame-parent11">
          <div className="frame-wrapper5">
            <div className="image-35-parent1">
              <img
                className="image-35-icon3"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
              <div className="montessori-prime-school-aims-p-wrapper1">
                <b className="montessori-prime-school3">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school!
                </b>
              </div>
            </div>
          </div>
          <div className="explore-container-parent">
            <div className="explore-container1">
              <div className="explore-wrapper1">
                <h3 className="explore3">Explore</h3>
              </div>
              <div className="about-us-parent1">
                <div
                  className="about-us3"
                  onClick={onAboutUsTextClick}
                >{`>>About Us`}</div>
                <div
                  className="gallery3"
                  onClick={onGalleryTextClick}
                >{`>> Gallery`}</div>
                <div
                  className="events3"
                  onClick={onEventsTextClick}
                >{`>> Events`}</div>
                <div
                  className="blogs3"
                  onClick={onBlogsTextClick}
                >{`>> Blogs`}</div>
                <div
                  className="virtual-tour3"
                  onClick={onVirtualTourTextClick}
                >{`>> Virtual Tour`}</div>
                <div
                  className="privacy-policy3"
                  onClick={onPrivacyPolicyTextClick}
                >{`>>Privacy Policy`}</div>
              </div>
            </div>
            <div className="opening-hours-parent1">
              <h3 className="opening-hours3">Opening Hours</h3>
              <div className="frame-wrapper6">
                <div className="mon-800-am-500-pm-parent">
                  <div className="mon-800-am3">Mon 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am3">Tue 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am3">Wed 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am3">Thur 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am3">Fri 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am3">Sat 8:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper7">
            <div className="frame-parent12">
              <div className="get-in-touch-wrapper1">
                <h3 className="opening-hours3">Get In Touch</h3>
              </div>
              <div className="frame-wrapper8">
                <div className="frame-parent13">
                  <div className="imgicons8-3-wrapper1">
                    <img
                      className="imgicons8-33"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-3@2x.png"
                    />
                  </div>
                  <div className="frr5f3-bavupet-x3">
                    3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                    506371
                  </div>
                </div>
              </div>
              <div className="frame-parent14">
                <div className="imgicons8-4-parent1">
                  <img
                    className="imgicons8-43"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-4@2x.png"
                  />
                  <div className="container">
                    <a
                      className="spacing"
                      href="tel:+917700043030"
                      target="_blank"
                    >
                      +91 77000 43030
                    </a>
                  </div>
                </div>
                <div className="imgicons8-5-parent1">
                  <img
                    className="imgicons8-53"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-5@2x.png"
                  />
                  <div className="infomontessorijnprimecom-wrapper1">
                    <a
                      className="infomontessorijnprimecom3"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      info@montessorijnprime.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgicons8-5-parent1">
                <img
                  className="imgicons8-43"
                  loading="lazy"
                  alt=""
                  src="/imgicons8-6@2x.png"
                />
                <a className="spacing" href="tel:+917700053030" target="_blank">
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

export default SchoolCalendar;
