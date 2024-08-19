import PropTypes from "prop-types";
import "./FrameComponent28.css";

const FrameComponent28 = ({ className = "" }) => {
  return (
    <div className={`frame-wrapper49 ${className}`}>
      <div className="security-background-parent">
        <div className="security-background" />
        <div className="we-have-implemented-container">
          <p className="we-have-implemented">
            We have implemented reasonable security controls and procedures that
            are appropriate with the information assets being protected and with
            the nature of our business.
          </p>
          <p className="we-have-implemented">&nbsp;</p>
          <p className="we-have-implemented">
            While we try our best to provide security that is better than the
            industry standards, because of the inherent vulnerabilities of the
            internet, we cannot ensure or warrant complete security of all
            information that is being transmitted electronically to us by you.
          </p>
          <p className="we-have-implemented">&nbsp;</p>
          <p className="we-have-implemented">
            By visiting this Website, you agree and acknowledge to be bound by
            this Privacy Policy and you hereby consent that we will collect,
            use, and process your Personal Information in the manner set out
            herein. If you do not agree with these terms, do not use the
            Website.
          </p>
        </div>
      </div>
    </div>
  );
};

FrameComponent28.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent28;
