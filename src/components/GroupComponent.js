import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent4 ${className}`}>
      <div className="frame-child6" />
      <div className="blog-dates">
        <div className="blog-date-items">
          <b className="aug-14th-2024">Aug 14th 2024</b>
          <h3 className="independance-day">Independance Day</h3>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
