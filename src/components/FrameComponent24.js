import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent24.css";

const FrameComponent24 = ({ className = "", image38 }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/internal-blog-page");
  }, [navigate]);

  return (
    <div
      className={`frame-parent92 ${className}`}
      onClick={onFrameContainerClick}
    >
      <div className="image-38-container">
        <img className="image-38-icon3" alt="" src={image38} />
      </div>
      <b className="aug-14-20245">Aug 14, 2024</b>
      <div className="th-august-2024-wrapper">
        <a
          className="th-august-20245"
          href="https://www.montessorijnprime.com/montessori/prime/news/detail/023bbf9e7c051910b66544720910999ffea9NEWS"
          target="_blank"
        >
          15th August 2024
        </a>
      </div>
    </div>
  );
};

FrameComponent24.propTypes = {
  className: PropTypes.string,
  image38: PropTypes.string,
};

export default FrameComponent24;
