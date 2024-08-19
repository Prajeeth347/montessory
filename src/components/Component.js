import PropTypes from "prop-types";
import "./Component.css";

const Component = ({ className = "" }) => {
  return (
    <div className={`component-1 ${className}`}>
      <div className="gallery-image-pair-parent">
        <div className="gallery-image-pair">
          <img
            className="image-40-icon"
            loading="lazy"
            alt=""
            src="/image-40@2x.png"
          />
          <img
            className="image-40-icon"
            loading="lazy"
            alt=""
            src="/image-40@2x.png"
          />
          <div className="image-42-wrapper">
            <img
              className="image-42-icon"
              loading="lazy"
              alt=""
              src="/image-40@2x.png"
            />
          </div>
          <div className="image-43-wrapper">
            <img
              className="image-42-icon"
              loading="lazy"
              alt=""
              src="/image-40@2x.png"
            />
          </div>
          <img
            className="image-40-icon"
            loading="lazy"
            alt=""
            src="/image-40@2x.png"
          />
        </div>
        <div className="gallery-image-pair">
          <img
            className="image-40-icon"
            loading="lazy"
            alt=""
            src="/image-40@2x.png"
          />
          <img
            className="image-40-icon"
            loading="lazy"
            alt=""
            src="/image-40@2x.png"
          />
          <div className="image-42-wrapper">
            <img
              className="image-42-icon"
              loading="lazy"
              alt=""
              src="/image-40@2x.png"
            />
          </div>
          <div className="image-43-wrapper">
            <img
              className="image-42-icon"
              loading="lazy"
              alt=""
              src="/image-40@2x.png"
            />
          </div>
          <img
            className="image-40-icon"
            loading="lazy"
            alt=""
            src="/image-40@2x.png"
          />
        </div>
      </div>
      <div className="gallery-image-pair-parent">
        <div className="gallery-image-pair">
          <img className="image-40-icon" alt="" src="/image-40@2x.png" />
          <img className="image-40-icon" alt="" src="/image-40@2x.png" />
          <div className="image-42-wrapper">
            <img className="image-42-icon" alt="" src="/image-40@2x.png" />
          </div>
          <div className="image-43-wrapper">
            <img className="image-42-icon" alt="" src="/image-40@2x.png" />
          </div>
          <img className="image-40-icon" alt="" src="/image-40@2x.png" />
        </div>
        <div className="gallery-image-pair">
          <img className="image-40-icon" alt="" src="/image-40@2x.png" />
          <img className="image-40-icon" alt="" src="/image-40@2x.png" />
          <div className="image-42-wrapper">
            <img className="image-42-icon" alt="" src="/image-40@2x.png" />
          </div>
          <div className="image-43-wrapper">
            <img className="image-42-icon" alt="" src="/image-40@2x.png" />
          </div>
          <img className="image-40-icon" alt="" src="/image-40@2x.png" />
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
