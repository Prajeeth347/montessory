import { useMemo } from "react";
import PropTypes from "prop-types";
import "./TestimonialImages.css";

const TestimonialImages = ({
  className = "",
  emptyImage,
  ramuChanda,
  propMinWidth,
}) => {
  const ramuChandaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`testimonial-images ${className}`}>
      <div className="testimonial-pic">
        <img
          className="empty-image-icon"
          loading="lazy"
          alt=""
          src={emptyImage}
        />
      </div>
      <div className="ramu-chanda-wrapper">
        <b className="ramu-chanda" style={ramuChandaStyle}>
          {ramuChanda}
        </b>
      </div>
    </div>
  );
};

TestimonialImages.propTypes = {
  className: PropTypes.string,
  emptyImage: PropTypes.string,
  ramuChanda: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default TestimonialImages;
