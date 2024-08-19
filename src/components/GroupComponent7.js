import PropTypes from "prop-types";
import "./GroupComponent7.css";

const GroupComponent7 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent9 ${className}`}>
      <div className="component-child" />
      <h1 className="google-map-location-container">
        <p className="google-map-location">GOOGLE MAP LOCATION</p>
      </h1>
    </div>
  );
};

GroupComponent7.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent7;
