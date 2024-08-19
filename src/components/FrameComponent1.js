import FrameComponent11 from "./FrameComponent11";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`instance-parent18 ${className}`}>
      <FrameComponent11 />
      <img
        className="image-31-icon1"
        loading="lazy"
        alt=""
        src="/image-31@2x.png"
      />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
