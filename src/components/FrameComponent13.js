import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent14 from "./FrameComponent14";
import AplpicationButton from "./AplpicationButton";
import PropTypes from "prop-types";
import "./FrameComponent13.css";

const FrameComponent13 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/gallery-page");
  }, [navigate]);

  return (
    <div className={`content-parent ${className}`}>
      <div className="content4">
        <div className="heading-container-parent">
          <div className="heading-container1">
            <b className="our-gallery">OUR GALLERY</b>
          </div>
          <div className="description-container">
            <h1 className="our-best-gallery">Our Best Gallery From MPS</h1>
            <div className="students-learns-in-a-unique-i-wrapper">
              <b className="students-learns-in">
                Students learns in a unique, innovative and practical
                orientation methodologies.
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container4">
        <FrameComponent14 />
      </div>
      <div className="button-container">
        <AplpicationButton
          propGap="10.6px"
          propWidth="unset"
          onGalleryTextClick={onRectangleClick}
          ellipse="/ellipse-5@2x.png"
          propWidth1="1.656rem"
          application="Explore Gallery"
          propMinWidth="7.938rem"
          propDisplay="inline-block"
        />
      </div>
    </div>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
