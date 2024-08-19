import CircularArrows from "./CircularArrows";
import PropTypes from "prop-types";
import "./CircularSliders.css";

const CircularSliders = ({ className = "" }) => {
  return (
    <div className={`circular-sliders ${className}`}>
      <div className="final-testing-slider">
        <img className="test-slide-icon" alt="" src="/test-slide@2x.png" />
        <img className="test-slide-icon" alt="" src="/test-slide-1@2x.png" />
        <img className="test-slide-icon" alt="" src="/test-slide-2@2x.png" />
      </div>
      <CircularArrows testArrows="/test-arrows.svg" />
      <CircularArrows testArrows="/test-arrows-1.svg" />
    </div>
  );
};

CircularSliders.propTypes = {
  className: PropTypes.string,
};

export default CircularSliders;
