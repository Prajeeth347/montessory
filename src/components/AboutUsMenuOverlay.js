import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./AboutUsMenuOverlay.css";

const AboutUsMenuOverlay = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onAboutSchoolTextClick = useCallback(() => {
    navigate("/about-school-page");
  }, [navigate]);

  const onOurLeaderAndClick = useCallback(() => {
    navigate("/our-founder-and-teachers");
  }, [navigate]);

  const onHouseSystemTextClick = useCallback(() => {
    navigate("/house-system-page");
  }, [navigate]);

  const onSchoolCalendarTextClick = useCallback(() => {
    navigate("/school-calendar");
  }, [navigate]);

  const onCareerTextClick = useCallback(() => {
    navigate("/career-page");
  }, [navigate]);

  const onInfrastructureAndFacilitiesClick = useCallback(() => {
    navigate("/infrastructure-facilities-page");
  }, [navigate]);

  const onTestimonialsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDocumentsTextClick = useCallback(() => {
    navigate("/documents-page");
  }, [navigate]);

  const onVirtualTourTextClick = useCallback(() => {
    navigate("/virtual-tour");
  }, [navigate]);

  return (
    <div className={`about-us-menu-overlay ${className}`}>
      <div className="separator" />
      <div className="about-school-wrapper">
        <b className="about-school" onClick={onAboutSchoolTextClick}>
          About School
        </b>
      </div>
      <div className="our-leader-and-teachers-wrapper">
        <b className="our-leader-and" onClick={onOurLeaderAndClick}>
          Our Leader and Teachers
        </b>
      </div>
      <div className="house-system-wrapper">
        <b className="about-school" onClick={onHouseSystemTextClick}>
          House System
        </b>
      </div>
      <div className="house-system-wrapper">
        <b className="about-school" onClick={onSchoolCalendarTextClick}>
          School Calendar
        </b>
      </div>
      <div className="about-school-wrapper">
        <b className="about-school" onClick={onCareerTextClick}>
          Career
        </b>
      </div>
      <div className="infrastructure-and-facilities-wrapper">
        <b
          className="about-school"
          onClick={onInfrastructureAndFacilitiesClick}
        >
          Infrastructure and Facilities
        </b>
      </div>
      <div className="testimonials-wrapper">
        <b className="about-school" onClick={onTestimonialsTextClick}>
          Testimonials
        </b>
      </div>
      <div className="testimonials-wrapper">
        <b className="about-school" onClick={onDocumentsTextClick}>
          Documents
        </b>
      </div>
      <div className="testimonials-wrapper">
        <b className="about-school" onClick={onVirtualTourTextClick}>
          Virtual Tour
        </b>
      </div>
    </div>
  );
};

AboutUsMenuOverlay.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default AboutUsMenuOverlay;
