import PropTypes from "prop-types";
import "./CircularArrows.css";

const CircularArrows = ({ className = "", testArrows }) => {
  return (
    <div className={`circular-arrows ${className}`}>
      <img className="circular-arrows-child" alt="" src="/group-84.svg" />
      <img className="test-arrows-icon" alt="" src={testArrows} />
    </div>
  );
};

CircularArrows.propTypes = {
  className: PropTypes.string,
  testArrows: PropTypes.string,
};

export default CircularArrows;
