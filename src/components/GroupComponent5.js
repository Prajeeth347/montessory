import GroupComponent6 from "./GroupComponent6";
import PropTypes from "prop-types";
import "./GroupComponent5.css";

const GroupComponent5 = ({ className = "" }) => {
  return (
    <div className={`image-51-parent ${className}`}>
      <img
        className="image-51-icon"
        loading="lazy"
        alt=""
        src="/image-51@2x.png"
      />
      <GroupComponent6 />
    </div>
  );
};

GroupComponent5.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent5;
