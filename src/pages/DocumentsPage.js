import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent32 from "../components/FrameComponent32";
import { useNavigate } from "react-router-dom";
import "./DocumentsPage.css";

const DocumentsPage = () => {
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
    <div className="documents-page">
      <FrameComponent
        navbarAlignSelf="unset"
        navbarPadding="0rem var(--padding-3xs)"
        navbarWidth="88.375rem"
        logo1="/logo-1@2x.png"
        logo1IconFlexWrap="unset"
        navMenuMinWidth="unset"
        homeMinWidth="unset"
      />
      <main className="frame-main">
        <section className="image-64-wrapper">
          <img
            className="image-64-icon"
            loading="lazy"
            alt=""
            src="/image-64@2x.png"
          />
        </section>
        <section className="instance-parent">
          <FrameComponent32
            homeContact="Home / Documents"
            contactUs="Documents"
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
          <footer className="footer1">
            <div className="frame-parent2">
              <div className="frame-wrapper2">
                <div className="image-35-group">
                  <img
                    className="image-35-icon1"
                    loading="lazy"
                    alt=""
                    src="/image-35@2x.png"
                  />
                  <div className="montessori-prime-school-aims-p-container">
                    <b className="montessori-prime-school1">
                      Montessori Prime School aims primarily at the education of
                      young children without distinction of caste and creed
                      through the play way and other modern methods of imparting
                      education, in order to eradicate from their minds the fear
                      of going to school!
                    </b>
                  </div>
                </div>
              </div>
              <div className="frame-parent3">
                <div className="frame-parent4">
                  <div className="explore-container">
                    <h3 className="explore1">Explore</h3>
                  </div>
                  <div className="about-us-group">
                    <div
                      className="about-us1"
                      onClick={onAboutUsTextClick}
                    >{`>>About Us`}</div>
                    <a
                      className="gallery1"
                      onClick={onGalleryTextClick}
                    >{`>> Gallery`}</a>
                    <a
                      className="events1"
                      onClick={onEventsTextClick}
                    >{`>> Events`}</a>
                    <div
                      className="blogs1"
                      onClick={onBlogsTextClick}
                    >{`>> Blogs`}</div>
                    <div
                      className="virtual-tour1"
                      onClick={onVirtualTourTextClick}
                    >{`>> Virtual Tour`}</div>
                    <div
                      className="privacy-policy1"
                      onClick={onPrivacyPolicyTextClick}
                    >{`>>Privacy Policy`}</div>
                  </div>
                </div>
                <div className="opening-hours-group">
                  <h3 className="opening-hours1">Opening Hours</h3>
                  <div className="hours-list-wrapper">
                    <div className="hours-list">
                      <div className="mon-800-am1">Mon 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am1">Tue 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am1">Wed 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am1">Thur 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am1">Fri 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am1">Sat 8:00 am - 5:00 pm</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-wrapper3">
                <div className="frame-parent5">
                  <div className="get-in-touch-container">
                    <h3 className="opening-hours1">Get In Touch</h3>
                  </div>
                  <div className="frame-wrapper4">
                    <div className="frame-parent6">
                      <div className="imgicons8-3-container">
                        <img
                          className="imgicons8-31"
                          loading="lazy"
                          alt=""
                          src="/imgicons8-3@2x.png"
                        />
                      </div>
                      <div className="frr5f3-bavupet-x1">
                        3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                        506371
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent7">
                    <div className="imgicons8-4-group">
                      <img
                        className="imgicons8-41"
                        loading="lazy"
                        alt=""
                        src="/imgicons8-4@2x.png"
                      />
                      <div className="wrapper">
                        <a
                          className="a1"
                          href="tel:+917700043030"
                          target="_blank"
                        >
                          +91 77000 43030
                        </a>
                      </div>
                    </div>
                    <div className="imgicons8-5-group">
                      <img
                        className="imgicons8-51"
                        loading="lazy"
                        alt=""
                        src="/imgicons8-5@2x.png"
                      />
                      <div className="infomontessorijnprimecom-container">
                        <a
                          className="infomontessorijnprimecom1"
                          href="mailto:info@montessorijnprime.com"
                          target="_blank"
                        >
                          info@montessorijnprime.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="imgicons8-5-group">
                    <img
                      className="imgicons8-41"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-6@2x.png"
                    />
                    <a className="a1" href="tel:+917700053030" target="_blank">
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

export default DocumentsPage;
