import { useCallback } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent24 from "../components/FrameComponent24";
import { useNavigate } from "react-router-dom";
import "./BlogsPage.css";

const BlogsPage = () => {
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
    <div className="blogs-page">
      <FrameComponent6 />
      <div className="aug-14-2024-parent">
        <b className="aug-14-20242">Aug 14, 2024</b>
        <a
          className="th-august-20241"
          href="https://www.montessorijnprime.com/montessori/prime/news/detail/023bbf9e7c051910b66544720910999ffea9NEWS"
          target="_blank"
        >
          15th August 2024
        </a>
        <img className="image-38-icon1" alt="" src="/image-38@2x.png" />
      </div>
      <div className="aug-14-2024-parent">
        <b className="aug-14-20242">Aug 14, 2024</b>
        <a
          className="th-august-20241"
          href="https://www.montessorijnprime.com/montessori/prime/news/detail/023bbf9e7c051910b66544720910999ffea9NEWS"
          target="_blank"
        >
          15th August 2024
        </a>
        <img className="image-38-icon1" alt="" src="/image-38@2x.png" />
      </div>
      <main className="blog-posts-wrapper">
        <section className="blog-posts">
          <div className="post-row-seven">
            <FrameComponent24 image38="/image-38@2x.png" />
            <FrameComponent24 image38="/image-38@2x.png" />
          </div>
          <div className="post-row-one">
            <div className="post-row-two">
              <FrameComponent24 image38="/image-38@2x.png" />
              <FrameComponent24 image38="/image-38@2x.png" />
            </div>
          </div>
          <div className="post-row-one">
            <div className="post-row-two">
              <FrameComponent24 image38="/image-38@2x.png" />
              <FrameComponent24 image38="/image-38@2x.png" />
            </div>
          </div>
          <div className="post-row-one2">
            <div className="post-row-two">
              <FrameComponent24 image38="/image-38@2x.png" />
              <FrameComponent24 image38="/image-38@2x.png" />
            </div>
          </div>
          <div className="post-row-one3">
            <div className="post-row-two">
              <FrameComponent24 image38="/image-38@2x.png" />
              <FrameComponent24 image38="/image-38@2x.png" />
            </div>
          </div>
          <div className="post-row-one4">
            <div className="post-row-two">
              <FrameComponent24 image38="/image-38@2x.png" />
              <FrameComponent24 image38="/image-38@2x.png" />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer15">
        <div className="frame-parent50">
          <div className="frame-wrapper29">
            <div className="image-35-parent13">
              <img
                className="image-35-icon15"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
              <div className="montessori-prime-school-aims-p-wrapper10">
                <b className="montessori-prime-school15">
                  Montessori Prime School aims primarily at the education of
                  young children without distinction of caste and creed through
                  the play way and other modern methods of imparting education,
                  in order to eradicate from their minds the fear of going to
                  school!
                </b>
              </div>
            </div>
          </div>
          <div className="frame-parent51">
            <div className="frame-parent52">
              <div className="explore-wrapper9">
                <h3 className="explore16">Explore</h3>
              </div>
              <div className="about-us-parent5">
                <div
                  className="about-us15"
                  onClick={onAboutUsTextClick}
                >{`>>About Us`}</div>
                <a
                  className="gallery15"
                  onClick={onGalleryTextClick}
                >{`>> Gallery`}</a>
                <a
                  className="events15"
                  onClick={onEventsTextClick}
                >{`>> Events`}</a>
                <div
                  className="blogs15"
                  onClick={onBlogsTextClick}
                >{`>> Blogs`}</div>
                <div
                  className="virtual-tour16"
                  onClick={onVirtualTourTextClick}
                >{`>> Virtual Tour`}</div>
                <div
                  className="privacy-policy15"
                  onClick={onPrivacyPolicyTextClick}
                >{`>>Privacy Policy`}</div>
              </div>
            </div>
            <div className="opening-hours-parent11">
              <h3 className="opening-hours15">Opening Hours</h3>
              <div className="frame-wrapper30">
                <div className="mon-800-am-500-pm-parent1">
                  <div className="mon-800-am15">Mon 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am15">Tue 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am15">Wed 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am15">Thur 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am15">Fri 8:00 am - 5:00 pm</div>
                  <div className="mon-800-am15">Sat 8:00 am - 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper31">
            <div className="frame-parent53">
              <div className="get-in-touch-wrapper8">
                <h3 className="opening-hours15">Get In Touch</h3>
              </div>
              <div className="frame-wrapper32">
                <div className="frame-parent54">
                  <div className="imgicons8-3-wrapper8">
                    <img
                      className="imgicons8-315"
                      loading="lazy"
                      alt=""
                      src="/imgicons8-3@2x.png"
                    />
                  </div>
                  <div className="frr5f3-bavupet-x15">
                    3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana
                    506371
                  </div>
                </div>
              </div>
              <div className="contact-details7">
                <div className="imgicons8-4-parent13">
                  <img
                    className="imgicons8-415"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-4@2x.png"
                  />
                  <div className="wrapper1">
                    <a className="a8" href="tel:+917700043030" target="_blank">
                      +91 77000 43030
                    </a>
                  </div>
                </div>
                <div className="imgicons8-5-parent13">
                  <img
                    className="imgicons8-515"
                    loading="lazy"
                    alt=""
                    src="/imgicons8-5@2x.png"
                  />
                  <div className="infomontessorijnprimecom-wrapper13">
                    <a
                      className="infomontessorijnprimecom15"
                      href="mailto:info@montessorijnprime.com"
                      target="_blank"
                    >
                      info@montessorijnprime.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgicons8-5-parent13">
                <img
                  className="imgicons8-415"
                  loading="lazy"
                  alt=""
                  src="/imgicons8-6@2x.png"
                />
                <a className="a8" href="tel:+917700053030" target="_blank">
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

export default BlogsPage;
