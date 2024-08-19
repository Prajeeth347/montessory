import { useMemo } from "react";
import FrameComponent18 from "./FrameComponent18";
import PropTypes from "prop-types";
import "./Event1.css";

const Event1 = ({
  className = "",
  propPadding,
  image39,
  propWidth,
  propAlignSelf,
}) => {
  const eventStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`event ${className}`} style={eventStyle}>
      <FrameComponent18
        propWidth={propWidth}
        propAlignSelf={propAlignSelf}
        image39={image39}
      />
    </div>
  );
};

Event1.propTypes = {
  className: PropTypes.string,
  image39: PropTypes.string,
  propWidth: PropTypes.string,
  propAlignSelf: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default Event1;
