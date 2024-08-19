import FrameComponent32 from "./FrameComponent32";
import FrameComponent30 from "./FrameComponent30";
import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={`instance-parent15 ${className}`}>
      <FrameComponent32
        homeContact="Home / Our Founder and Teachers"
        contactUs="Our Founder and Teachers"
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
      <FrameComponent30 />
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
