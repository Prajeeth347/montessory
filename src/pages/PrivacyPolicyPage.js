import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent32 from "../components/FrameComponent32";
import FrameComponent28 from "../components/FrameComponent28";
import { useNavigate } from "react-router-dom";
import "./PrivacyPolicyPage.css";

const PrivacyPolicyPage = () => {
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
    <div className="privacy-policy-page">
      <FrameComponent
        navbarAlignSelf="unset"
        navbarPadding="0rem var(--padding-3xs)"
        navbarWidth="88.375rem"
        logo1="/logo-1@2x.png"
        logo1IconFlexWrap="unset"
        navMenuMinWidth="unset"
        homeMinWidth="unset"
      />
      <main className="instance-parent6">
        <FrameComponent32
          homeContact="Home / Privacy Policy"
          contactUs="Privacy Policy"
          propGap="43px"
          propMinHeight="unset"
          propPosition="relative"
          propWidth="unset"
          propHeight="unset"
          propDisplay="unset"
          propPosition1="unset"
          propFontSize="48px"
          propBottom="3.056rem"
          propLeft="9.044rem"
        />
        <section className="instance-parent6">
          <FrameComponent28 />
          <footer className="footer12">
            <div className="frame-parent29">
              <div className="frame-wrapper15">
                <div className="instance-parent6">
                  <img
                    className="image-35-icon12"
                    loading="lazy"
                    alt=""
                    src="/image-35@2x.png"
                  />
                  <div className="montessori-prime-school-aims-p-wrapper7">
                    <b className="montessori-prime-school12">
                      Montessori Prime School aims primarily at the education of
                      young children without distinction of caste and creed
                      through the play way and other modern methods of imparting
                      education, in order to eradicate from their minds the fear
                      of going to school!
                    </b>
                  </div>
                </div>
              </div>
              <div className="frame-parent30">
                <div className="frame-parent31">
                  <div className="explore-wrapper7">
                    <h3 className="explore12">Explore</h3>
                  </div>
                  <div className="about-us-parent3">
                    <div
                      className="about-us12"
                      onClick={onAboutUsTextClick}
                    >{`>>About Us`}</div>
                    <div
                      className="gallery12"
                      onClick={onGalleryTextClick}
                    >{`>> Gallery`}</div>
                    <div
                      className="events12"
                      onClick={onEventsTextClick}
                    >{`>> Events`}</div>
                    <div
                      className="blogs12"
                      onClick={onBlogsTextClick}
                    >{`>> Blogs`}</div>
                    <div
                      className="virtual-tour13"
                      onClick={onVirtualTourTextClick}
                    >{`>> Virtual Tour`}</div>
                    <div
                      className="privacy-policy12"
                      onClick={onPrivacyPolicyTextClick}
                    >{`>>Privacy Policy`}</div>
                  </div>
                </div>
                <div className="opening-hours-parent9">
                  <h3 className="opening-hours12">Opening Hours</h3>
                  <div className="frame-wrapper16">
                    <div className="mon-800-am-500-pm-group">
                      <div className="mon-800-am12">Mon 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am12">Tue 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am12">Wed 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am12">Thur 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am12">Fri 8:00 am - 5:00 pm</div>
                      <div className="mon-800-am12">Sat 8:00 am - 5:00 pm</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-wrapper17">
                <div className="frame-parent32">
                  <div className="get-in-touch-wrapper6">
                    <h3 className="opening-hours12">Get In Touch</h3>
                  </div>
                  <div className="frame-wrapper18">
                    <div className="frame-parent33">
                      <div className="imgicons8-3-wrapper6">
                        <img
                          className="imgicons8-312"
                          loading="lazy"
                          alt=""
                          src="/imgicons8-3@2x.png"
                        />
                      </div>
                      <div className="frr5f3-bavupet-x12">
                        3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                        506371
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent34">
                    <div className="imgicons8-4-parent10">
                      <img
                        className="imgicons8-412"
                        loading="lazy"
                        alt=""
                        src="/imgicons8-4@2x.png"
                      />
                      <div className="contact-labels-container">
                        <a
                          className="contact-labels1"
                          href="tel:+917700043030"
                          target="_blank"
                        >
                          +91 77000 43030
                        </a>
                      </div>
                    </div>
                    <div className="imgicons8-5-parent10">
                      <img
                        className="imgicons8-512"
                        loading="lazy"
                        alt=""
                        src="/imgicons8-5@2x.png"
                      />
                      <div className="infomontessorijnprimecom-wrapper10">
                        <a
                          className="infomontessorijnprimecom12"
                          href="mailto:info@montessorijnprime.com"
                          target="_blank"
                        >
                          info@montessorijnprime.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="imgicons8-5-parent10">
                    <img
                      className="imgicons8-412"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-6@2x.png"
                    />
                    <a
                      className="contact-labels1"
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

export default PrivacyPolicyPage;
