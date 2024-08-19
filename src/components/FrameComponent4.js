import FrameComponent20 from "./FrameComponent20";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`infrastructure-facilities-page-inner ${className}`}>
      <FrameComponent20 />
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
