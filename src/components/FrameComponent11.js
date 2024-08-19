import FrameComponent12 from "./FrameComponent12";
import AplpicationButton from "./AplpicationButton";
import PropTypes from "prop-types";
import "./FrameComponent11.css";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <div className={`latest-events-parent ${className}`}>
      <b className="latest-events">Latest Events</b>
      <h1 className="our-upcoming-events">Our Upcoming Events</h1>
      <b className="montessori-prime-school26">
        Montessori Prime School aims primarily at the education of young
        children without distinction of imparting education to school.
      </b>
      <FrameComponent12
        schoolReopeningDay202324="15th August 2024"
        propPadding="0rem var(--padding-lgi)"
        prop="15"
        propMinWidth="2.563rem"
        january="August"
        propMinWidth1="4.938rem"
      />
      <FrameComponent12
        schoolReopeningDay202324="Investiture Ceremony 2024"
        propPadding="0rem var(--padding-mid) 0rem var(--padding-lgi)"
        prop="10"
        propMinWidth="2.688rem"
        january="August"
        propMinWidth1="4.938rem"
      />
      <FrameComponent12
        schoolReopeningDay202324="School Reopening Day 2023-24"
        prop="12"
        january="January"
      />
      <img className="image-31-icon" alt="" src="/image-31@2x.png" />
      <AplpicationButton
        propGap="12.9px"
        propWidth="unset"
        ellipse="/ellipse-6@2x.png"
        propWidth1="2.006rem"
        application="View more events"
        propMinWidth="unset"
        propDisplay="unset"
      />
    </div>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
