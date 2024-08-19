import PropTypes from "prop-types";
import "./FrameComponent17.css";

const FrameComponent17 = ({ className = "" }) => {
  return (
    <div className={`frame-parent99 ${className}`}>
      <div className="frame-parent100">
        <div className="our-curriculum-wrapper">
          <div className="our-curriculum">Our Curriculum</div>
        </div>
        <h1 className="we-cover-the">
          We cover the path your professional journey
        </h1>
      </div>
      <div className="a-well-drafted-curriculum-is-h-wrapper">
        <div className="a-well-drafted-container">
          <p className="a-well-drafted">
            A well drafted curriculum is helpful for the growth and development
          </p>
          <p className="a-well-drafted">
            {" "}
            of students and gives adequate experience to hone their skills.
          </p>
        </div>
      </div>
    </div>
  );
};

FrameComponent17.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent17;
