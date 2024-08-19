import TestimonialImages from "./TestimonialImages";
import PropTypes from "prop-types";
import "./FrameComponent31.css";

const FrameComponent31 = ({ className = "" }) => {
  return (
    <div className={`frame-parent69 ${className}`}>
      <div className="frame-wrapper39">
        <div className="ellipse-parent">
          <div className="frame-child" />
          <div className="i-am-b-s-r-prasad-father-o-wrapper">
            <div className="i-am-b">{`I am B. S. R. Prasad, father of B. Bhavish who is studying in 6th standard. We decided to join him in hostel as we both are Employees. There are many things that I admire about the school, Friendly and safe environment, brilliant teachers and modern learning. Along with regular academics, IIT & NEET are also being taught by excellent teachers. My son is actively participating in co- curricular activities like cricket ,Music (Drums) and he is doing well in it. I am very much satisfied with the hostel facilities and food. We are happy and fortunate to have chosen Montessori Prime School as our Son’s centre of learning. Much Gratitude any many thanks!!!`}</div>
          </div>
          <img className="empty-icon" alt="" src="/7350737-1@2x.png" />
        </div>
      </div>
      <TestimonialImages
        emptyImage="/frame-6-3@2x.png"
        ramuChanda="B. S. R. Prasad"
        propMinWidth="7rem"
      />
    </div>
  );
};

FrameComponent31.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent31;
