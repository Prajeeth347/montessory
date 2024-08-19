import GreetingsContainer from "./GreetingsContainer";
import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div className={`frame-parent79 ${className}`}>
      <div className="message-headers-wrapper">
        <div className="message-headers">
          <b className="principal-message">Principal Message</b>
          <h1 className="mrs-jyotica-shafaat">
            Mrs. Jyotica Shafaat, M.Com, MBA, ICWA, B.Ed.
          </h1>
        </div>
      </div>
      <div className="message-bodies">
        <div className="message-content">
          <GreetingsContainer educatingTheMindWithoutEducati="“Educating the mind without educating the heart is no education at all.“ -Aristotle" />
          <div className="education-is-the-container">
            <p className="education-is-the">
              Education is the transmission of knowledge, skills, and character
              traits and manifests in various forms. Education teaches
              individuals to think critically, analyze information, and make
              informed decisions.
            </p>
            <p className="education-is-the">&nbsp;</p>
            <p className="education-is-the">
              Montessori Prime School nurtures with guidance, zeal, and passion
              its students to be an asset to society. Our pedagogy delves deeper
              into realms of holistic growth to prepare our children who are
              able to convert challenges into opportunities. We strive harder to
              nourish young minds so that they keep pace with an incipient
              knowledge culture which is transforming at an unparalleled tempo.
            </p>
            <p className="education-is-the">
              As a student, they are the only person responsible for their
              success. The best part of their life will start on the day they
              decide their life is their own—no one to lean on, rely on, or
              blame. They are in full control of their future.
            </p>
            <p className="education-is-the">
              "Believe with all your heart that you will do what you were made
              to do."
            </p>
            <p className="education-is-the">
              The mainstay of our pursuit is to impart a perfect amalgamation of
              values, modernity, entrepreneurship, and ethics amongst our
              students. At MPS, students are encouraged to take part and develop
              not only their skills in its activities but also as collaborators
              who can work with others with kindness. There is only one way to
              fully experience and appreciate what our school has to offer, and
              that is to visit the school.
            </p>
            <p className="education-is-the">---***---</p>
          </div>
        </div>
        <img
          className="image-54-icon"
          loading="lazy"
          alt=""
          src="/image-54@2x.png"
        />
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
