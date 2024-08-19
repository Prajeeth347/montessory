import PropTypes from "prop-types";
import "./ExtraCiricullars.css";

const ExtraCiricullars = ({ className = "" }) => {
  return (
    <div className={`extra-ciricullars ${className}`}>
      <div className="image-container1">
        <img className="background-icon" alt="" src="/734322-1-2@2x.png" />
        <div className="image1">
          <img
            className="image-22-icon"
            loading="lazy"
            alt=""
            src="/image-22@2x.png"
          />
        </div>
      </div>
      <div className="music-dance-art-training-descr">
        <div className="training-description">
          <div className="training-name">
            <a
              className="music-dance-art"
              href="https://www.montessorijnprime.com/montessori/prime/"
              target="_blank"
            >
              Music, Dance, Art Training
            </a>
          </div>
          <div className="sports-plays-an">
            Sports plays an important role in the lives of students. It brings
            discipline in student’s life. Sports is helpful in the mental and
            physical development of the students. At MPS we give training to
            students with trained Coaches. A plentiful of sports like
            Volleyball, Basketball, Cricket, Football, Skating, Swimming Pool,
            Martial Arts, Ludo, Carrom, Table Tennis, Chess etc.
          </div>
        </div>
      </div>
    </div>
  );
};

ExtraCiricullars.propTypes = {
  className: PropTypes.string,
};

export default ExtraCiricullars;
