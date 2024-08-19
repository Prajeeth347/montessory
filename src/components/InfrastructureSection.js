import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./InfrastructureSection.css";

const InfrastructureSection = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAplpicationButtonContainerClick = useCallback(() => {
    navigate("/infrastructure-facilities-page");
  }, [navigate]);

  return (
    <div className={`infrastructure-section ${className}`}>
      <div className="container1">
        <div className="content1">
          <div className="join-our-montessori-prime-scho-parent">
            <div className="join-our-montessori">
              Join our Montessori Prime School
            </div>
            <h1 className="school-is-a">
              “School is a building which has four walls with tomorrow inside.”
            </h1>
          </div>
        </div>
        <div className="the-quest-for-a-good-tomorrow-wrapper">
          <div className="the-quest-for">
            The quest for a good tomorrow ends once you the child joins
            Montessori Prime School. A school which has the best facilities and
            create self-confident, self-reliant, independent individuals ready
            to undertake their role as future leaders. MPS emphasises on
            teaching strategy by considering the individual differences among
            the students. We believe that no student is alike and that is why
            modifying teaching methodology is very important. As we accept the
            differences among students. We develop cooperation, team work and
            empathy in our students because the progress the young minds will
            lead to the progress of the nation.
          </div>
        </div>
        <div className="container2">
          <div className="content2">
            <div className="checklist">
              <div className="checkpoint-parent">
                <img
                  className="checkpoint-icon"
                  loading="lazy"
                  alt=""
                  src="/checkpoint.svg"
                />
                <div className="integrated-cbse-curriculum-wrapper">
                  <div className="world-class-modern">
                    World Class Modern Infrastructure
                  </div>
                </div>
              </div>
              <div className="checkpoint-group">
                <img className="checkpoint-icon" alt="" src="/checkpoint.svg" />
                <div className="integrated-cbse-curriculum-wrapper">
                  <div className="world-class-modern">
                    Integrated CBSE curriculum
                  </div>
                </div>
              </div>
              <div className="checkpoint-parent">
                <img
                  className="checkpoint-icon2"
                  alt=""
                  src="/checkpoint.svg"
                />
                <div className="digital-classrooms-with-smart-wrapper">
                  <div className="join-our-montessori">
                    Digital classrooms with Smart boards
                  </div>
                </div>
              </div>
              <div className="checkpoint-parent1">
                <img
                  className="checkpoint-icon2"
                  alt=""
                  src="/checkpoint.svg"
                />
                <div className="digital-classrooms-with-smart-wrapper">
                  <div className="join-our-montessori">{`Science, Math, Linguistic, Computer & Robotic Labs`}</div>
                </div>
              </div>
              <div className="checkpoint-parent2">
                <img
                  className="checkpoint-icon2"
                  alt=""
                  src="/checkpoint.svg"
                />
                <div className="national-international-assoc-wrapper">
                  <div className="join-our-montessori">
                    National / International Associations for Skill Development
                  </div>
                </div>
              </div>
              <div className="checkpoint-parent1">
                <img
                  className="checkpoint-icon2"
                  alt=""
                  src="/checkpoint.svg"
                />
                <div className="digital-classrooms-with-smart-wrapper">
                  <div className="join-our-montessori">
                    With Separate Air-Conditioned Hostel for Boys and Girls
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="aplpication-button3"
            onClick={onAplpicationButtonContainerClick}
          >
            <div
              className="aplpication-button-inner"
              onClick={onAplpicationButtonContainerClick}
            />
            <div className="icon-container">
              <img className="ellipse-icon4" alt="" src="/ellipse-4@2x.png" />
            </div>
            <b className="application4">View our infrastructure</b>
          </div>
        </div>
      </div>
      <div className="image-container3">
        <div className="content3">
          <div className="background" />
          <img
            className="image-26-icon"
            loading="lazy"
            alt=""
            src="/image-26@2x.png"
          />
          <img className="content-child" alt="" src="/rectangle-7.svg" />
          <h2 className="decades-of-experience">3 Decades of Experience</h2>
        </div>
      </div>
    </div>
  );
};

InfrastructureSection.propTypes = {
  className: PropTypes.string,
};

export default InfrastructureSection;
