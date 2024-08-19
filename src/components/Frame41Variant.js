import GroupComponent1 from "./GroupComponent1";
import GroupComponent2 from "./GroupComponent2";
import PropTypes from "prop-types";
import "./Frame41Variant.css";

const Frame41Variant = ({ className = "" }) => {
  return (
    <section className={`frame-41variant3 ${className}`}>
      <GroupComponent1 />
      <GroupComponent2 />
    </section>
  );
};

Frame41Variant.propTypes = {
  className: PropTypes.string,
};

export default Frame41Variant;
