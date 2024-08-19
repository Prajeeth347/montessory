import PropTypes from "prop-types";
import "./GroupComponent6.css";

const GroupComponent6 = ({ className = "" }) => {
  return (
    <div className={`introduction-parent ${className}`}>
      <h1 className="introduction">Introduction</h1>
      <div className="intro-paragraph">
        <div className="primo-enterprises-is-container">
          <p className="primo-enterprises-is">{`Primo Enterprises is the Registered partnership firm. This firm is constituted to facilitate auxiliary services to support Educational and other allied activities in respect of Montessori Group Of Schools in Telangana State. This partnership firm with all its partners have constructed Montessori Prime School at Yellapur, which is spread over 9 acres of land on the Warangal-Karimnagar highway, with all the International Standards and it has facilities like Air conditioned School Block, AC Residential accommodation separately for Girls & Boys, various play courts like Volleyball court, Badminton court, Shuttle court, Basketball court, Skating zone, Cricket zone, Athletic Track along with a Swimming pool.`}</p>
          <p className="primo-enterprises-is">&nbsp;</p>
          <p className="primo-enterprises-is">
            Primo Enterprises has given this premises to Montessori Educational
            Society, Bhupalapally to run their Educational Institutions on a
            long term lease Basis.
          </p>
        </div>
      </div>
    </div>
  );
};

GroupComponent6.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent6;
