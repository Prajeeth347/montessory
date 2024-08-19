import CircularSliders from "./CircularSliders";
import PropTypes from "prop-types";
import "./TestFrame.css";

const TestFrame = ({ className = "" }) => {
  return (
    <section className={`test-frame ${className}`}>
      <CircularSliders />
    </section>
  );
};

TestFrame.propTypes = {
  className: PropTypes.string,
};

export default TestFrame;
