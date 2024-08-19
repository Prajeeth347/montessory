import FrameComponent32 from "./FrameComponent32";
import FrameComponent22 from "./FrameComponent22";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`instance-parent16 ${className}`}>
      <FrameComponent32
        homeContact="Home / Infrastructure Facilities"
        contactUs="Infrastructure Facilities"
        propGap="22px"
        propMinHeight="unset"
        propPosition="unset"
        propWidth="10.375rem"
        propHeight="unset"
        propDisplay="inline-block"
        propPosition1="relative"
        propFontSize="48px"
        propBottom="0.744rem"
        propLeft="6.481rem"
      />
      <FrameComponent22 />
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
