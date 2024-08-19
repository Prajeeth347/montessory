import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent32.css";

const FrameComponent32 = ({
  className = "",
  homeContact,
  contactUs,
  propGap,
  propMinHeight,
  propPosition,
  propWidth,
  propHeight,
  propDisplay,
  propPosition1,
  propFontSize,
  propBottom,
  propLeft,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
      minHeight: propMinHeight,
      position: propPosition,
    };
  }, [propGap, propMinHeight, propPosition]);

  const homeContactStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      display: propDisplay,
    };
  }, [propWidth, propHeight, propDisplay]);

  const frameDiv1Style = useMemo(() => {
    return {
      position: propPosition1,
    };
  }, [propPosition1]);

  const contactUsStyle = useMemo(() => {
    return {
      fontSize: propFontSize,
    };
  }, [propFontSize]);

  const image36IconStyle = useMemo(() => {
    return {
      bottom: propBottom,
      left: propLeft,
    };
  }, [propBottom, propLeft]);

  return (
    <div className={`home-contact-parent ${className}`} style={frameDivStyle}>
      <div className="home-contact" style={homeContactStyle}>
        {homeContact}
      </div>
      <div className="contact-us-wrapper" style={frameDiv1Style}>
        <h1 className="contact-us" style={contactUsStyle}>
          {contactUs}
        </h1>
      </div>
      <img
        className="image-36-icon"
        loading="lazy"
        alt=""
        src="/image-36@2x.png"
        style={image36IconStyle}
      />
    </div>
  );
};

FrameComponent32.propTypes = {
  className: PropTypes.string,
  homeContact: PropTypes.string,
  contactUs: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propMinHeight: PropTypes.any,
  propPosition: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propPosition1: PropTypes.any,
  propFontSize: PropTypes.any,
  propBottom: PropTypes.any,
  propLeft: PropTypes.any,
};

export default FrameComponent32;
