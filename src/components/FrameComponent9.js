import { useMemo } from "react";
import EventDetailed from "./EventDetailed";
import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({
  className = "",
  propAlignSelf,
  propWidth,
  rectangle10,
  image,
  imgicons82,
  propMargin,
  propPosition,
  propRight,
  propBottom,
  propDisplay,
  propFlexDirection,
  propPadding,
  propHeight,
  propMargin1,
  propTop,
  propRight1,
  propBottom1,
  propLeft,
  propAlignSelf1,
  propPosition1,
  propTop1,
  propLeft1,
}) => {
  const frameDiv10Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`event-content-parent ${className}`}
      style={frameDiv10Style}
    >
      <div className="event-content">
        <img className="event-content-child" alt="" src={rectangle10} />
        <img className="image-icon9" alt="" src={image} />
      </div>
      <div className="event-date-container">
        <div className="event-date-icon-container">
          <div className="imgicons8-2-container">
            <img className="imgicons8-22" alt="" src={imgicons82} />
            <div className="event-month">
              <div className="aug-12-20241">Aug 12, 2024</div>
            </div>
          </div>
          <a
            className="investiture-ceremony"
            href="https://www.montessorijnprime.com/montessori/prime/news/detail/850d45e4a4241910b66544720910999ffea9NEWS"
            target="_blank"
          >
            Investiture Ceremony
          </a>
        </div>
      </div>
      <EventDetailed
        propMargin={propMargin}
        propPosition={propPosition}
        propRight={propRight}
        propBottom={propBottom}
        propDisplay={propDisplay}
        propFlexDirection={propFlexDirection}
        propPadding={propPadding}
        propHeight={propHeight}
        propMargin1={propMargin1}
        propTop={propTop}
        propRight1={propRight1}
        propBottom1={propBottom1}
        propLeft={propLeft}
        propAlignSelf={propAlignSelf1}
        propPosition1={propPosition1}
        propTop1={propTop1}
        propLeft1={propLeft1}
      />
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
  rectangle10: PropTypes.string,
  image: PropTypes.string,
  imgicons82: PropTypes.string,
  propMargin: PropTypes.string,
  propPosition: PropTypes.string,
  propRight: PropTypes.string,
  propBottom: PropTypes.string,
  propDisplay: PropTypes.string,
  propFlexDirection: PropTypes.string,
  propPadding: PropTypes.string,
  propHeight: PropTypes.string,
  propMargin1: PropTypes.string,
  propTop: PropTypes.string,
  propRight1: PropTypes.string,
  propBottom1: PropTypes.string,
  propLeft: PropTypes.string,
  propAlignSelf1: PropTypes.string,
  propPosition1: PropTypes.string,
  propTop1: PropTypes.string,
  propLeft1: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent9;
