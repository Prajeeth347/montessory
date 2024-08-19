import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent32 from "../components/FrameComponent32";
import HOUSES from "../components/HOUSES";
import { useNavigate } from "react-router-dom";
import "./HOUSESYSTEMPAGE.css";

const HOUSESYSTEMPAGE = () => {
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
    <div className="house-system-page">
      <FrameComponent
        navbarAlignSelf="unset"
        navbarPadding="0rem var(--padding-3xs) var(--padding-7xs)"
        navbarWidth="88.375rem"
        logo1="/logo-1@2x.png"
        logo1IconFlexWrap="unset"
        navMenuMinWidth="unset"
        homeMinWidth="unset"
      />
      <main className="instance-parent8">
        <FrameComponent32
          homeContact="Home / House System"
          contactUs="House System"
          propGap="43px"
          propMinHeight="unset"
          propPosition="relative"
          propWidth="10.563rem"
          propHeight="1.125rem"
          propDisplay="inline-block"
          propPosition1="unset"
          propFontSize="48px"
          propBottom="3.056rem"
          propLeft="9.044rem"
        />
        <section className="houses-parent">
          <div className="houses">
            <img
              className="image-55-icon"
              loading="lazy"
              alt=""
              src="/image-55@2x.png"
            />
            <div className="houses-inner">
              <div className="frame-parent35">
                <div className="house-of-achievers-parent">
                  <h1 className="house-of-achievers">HOUSE OF ACHIEVERS</h1>
                  <div className="to-instill-in">
                    To instill in pupils the art of self – discipline, self –
                    governance and team spirit we have constituted Four Houses.
                    To promote healthy and competitive spirit among the school
                    children we have Inter House competitions under the guidance
                    of the Principal and House Mentors. The school children
                    along with the teaching staff are given opportunity to
                    participate in various activities through different houses.
                  </div>
                </div>
                <div className="frame-parent36">
                  <div className="frame-parent37">
                    <div className="frame-wrapper19">
                      <div className="image-56-parent">
                        <img
                          className="image-56-icon"
                          loading="lazy"
                          alt=""
                          src="/image-56@2x.png"
                        />
                        <div className="all-for-one-and-one-for-all-wrapper">
                          <div className="all-for-one">
                            All for one and one for all
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="image-58-parent">
                      <img
                        className="image-58-icon"
                        loading="lazy"
                        alt=""
                        src="/image-58@2x.png"
                      />
                      <div className="team-spirit-wrapper">
                        <div className="team-spirit">Team Spirit</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper20">
                    <div className="image-57-parent">
                      <img
                        className="image-57-icon"
                        loading="lazy"
                        alt=""
                        src="/image-57@2x.png"
                      />
                      <div className="steel-blue-wrapper">
                        <div className="steel-blue">Steel Blue</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="houses1">
            <div className="houses-child">
              <div className="frame-parent38">
                <div className="house-of-achievers-parent">
                  <h1 className="house-of-challengers">HOUSE OF CHALLENGERS</h1>
                  <div className="to-instill-in">{`Don’t wait until everything is just right, It will never be perfect, There will always be challenges, obstacles and, less than perfect Conditions. So what? Get started how with each step you take, You’ll know stranger & stranger, More and more skilled, more & more Self – confident and more & more successful.`}</div>
                </div>
                <div className="frame-parent39">
                  <div className="frame-parent40">
                    <div className="frame-wrapper21">
                      <div className="image-56-group">
                        <img
                          className="image-56-icon1"
                          alt=""
                          src="/image-56@2x.png"
                        />
                        <div className="all-for-one-and-one-for-all-wrapper">
                          <div className="self-confident">Self confident</div>
                        </div>
                      </div>
                    </div>
                    <div className="image-58-parent">
                      <img
                        className="image-58-icon"
                        alt=""
                        src="/image-58@2x.png"
                      />
                      <div className="team-spirit-wrapper">
                        <div className="captures-attention">
                          Captures attention
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper20">
                    <div className="image-57-parent">
                      <img
                        className="image-57-icon1"
                        alt=""
                        src="/image-57@2x.png"
                      />
                      <div className="steel-blue-wrapper">
                        <div className="cadmium-yellow">Cadmium Yellow</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="image-55-icon1" alt="" src="/image-55-1@2x.png" />
          </div>
          <div className="houses">
            <img className="image-55-icon" alt="" src="/image-55-2@2x.png" />
            <div className="houses-inner">
              <div className="frame-parent41">
                <div className="house-of-achievers-parent">
                  <h1 className="house-of-achievers">HOUSE OF RANGERS</h1>
                  <div className="to-instill-in">{`We’ve got pride: we’ve got fire, We are brave, we’ll reach higher, We are strong; and will Rock, Like the rising Sun, We’ll be number one, We are the Rangers, Stand, Tall & Firing With all the right, Here we come, to win your hearts.`}</div>
                </div>
                <div className="frame-parent42">
                  <div className="frame-parent43">
                    <div className="frame-wrapper19">
                      <div className="image-56-parent">
                        <img
                          className="image-56-icon1"
                          alt=""
                          src="/image-56@2x.png"
                        />
                        <div className="live-for-today-and-reach-for-t-wrapper">
                          <div className="live-for-today">
                            Live for today and reach for tomorrow
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="image-58-parent">
                      <img
                        className="image-58-icon"
                        alt=""
                        src="/image-58@2x.png"
                      />
                      <div className="team-spirit-wrapper">
                        <div className="captures-attention">
                          Respect for the Planet
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper20">
                    <div className="image-57-parent">
                      <img
                        className="image-57-icon"
                        alt=""
                        src="/image-57@2x.png"
                      />
                      <div className="steel-blue-wrapper">
                        <div className="lime-green">Lime Green</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HOUSES />
        </section>
      </main>
      <footer className="footer13">
        <div className="frame-parent44">
          <div className="frame-wrapper25">
            <div className="instance-parent8">
              <img
                className="image-35-icon13"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
              <div className="montessori-prime-school-aims-p-wrapper8">
                <b className="montessori-prime-school13">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school!
                </b>
              </div>
            </div>
          </div>
          <div className="frame-parent45">
            <div className="frame-parent46">
              <div className="explore-wrapper8">
                <h3 className="explore13">Explore</h3>
              </div>
              <div className="about-us-parent4">
                <div
                  className="about-us13"
                  onClick={onAboutUsTextClick}
                >{`>>About Us`}</div>
                <div
                  className="gallery13"
                  onClick={onGalleryTextClick}
                >{`>> Gallery`}</div>
                <div
                  className="events13"
                  onClick={onEventsTextClick}
                >{`>> Events`}</div>
                <div className="blogs-parent">
                  <div
                    className="blogs13"
                    onClick={onBlogsTextClick}
                  >{`>> Blogs`}</div>
                  <div
                    className="virtual-tour14"
                    onClick={onVirtualTourTextClick}
                  >{`>> Virtual Tour`}</div>
                  <div
                    className="privacy-policy13"
                    onClick={onPrivacyPolicyTextClick}
                  >{`>>Privacy Policy`}</div>
                </div>
              </div>
            </div>
            <div className="opening-hours-parent10">
              <h3 className="opening-hours13">Opening Hours</h3>
              <div className="frame-wrapper26">
                <div className="mon-800-am-500-pm-container">
                  <div className="mon-800-am13">Mon 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am13">Tue 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am13">Wed 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am13">Thur 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am13">Fri 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am13">Sat 8:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper27">
            <div className="frame-parent47">
              <div className="get-in-touch-wrapper7">
                <h3 className="opening-hours13">Get In Touch</h3>
              </div>
              <div className="frame-wrapper28">
                <div className="frame-parent48">
                  <div className="imgicons8-3-wrapper7">
                    <img
                      className="imgicons8-313"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-3@2x.png"
                    />
                  </div>
                  <div className="frr5f3-bavupet-x13">
                    3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                    506371
                  </div>
                </div>
              </div>
              <div className="frame-parent49">
                <div className="imgicons8-4-parent11">
                  <img
                    className="imgicons8-413"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-4@2x.png"
                  />
                  <div className="info">
                    <a
                      className="email2"
                      href="tel:+917700043030"
                      target="_blank"
                    >
                      +91 77000 43030
                    </a>
                  </div>
                </div>
                <div className="imgicons8-5-parent11">
                  <img
                    className="imgicons8-513"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-5@2x.png"
                  />
                  <div className="frame-wrapper20">
                    <a
                      className="infomontessorijnprimecom13"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      info@montessorijnprime.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgicons8-5-parent11">
                <img
                  className="imgicons8-413"
                  loading="lazy"
                  alt=""
                  src="/imgicons8-6@2x.png"
                />
                <a className="email2" href="tel:+917700053030" target="_blank">
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

export default HOUSESYSTEMPAGE;
