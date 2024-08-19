import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent12.css";

const FrameComponent12 = ({
  className = "",
  schoolReopeningDay202324,
  propPadding,
  prop,
  propMinWidth,
  january,
  propMinWidth1,
}) => {
  const frameDiv9Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const bStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const januaryStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`frame-parent109 ${className}`}>
      <div className="frame-parent110">
        <div className="frame-parent111">
          <div className="imgicons8-1-wrapper">
            <img className="imgicons8-1" alt="" src="/imgicons8-1@2x.png" />
          </div>
          <b className="mps-yellapur">MPS - Yellapur</b>
        </div>
        <b className="school-reopening-day">{schoolReopeningDay202324}</b>
        <b className="read-more">Read more</b>
      </div>
      <div className="frame-parent112">
        <div className="wrapper4" style={frameDiv9Style}>
          <b className="b" style={bStyle}>
            {prop}
          </b>
        </div>
        <h3 className="january" style={januaryStyle}>
          {january}
        </h3>
      </div>
    </div>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
  schoolReopeningDay202324: PropTypes.string,
  prop: PropTypes.string,
  january: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default FrameComponent12;
