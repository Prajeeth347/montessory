import PropTypes from "prop-types";
import "./QueryForm.css";

const QueryForm = ({ className = "" }) => {
  return (
    <div className={`query-form ${className}`}>
      <img className="image-37-icon" alt="" src="/image-37@2x.png" />
      <div className="queries-title">
        <h1 className="have-any-queries">Have any Queries?</h1>
        <b className="get-in-touch22">Get in touch with us</b>
      </div>
      <div className="input-fields">
        <div className="rectangle-parent5">
          <div className="frame-child10" />
          <input
            className="enter-your-name"
            placeholder="Enter your name *"
            type="text"
          />
        </div>
        <div className="rectangle-parent5">
          <div className="frame-child10" />
          <input
            className="enter-your-email"
            placeholder="Enter your email *"
            type="text"
          />
        </div>
        <div className="rectangle-parent5">
          <div className="frame-child10" />
          <input
            className="enter-your-number"
            placeholder="Enter your number *"
            type="text"
          />
        </div>
        <div className="rectangle-parent8">
          <div className="frame-child10" />
          <div className="write-your-message">Write your message *</div>
        </div>
        <div className="input-fields-inner">
          <div className="aplpication-button-parent">
            <div className="aplpication-button">
              <div className="aplpication-button-child" />
              <img className="ellipse-icon" alt="" src="/ellipse1@2x.png" />
              <b className="application">Send Message</b>
            </div>
            <div className="send-message-wrapper">
              <b className="send-message">Send message</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

QueryForm.propTypes = {
  className: PropTypes.string,
};

export default QueryForm;
