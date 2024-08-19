import { useMemo } from "react";
import PropTypes from "prop-types";
import "./AplpicationButton.css";

const AplpicationButton = ({
  className = "",
  propGap,
  propWidth,
  onGalleryTextClick,
  ellipse,
  propWidth1,
  application,
  propMinWidth,
  propDisplay,
}) => {
  const aplpicationButtonStyle = useMemo(() => {
    return {
      gap: propGap,
      width: propWidth,
    };
  }, [propGap, propWidth]);

  const ellipseIconStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const applicationStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  return (
    <button
      className={`aplpication-button4 ${className}`}
      style={aplpicationButtonStyle}
    >
      <div className="aplpication-button-child1" onClick={onGalleryTextClick} />
      <div className="icon-container1">
        <img
          className="ellipse-icon5"
          alt=""
          src={ellipse}
          style={ellipseIconStyle}
        />
      </div>
      <b className="application5" style={applicationStyle}>
        {application}
      </b>
    </button>
  );
};

AplpicationButton.propTypes = {
  className: PropTypes.string,
  ellipse: PropTypes.string,
  application: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,

  /** Action props */
  onGalleryTextClick: PropTypes.func,
};

export default AplpicationButton;
