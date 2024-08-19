import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent18.css";

const FrameComponent18 = ({
  className = "",
  propWidth,
  propAlignSelf,
  image39,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/internal-gallery-page");
  }, [navigate]);

  return (
    <div
      className={`image-39-parent ${className}`}
      onClick={onFrameContainerClick}
      style={frameDiv2Style}
    >
      <img className="image-39-icon" alt="" src={image39} />
      <div className="event-name">EVENT NAME</div>
    </div>
  );
};

FrameComponent18.propTypes = {
  className: PropTypes.string,
  image39: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent18;
