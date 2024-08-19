import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent19 from "../components/FrameComponent19";
import FrameComponent25 from "../components/FrameComponent25";
import GroupComponent7 from "../components/GroupComponent7";
import { useNavigate } from "react-router-dom";
import "./ContactUsPage.css";

const ContactUsPage = () => {
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
    <div className="contact-us-page">
      <FrameComponent
        navbarAlignSelf="unset"
        navbarPadding="0rem var(--padding-3xs) var(--padding-13xl)"
        navbarWidth="88.375rem"
        logo1="/logo-1@2x.png"
        logo1IconFlexWrap="wrap"
        navMenuMinWidth="43.25rem"
        homeMinWidth="35.688rem"
      />
      <main className="contact-hero">
        <FrameComponent19
          contact="Contact"
          contactUs="Contact Us"
          image36="/image-361@2x.png"
        />
        <section className="contact-hero">
          <FrameComponent25 />
          <GroupComponent7 />
        </section>
      </main>
      <footer className="footer18">
        <div className="frame-parent64">
          <div className="frame-wrapper37">
            <div className="contact-hero">
              <img
                className="image-35-icon18"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
              <div className="montessori-prime-school-aims-p-wrapper13">
                <b className="montessori-prime-school18">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school!
                </b>
              </div>
            </div>
          </div>
          <div className="explore-content-parent">
            <div className="explore-content">
              <div className="explore-wrapper12">
                <h3 className="explore19">Explore</h3>
              </div>
              <div className="about-us-parent7">
                <div
                  className="about-us18"
                  onClick={onAboutUsTextClick}
                >{`>>About Us`}</div>
                <div
                  className="gallery18"
                  onClick={onGalleryTextClick}
                >{`>> Gallery`}</div>
                <div
                  className="events18"
                  onClick={onEventsTextClick}
                >{`>> Events`}</div>
                <div
                  className="blogs18"
                  onClick={onBlogsTextClick}
                >{`>> Blogs`}</div>
                <div
                  className="virtual-tour19"
                  onClick={onVirtualTourTextClick}
                >{`>> Virtual Tour`}</div>
                <div
                  className="privacy-policy18"
                  onClick={onPrivacyPolicyTextClick}
                >{`>>Privacy Policy`}</div>
              </div>
            </div>
            <div className="opening-hours-parent14">
              <h3 className="opening-hours18">Opening Hours</h3>
              <div className="frame-wrapper38">
                <div className="mon-800-am-500-pm-parent3">
                  <div className="mon-800-am18">Mon 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am18">Tue 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am18">Wed 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am18">Thur 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am18">Fri 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am18">Sat 8:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="get-in-touch-content-container">
            <div className="get-in-touch-content1">
              <div className="get-in-touch-wrapper11">
                <h3 className="opening-hours18">Get In Touch</h3>
              </div>
              <div className="frame-parent65">
                <div className="frame-parent66">
                  <div className="imgicons8-3-wrapper11">
                    <img
                      className="imgicons8-318"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-3@2x.png"
                    />
                  </div>
                  <div className="frr5f3-bavupet-x18">
                    3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                    506371
                  </div>
                </div>
                <div className="frame-parent67">
                  <div className="imgicons8-4-parent16">
                    <img
                      className="imgicons8-418"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-4@2x.png"
                    />
                    <div className="contact-info-labels-wrapper">
                      <a
                        className="contact-info-labels"
                        href="tel:+917700043030"
                        target="_blank"
                      >
                        +91 77000 43030
                      </a>
                    </div>
                  </div>
                  <div className="imgicons8-5-parent16">
                    <img
                      className="imgicons8-518"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-5@2x.png"
                    />
                    <div className="infomontessorijnprimecom-wrapper16">
                      <a
                        className="infomontessorijnprimecom18"
                        href="mailto:info@montessorijnprime.com"
                        target="_blank"
                      >
                        info@montessorijnprime.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="imgicons8-5-parent16">
                  <img
                    className="imgicons8-418"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-6@2x.png"
                  />
                  <a
                    className="contact-info-labels"
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
    </div>
  );
};

export default ContactUsPage;
