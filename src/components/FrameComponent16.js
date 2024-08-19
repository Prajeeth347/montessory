import PropTypes from "prop-types";
import "./FrameComponent16.css";

const FrameComponent16 = ({ className = "" }) => {
  return (
    <div className={`ellipse-parent1 ${className}`}>
      <div className="instance-child" />
      <div className="i-sincerely-thank-the-manageme-container">
        <div className="i-sincerely-thank1">
          I sincerely thank the Management, Principal, and each and every member
          of the staff at Montessori Prime School for everything that they have
          done to make my son's time at school enjoyable and productive. I have
          seen my son's exponential and quick growth while reading the
          encouraging and thankful things in the messages and in Dairy. My best
          wishes to Montessori Prime School.
        </div>
      </div>
      <div className="testimonial-pic-container">
        <div className="testimonial-pic3">
          <img
            className="placeholder-icon1"
            loading="lazy"
            alt=""
            src="/frame-6-1@2x.png"
          />
        </div>
        <div className="name-and-designation">
          <div className="dr-i-rajasri1">Dr. I. Rajasri Reddy</div>
          <div className="principal-sumathi-reddy">
            Principal, Sumathi Reddy Institute of Technology for Women
          </div>
        </div>
        <img
          className="background-icon1"
          loading="lazy"
          alt=""
          src="/7350737-11@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent16.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent16;
