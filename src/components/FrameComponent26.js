import PropTypes from "prop-types";
import "./FrameComponent26.css";

const FrameComponent26 = ({ className = "" }) => {
  return (
    <div className={`frame-parent95 ${className}`}>
      <div className="hours-of-operation-parent">
        <h3 className="hours-of-operation">Hours of Operation</h3>
        <div className="monday-saturday-container">
          <p className="monday-saturday">
            Monday - Saturday: 08:00AM - 05:00PM
          </p>
          <p className="monday-saturday">Sunday : Closed</p>
        </div>
      </div>
      <img className="image-icon2" alt="" src="/image1@2x.png" />
      <img className="image-icon3" alt="" src="/image-5@2x.png" />
    </div>
  );
};

FrameComponent26.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent26;
