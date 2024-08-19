import GreetingsContainer from "./GreetingsContainer";
import PropTypes from "prop-types";
import "./GroupComponent2.css";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <div className={`frame-parent80 ${className}`}>
      <div className="frame-wrapper47">
        <div className="vice-principal-message-parent">
          <b className="vice-principal-message">Vice Principal Message</b>
          <h1 className="mrs-t-kalyani">Mrs. T KALYANI, B.Tech, B.Ed.</h1>
        </div>
      </div>
      <div className="frame-parent81">
        <div className="frame-parent82">
          <GreetingsContainer educatingTheMindWithoutEducati="“Learning is not a process which is limited to schools, rather it’s a lifelong process.”" />
          <div className="we-as-a-container">
            <p className="we-as-a">
              We as a Montessori Prime School family are committed to shape our
              students as warriors and challengers. We believe every child is a
              gem with his own unique caliber. Therefore we focus on the
              improvement of students’ logical, analytical and problem solving
              skills. For this application based teaching is implemented across
              the school meticulously. Let our children be the torch- bearers
              and passionate leaders of the nation. Our best wishes are always
              with the students and parents.
            </p>
            <p className="we-as-a">---***---</p>
          </div>
        </div>
        <img className="image-54-icon1" alt="" src="/image-54-1@2x.png" />
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
