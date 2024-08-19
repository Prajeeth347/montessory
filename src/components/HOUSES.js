import PropTypes from "prop-types";
import "./HOUSES.css";

const HOUSES = ({ className = "" }) => {
  return (
    <div className={`houses3 ${className}`}>
      <div className="houses-inner2">
        <div className="frame-parent84">
          <div className="house-of-warriors-parent">
            <h1 className="house-of-warriors">HOUSE OF WARRIORS</h1>
            <div className="were-the-best-container">
              <p className="were-the-best">
                We’re the Best, A Golden Chest, A Treasure Fest, Is on a Quest.
              </p>
              <p className="were-the-best">
                If you’re looking for the best. We’re right here, we’re the
                best!
              </p>
            </div>
          </div>
          <div className="frame-parent85">
            <div className="frame-parent86">
              <div className="frame-wrapper50">
                <div className="image-56-parent1">
                  <img
                    className="image-56-icon3"
                    alt=""
                    src="/image-56@2x.png"
                  />
                  <div className="we-think-we-do-we-win-wrapper">
                    <div className="we-think-we">we think, we do, we win</div>
                  </div>
                </div>
              </div>
              <div className="image-58-parent1">
                <img className="image-58-icon3" alt="" src="/image-58@2x.png" />
                <div className="perseverance-courage-wrapper">
                  <div className="perseverance-courage">{`Perseverance & Courage`}</div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper51">
              <div className="image-57-parent1">
                <img className="image-57-icon3" alt="" src="/image-57@2x.png" />
                <div className="coral-light-red-wrapper">
                  <div className="coral-light-red">Coral Light Red</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="image-55-icon3" alt="" src="/image-55-3@2x.png" />
    </div>
  );
};

HOUSES.propTypes = {
  className: PropTypes.string,
};

export default HOUSES;
