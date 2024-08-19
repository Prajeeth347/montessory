import PropTypes from "prop-types";
import "./ChildCard.css";

const ChildCard = ({ className = "" }) => {
  return (
    <div className={`child-card ${className}`}>
      <div className="frame-parent101">
        <div className="middle-school-shape-wrapper">
          <img
            className="middle-school-shape"
            loading="lazy"
            alt=""
            src="/3-1@2x.png"
          />
        </div>
        <div className="high-school-grade-vi-to-x-parent">
          <div className="high-school-grade">High School (Grade VI to X)</div>
          <div className="middle-school-description-hold">
            <div className="the-middle-wing">
              The Middle wing comprises of Classes VI to VIII and are the
              important years for pupil to achieve their goals.Apart from the
              main subjects, a foreign language is also taught to students.
              Proper guidance is given so that students are able to understand
              their interest according to their potential.
            </div>
          </div>
        </div>
      </div>
      <img className="child-card-child" alt="" src="/rectangle-5-2.svg" />
      <div className="grade-vi-to-x-wrapper">
        <b className="grade-vi-to">Grade VI to X</b>
      </div>
    </div>
  );
};

ChildCard.propTypes = {
  className: PropTypes.string,
};

export default ChildCard;
