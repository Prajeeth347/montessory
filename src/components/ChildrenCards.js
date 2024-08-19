import ChildCard from "./ChildCard";
import PropTypes from "prop-types";
import "./ChildrenCards.css";

const ChildrenCards = ({ className = "" }) => {
  return (
    <div className={`children-cards ${className}`}>
      <div className="child-card-wrapper">
        <div className="child-card1">
          <div className="primary-shape-wrapper">
            <img
              className="primary-shape-icon"
              loading="lazy"
              alt=""
              src="/1-2@2x.png"
            />
          </div>
          <div className="frame-parent102">
            <div className="frame-wrapper52">
              <div className="vector-group">
                <img className="frame-child14" alt="" src="/rectangle-5.svg" />
                <div className="pre-primary-wing">Pre- Primary Wing</div>
              </div>
            </div>
            <div className="a-variety-of">
              A variety of props and technologies are used to teach the concepts
              to the toddlers. They have separate activity room for their fun
              time and cots are provided for them to take rest.
            </div>
          </div>
          <div className="classes-jrkg-to-srkg-wrapper">
            <b className="classes-jrkg-to">Classes Jr.KG to Sr.KG</b>
          </div>
        </div>
      </div>
      <div className="child-card2">
        <div className="elementary-shape-holder-parent">
          <div className="elementary-shape-holder">
            <img
              className="primary-shape-icon"
              loading="lazy"
              alt=""
              src="/2-1@2x.png"
            />
          </div>
          <div className="vector-container">
            <img className="frame-child15" alt="" src="/rectangle-5-1.svg" />
            <div className="primary-wing-wrapper">
              <h2 className="primary-wing"> Primary Wing</h2>
            </div>
          </div>
          <div className="elementary-description-holder">
            <div className="the-primary-wing">
              The Primary Wing comprises of classes I to V. Formal teaching is
              introduced at this stage. Usage of technology like Interactive LED
              board and activities supports in the learning process.
            </div>
          </div>
        </div>
        <div className="grade-i-to-v-wrapper">
          <b className="grade-i-to">Grade I to V</b>
        </div>
      </div>
      <div className="child-card-container">
        <ChildCard />
      </div>
    </div>
  );
};

ChildrenCards.propTypes = {
  className: PropTypes.string,
};

export default ChildrenCards;
