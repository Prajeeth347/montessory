import AplpicationButton from "./AplpicationButton";
import PropTypes from "prop-types";
import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <div className={`image-32-parent ${className}`}>
      <img
        className="image-32-icon"
        loading="lazy"
        alt=""
        src="/image-32@2x.png"
      />
      <div className="form-container">
        <form className="content5">
          <div className="form-fields">
            <div className="field-container">
              <div className="field">
                <img className="image-33-icon" alt="" src="/image-33@2x.png" />
                <div className="frame-parent113">
                  <div className="quick-enquiry-wrapper">
                    <b className="quick-enquiry">QUICK ENQUIRY</b>
                  </div>
                  <h1 className="get-in-touch24">Get in touch</h1>
                  <b className="montessori-prime-school27">
                    Montessori Prime School aims primarily at the education of
                    young children without distinction of imparting education to
                    school.
                  </b>
                </div>
                <div className="rectangle-parent10">
                  <div className="frame-child16" />
                  <input
                    className="enter-your-mobile"
                    placeholder="Enter your mobile number"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="rectangle-parent11">
              <div className="frame-child16" />
              <input
                className="enter-your-name1"
                placeholder="Enter your name"
                type="text"
              />
            </div>
          </div>
          <div className="button-container1">
            <AplpicationButton
              ellipse="/ellipse-7@2x.png"
              application="Get in touch"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
