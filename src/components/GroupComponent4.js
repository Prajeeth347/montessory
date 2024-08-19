import PropTypes from "prop-types";
import "./GroupComponent4.css";

const GroupComponent4 = ({ className = "" }) => {
  return (
    <div className={`our-mission-parent ${className}`}>
      <h1 className="our-mission">
        <ol className="our-mission1">
          <li>Our Mission</li>
        </ol>
      </h1>
      <div className="mission-paragraph">
        <div className="montessori-prime-school-container1">
          <p className="montessori-faculty-have">
            Montessori Prime School is committed to the cause of quality
            education, where faculty, staff and administration, in partnership
            with parents, students and community are committed to provide a safe
            and disciplined learning environment that promotes the academic,
            intellectual, personal and social development of our children.
          </p>
          <p className="montessori-faculty-have">&nbsp;</p>
          <p className="montessori-faculty-have">
            Montessori faculty have outstanding credentials in their fields of
            expertise. We invite not only the most qualified and best teachers,
            but also individuals that understand and embrace our vision and
            institutional commitments. Montessori schools have a long history of
            challenging itself to strengthen the delivery of its curriculum by
            adopting best practices. All Montessori teachers go through various
            orientation programmes organized by the management.
          </p>
        </div>
      </div>
    </div>
  );
};

GroupComponent4.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent4;
