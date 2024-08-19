import PropTypes from "prop-types";
import "./GreetingsContainer.css";

const GreetingsContainer = ({
  className = "",
  educatingTheMindWithoutEducati,
}) => {
  return (
    <div className={`greetings-container ${className}`}>
      <div className="greetings">
        <div className="greetings-titles">
          <div className="greetings-from-the">
            Greetings from the Principal's Desk.
          </div>
        </div>
        <div className="highlight-shapes-group">
          <div className="highlight-shapes1" />
          <div className="quality-is-never1">
            “Quality is never an accident; it is always the result of high
            intention, sincere effort, intelligent direction and skilful
            execution; it represents the wise choice of many alternatives”
          </div>
          <div className="educating-the-mind">
            {educatingTheMindWithoutEducati}
          </div>
        </div>
      </div>
    </div>
  );
};

GreetingsContainer.propTypes = {
  className: PropTypes.string,
  educatingTheMindWithoutEducati: PropTypes.string,
};

export default GreetingsContainer;
