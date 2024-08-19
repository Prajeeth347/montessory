import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent15.css";

const FrameComponent15 = ({
  className = "",
  propWidth,
  propPadding,
  propFlex,
  prop,
  propFlex1,
  propDisplay,
  propMinWidth,
  funfactsShapesaabdcee,
  propLeft,
  sATISFACTIONRATE,
}) => {
  const frameDiv7Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const frameDiv8Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const divStyle = useMemo(() => {
    return {
      flex: propFlex1,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propFlex1, propDisplay, propMinWidth]);

  const funfactsShapes74a2ab2763dceeIconStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={`frame-parent107 ${className}`}>
      <div className="frame-wrapper54" style={frameDiv7Style}>
        <div className="group" style={frameDiv8Style}>
          <div className="div" style={divStyle}>
            {prop}
          </div>
          <img
            className="funfacts-shapes74a2ab2763dcee-icon"
            alt=""
            src={funfactsShapesaabdcee}
            style={funfactsShapes74a2ab2763dceeIconStyle}
          />
        </div>
      </div>
      <div className="satisfaction-rate">{sATISFACTIONRATE}</div>
    </div>
  );
};

FrameComponent15.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  funfactsShapesaabdcee: PropTypes.string,
  sATISFACTIONRATE: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propFlex1: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propLeft: PropTypes.any,
};

export default FrameComponent15;
