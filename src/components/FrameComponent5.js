import FrameComponent32 from "./FrameComponent32";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`contact-info-parent ${className}`}>
      <div className="contact-info6">
        <FrameComponent32
          homeContact="Home / Privacy Policy"
          contactUs="Mandatory Public Disclosure"
          propGap="43px"
          propMinHeight="unset"
          propPosition="relative"
          propWidth="unset"
          propHeight="unset"
          propDisplay="unset"
          propPosition1="unset"
          propFontSize="28px"
          propBottom="3.056rem"
          propLeft="9.044rem"
        />
        <img
          className="image-66-icon"
          loading="lazy"
          alt=""
          src="/image-66@2x.png"
        />
      </div>
      <img
        className="image-66-icon"
        loading="lazy"
        alt=""
        src="/image-67@2x.png"
      />
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
