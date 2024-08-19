import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent3.css";

const GroupComponent3 = ({
  className = "",
  propWidth,
  propHeight,
  propDisplay,
  propFlexDirection,
  propPadding,
  propPosition,
  propWidth1,
  propTop,
  propLeft,
  weBelieveThatCreativeAchievemen,
  montessoriPrimeSowsTheSeeds,
  propMargin,
  propTop1,
  propLeft1,
  propWidth2,
  propDisplay1,
  creativeSkills,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      display: propDisplay,
      flexDirection: propFlexDirection,
      padding: propPadding,
    };
  }, [propWidth, propHeight, propDisplay, propFlexDirection, propPadding]);

  const ourVisionIsContainerStyle = useMemo(() => {
    return {
      position: propPosition,
      width: propWidth1,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propWidth1, propTop, propLeft]);

  const ourVisionStyle = useMemo(() => {
    return {
      margin: propMargin,
      top: propTop1,
      left: propLeft1,
      width: propWidth2,
      display: propDisplay1,
    };
  }, [propMargin, propTop1, propLeft1, propWidth2, propDisplay1]);

  return (
    <div
      className={`our-vision-is-to-be-a-premier-parent ${className}`}
      style={groupDivStyle}
    >
      <div
        className="our-vision-is-container"
        style={ourVisionIsContainerStyle}
      >
        <p className="we-believe-that">{weBelieveThatCreativeAchievemen}</p>
        <p className="we-believe-that">&nbsp;</p>
        <p className="we-believe-that">{montessoriPrimeSowsTheSeeds}</p>
      </div>
      <h1 className="our-vision" style={ourVisionStyle}>
        <ol className="creative-skills">
          <li>{creativeSkills}</li>
        </ol>
      </h1>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
  weBelieveThatCreativeAchievemen: PropTypes.string,
  montessoriPrimeSowsTheSeeds: PropTypes.string,
  creativeSkills: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propPadding: PropTypes.any,
  propPosition: PropTypes.any,
  propWidth1: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propMargin: PropTypes.any,
  propTop1: PropTypes.any,
  propLeft1: PropTypes.any,
  propWidth2: PropTypes.any,
  propDisplay1: PropTypes.any,
};

export default GroupComponent3;
