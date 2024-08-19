import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent19 from "../components/FrameComponent19";
import Desktop from "../components/Desktop";
import { useNavigate } from "react-router-dom";
import "./AboutSchoolPage.css";

const AboutSchoolPage = () => {
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
    <div className="about-school-page">
      <main className="frame-parent55">
        <FrameComponent
          navbarAlignSelf="unset"
          navbarPadding="0rem var(--padding-3xs)"
          navbarWidth="88.375rem"
          logo1="/logo-1@2x.png"
          logo1IconFlexWrap="unset"
          navMenuMinWidth="unset"
          homeMinWidth="unset"
        />
        <section className="instance-parent13">
          <FrameComponent19
            contact="About Us"
            contactUs="About Us"
            image36="/image-36@2x.png"
          />
          <Desktop />
        </section>
      </main>
      <footer className="footer16">
        <div className="footer-left-container">
          <div className="footer-left2">
            <div className="instance-parent13">
              <img
                className="image-35-icon16"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
              <div className="montessori-prime-school-aims-p-wrapper11">
                <b className="montessori-prime-school16">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school!
                </b>
              </div>
            </div>
          </div>
          <div className="frame-parent56">
            <div className="frame-parent57">
              <div className="explore-wrapper10">
                <h3 className="explore17">Explore</h3>
              </div>
              <div className="about-us-parent6">
                <div
                  className="about-us16"
                  onClick={onAboutUsTextClick}
                >{`>>About Us`}</div>
                <div
                  className="gallery16"
                  onClick={onGalleryTextClick}
                >{`>> Gallery`}</div>
                <div
                  className="events16"
                  onClick={onEventsTextClick}
                >{`>> Events`}</div>
                <div className="blogs-group">
                  <div
                    className="blogs16"
                    onClick={onBlogsTextClick}
                  >{`>> Blogs`}</div>
                  <div
                    className="virtual-tour17"
                    onClick={onVirtualTourTextClick}
                  >{`>> Virtual Tour`}</div>
                  <div
                    className="privacy-policy16"
                    onClick={onPrivacyPolicyTextClick}
                  >{`>>Privacy Policy`}</div>
                </div>
              </div>
            </div>
            <div className="opening-hours-parent12">
              <h3 className="opening-hours16">Opening Hours</h3>
              <div className="frame-wrapper33">
                <div className="mon-800-am-500-pm-parent2">
                  <div className="mon-800-am16">Mon 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am16">Tue 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am16">Wed 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am16">Thur 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am16">Fri 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am16">Sat 8:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper34">
            <div className="frame-parent58">
              <div className="get-in-touch-wrapper9">
                <h3 className="opening-hours16">Get In Touch</h3>
              </div>
              <div className="frame-wrapper35">
                <div className="frame-parent59">
                  <div className="imgicons8-3-wrapper9">
                    <img
                      className="imgicons8-316"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-3@2x.png"
                    />
                  </div>
                  <div className="frr5f3-bavupet-x16">
                    3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                    506371
                  </div>
                </div>
              </div>
              <div className="frame-parent60">
                <div className="imgicons8-4-parent14">
                  <img
                    className="imgicons8-416"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-4@2x.png"
                  />
                  <div className="email-website-wrapper">
                    <a
                      className="email-website"
                      href="tel:+917700043030"
                      target="_blank"
                    >
                      +91 77000 43030
                    </a>
                  </div>
                </div>
                <div className="imgicons8-5-parent14">
                  <img
                    className="imgicons8-516"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-5@2x.png"
                  />
                  <div className="infomontessorijnprimecom-wrapper14">
                    <a
                      className="infomontessorijnprimecom16"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      info@montessorijnprime.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgicons8-5-parent14">
                <img
                  className="imgicons8-416"
                  loading="lazy"
                  alt=""
                  src="/imgicons8-6@2x.png"
                />
                <a
                  className="email-website"
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

export default AboutSchoolPage;
