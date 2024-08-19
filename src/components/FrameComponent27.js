import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent27.css";

const FrameComponent27 = ({ className = "" }) => {
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
    <div className={`frame-parent72 ${className}`}>
      <div className="highlight-shapes-parent">
        <div className="highlight-shapes" />
        <input
          className="main-entrance"
          placeholder="Main Entrance"
          type="text"
        />
      </div>
      <div className="rectangle-parent">
        <div className="rectangle-div" />
        <h1 className="map-view">MAP VIEW</h1>
      </div>
      <div className="highlight-shapes-parent">
        <div className="highlight-shapes" />
        <div className="admin-office">Admin Office</div>
      </div>
      <div className="highlight-shapes-parent">
        <div className="highlight-shapes" />
        <div className="admin-office">Kinder Garten Class</div>
      </div>
      <div className="highlight-shapes-parent">
        <div className="highlight-shapes" />
        <div className="admin-office">II Class</div>
      </div>
      <div className="highlight-shapes-parent">
        <div className="highlight-shapes" />
        <div className="admin-office">Main IV Class</div>
      </div>
      <div className="highlight-shapes-parent">
        <div className="highlight-shapes" />
        <div className="admin-office">and many more...</div>
      </div>
      <div className="footer19">
        <div className="frame-parent73">
          <div className="image-35-parent17">
            <img className="image-35-icon19" alt="" src="/image-35@2x.png" />
            <b className="montessori-prime-school19">
              Montessori Prime School aims primarily at the education of young
              children without distinction of caste and creed through the play
              way and other modern methods of imparting education, in order to
              eradicate from their minds the fear of going to school!
            </b>
          </div>
          <div
            className="about-us19"
            onClick={onAboutUsTextClick}
          >{`>>About Us`}</div>
          <div
            className="gallery19"
            onClick={onGalleryTextClick}
          >{`>> Gallery`}</div>
          <div
            className="events19"
            onClick={onEventsTextClick}
          >{`>> Events`}</div>
          <div className="blogs19" onClick={onBlogsTextClick}>{`>> Blogs`}</div>
          <div
            className="virtual-tour21"
            onClick={onVirtualTourTextClick}
          >{`>> Virtual Tour`}</div>
          <div
            className="privacy-policy19"
            onClick={onPrivacyPolicyTextClick}
          >{`>>Privacy Policy`}</div>
          <div className="mon-800-am-500-pm-parent4">
            <div className="mon-800-am19">Mon 8:00 am - 5:00 pm</div>
            <div className="mon-800-am19">Tue 8:00 am - 5:00 pm</div>
            <div className="mon-800-am19">Wed 8:00 am - 5:00 pm</div>
            <div className="mon-800-am19">Thur 8:00 am - 5:00 pm</div>
            <div className="mon-800-am19">Fri 8:00 am - 5:00 pm</div>
            <div className="mon-800-am19">Sat 8:00 am - 5:00 pm</div>
          </div>
          <div className="imgicons8-3-parent">
            <img className="imgicons8-319" alt="" src="/imgicons8-3@2x.png" />
            <div className="frr5f3-bavupet-x19">
              3FRR+5F3, Bavupet, X Road, Yellapur, Warangal, Telangana 506371
            </div>
          </div>
          <div className="imgicons8-5-parent17">
            <img className="imgicons8-519" alt="" src="/imgicons8-5@2x.png" />
            <a
              className="infomontessorijnprimecom19"
              href="mailto:info@montessorijnprime.com"
              target="_blank"
            >
              info@montessorijnprime.com
            </a>
          </div>
          <b className="explore20">Explore</b>
          <b className="opening-hours19">Opening Hours</b>
          <b className="get-in-touch21">Get In Touch</b>
          <div className="imgicons8-6-parent17">
            <img className="imgicons8-619" alt="" src="/imgicons8-6@2x.png" />
            <a className="a11" href="tel:+917700053030" target="_blank">
              +91 77000 53030
            </a>
          </div>
          <div className="imgicons8-4-parent17">
            <img className="imgicons8-419" alt="" src="/imgicons8-4@2x.png" />
            <a className="a12" href="tel:+917700043030" target="_blank">
              +91 77000 43030
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent27.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent27;
