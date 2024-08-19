import FrameComponent17 from "./FrameComponent17";
import ChildrenCards from "./ChildrenCards";
import PropTypes from "prop-types";
import "./HeroSection.css";

const HeroSection = ({ className = "" }) => {
  return (
    <div className={`hero-section ${className}`}>
      <FrameComponent17 />
      <ChildrenCards />
      <img
        className="image-9-icon"
        loading="lazy"
        alt=""
        src="/image-9@2x.png"
      />
    </div>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;
