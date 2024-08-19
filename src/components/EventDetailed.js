import { useMemo } from "react";
import PropTypes from "prop-types";
import "./EventDetailed.css";

const EventDetailed = ({
  className = "",
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
  onEllipseClick,
  propAlignSelf,
  propPosition1,
  propTop1,
  propLeft1,
}) => {
  const eventDetailedStyle = useMemo(() => {
    return {
      margin: propMargin,
      position: propPosition,
      right: propRight,
      bottom: propBottom,
      display: propDisplay,
      flexDirection: propFlexDirection,
      padding: propPadding,
      height: propHeight,
    };
  }, [
    propMargin,
    propPosition,
    propRight,
    propBottom,
    propDisplay,
    propFlexDirection,
    propPadding,
    propHeight,
  ]);

  const shortDetailIndicatorStyle = useMemo(() => {
    return {
      margin: propMargin1,
      top: propTop,
      right: propRight1,
      bottom: propBottom1,
      left: propLeft,
    };
  }, [propMargin1, propTop, propRight1, propBottom1, propLeft]);

  const b1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition1,
      top: propTop1,
      left: propLeft1,
    };
  }, [propAlignSelf, propPosition1, propTop1, propLeft1]);

  return (
    <div className={`event-detailed ${className}`} style={eventDetailedStyle}>
      <div
        className="short-detail-indicator"
        style={shortDetailIndicatorStyle}
        onClick={onEllipseClick}
      />
      <b className="b1" style={b1Style}>{`-->`}</b>
    </div>
  );
};

EventDetailed.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMargin: PropTypes.any,
  propPosition: PropTypes.any,
  propRight: PropTypes.any,
  propBottom: PropTypes.any,
  propDisplay: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propMargin1: PropTypes.any,
  propTop: PropTypes.any,
  propRight1: PropTypes.any,
  propBottom1: PropTypes.any,
  propLeft: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPosition1: PropTypes.any,
  propTop1: PropTypes.any,
  propLeft1: PropTypes.any,

  /** Action props */
  onEllipseClick: PropTypes.func,
};

export default EventDetailed;
