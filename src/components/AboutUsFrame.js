import AplpicationButton from "./AplpicationButton";
import PropTypes from "prop-types";
import "./AboutUsFrame.css";

const AboutUsFrame = ({ className = "" }) => {
  return (
    <div className={`about-us-frame ${className}`}>
      <div className="about-images">
        <img className="image-16-icon" alt="" src="/image-16@2x.png" />
        <img className="image-11-icon" alt="" src="/image-111@2x.png" />
      </div>
      <div className="frame-parent104">
        <div className="frame-wrapper53">
          <div className="image-15-parent">
            <img className="image-15-icon" alt="" src="/image-15@2x.png" />
            <div className="about-us21">
              <div className="about-us22">About Us</div>
              <h1 className="develop-your-skills">
                Develop your skills at Montessori Prime School, anytime
              </h1>
              <div className="the-initial-years">
                The initial years of a child play a vital role in shaping
                his/her career. A well-built base is required to be set up for
                children to develop into responsible individuals. Education at
                school level doubtlessly plays an essential role in framing a
                child’s persona. At Montessori Prime School, we focus on
                holistic development of the students by inculcating
                interpersonal and communicative skills.
              </div>
              <div className="we-aim-to">
                We aim to foster creativity, discipline, responsibility, empathy
                in our students so that they become ethical citizens in future.
              </div>
              <AplpicationButton
                propGap="8px"
                propWidth="9rem"
                ellipse="/ellipse1@2x.png"
                propWidth1="1.25rem"
                application="Read More"
                propMinWidth="5.563rem"
                propDisplay="inline-block"
              />
            </div>
          </div>
        </div>
        <div className="image-grid">
          <div className="image-column">
            <div className="image-pair">
              <div className="image-row">
                <img className="image-icon8" alt="" src="/image2@2x.png" />
              </div>
              <img
                className="image-14-icon"
                loading="lazy"
                alt=""
                src="/image-14@2x.png"
              />
            </div>
          </div>
          <img
            className="image-10-icon"
            loading="lazy"
            alt=""
            src="/image-10@2x.png"
          />
          <img className="image-18-icon" alt="" src="/image-18@2x.png" />
        </div>
      </div>
      <div className="image-pair1">
        <div className="image-row1">
          <img className="image-17-icon" alt="" src="/image-17@2x.png" />
          <div className="image">
            <img className="image-13-icon" alt="" src="/image-13@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

AboutUsFrame.propTypes = {
  className: PropTypes.string,
};

export default AboutUsFrame;
