import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ExtraCiricullars from "./ExtraCiricullars";
import PropTypes from "prop-types";
import "./ExtraCuricullar.css";

const ExtraCuricullar = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonBackgroundClick = useCallback(() => {
    navigate("/infrastructure-facilities-page");
  }, [navigate]);

  return (
    <div className={`extra-curicullar ${className}`}>
      <div className="extracurriculars-content">
        <div className="aplpication-button2">
          <div
            className="button-background"
            onClick={onButtonBackgroundClick}
          />
          <div className="ellipse-wrapper1">
            <img className="ellipse-icon3" alt="" src="/ellipse1@2x.png" />
          </div>
          <b className="application3">Explore now</b>
        </div>
        <div className="image-pair2">
          <img className="image-19-icon" alt="" src="/image-19@2x.png" />
          <img className="image-23-icon" alt="" src="/image-23@2x.png" />
        </div>
        <div className="extracurriculars-description">
          <div className="extra-ciricullars-parent">
            <div className="extra-ciricullars1">
              <div className="extracurriculars-item">
                <div className="image-20-wrapper">
                  <img
                    className="image-20-icon"
                    loading="lazy"
                    alt=""
                    src="/image-20@2x.png"
                  />
                </div>
                <img
                  className="placeholder-icon"
                  alt=""
                  src="/placeholder@2x.png"
                />
              </div>
              <div className="extracurriculars-details">
                <div className="training-types">
                  <div className="training-names">
                    <a
                      className="sports-training"
                      href="https://www.montessorijnprime.com/montessori/prime/"
                      target="_blank"
                    >
                      Sports Training
                    </a>
                  </div>
                  <div className="keeping-the-present">
                    Sports plays an important role in the lives of students. It
                    brings discipline in student’s life. Sports is helpful in
                    the mental and physical development of the students. At MPS
                    we give training to students with trained Coaches. A
                    plentiful of sports like Volleyball, Basketball, Cricket,
                    Football, Skating, Swimming Pool, Martial Arts, Ludo,
                    Carrom, Table Tennis, Chess etc.
                  </div>
                </div>
              </div>
            </div>
            <div className="extra-ciricullars2">
              <div className="extracurriculars-item">
                <div className="image-20-wrapper">
                  <img
                    className="image-20-icon"
                    alt=""
                    src="/image-20-1@2x.png"
                  />
                </div>
                <img
                  className="placeholder-icon"
                  alt=""
                  src="/734322-1-1@2x.png"
                />
              </div>
              <div className="extracurriculars-details">
                <div className="training-types">
                  <div className="language-training-wrapper">
                    <b className="language-training">Language Training</b>
                  </div>
                  <div className="keeping-the-present">
                    Keeping the present scenario in mind, MPS has established an
                    English Village where students get training on their
                    speeches and are even taught ways to deliver speeches with
                    proper voice modulation. We also teach one foreign language
                    to match the pace of outside world.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="music-dance-art-training">
            <ExtraCiricullars />
          </div>
        </div>
      </div>
      <div className="school-infrastructure">
        <div className="guide-the-path-to-your-profess-parent">
          <h1 className="guide-the-path">
            Guide the path to your professional journey
          </h1>
          <div className="an-ultra-modern">
            An ultra modern school Infrastructure building with FULLY
            Air-Conditioned class rooms. Optimized class strength for
            interactive learning Well stocked library, Modern 3D Laboratories
            for Physics, Chemistry, Biology, Linguistic, Math, Robotics.
          </div>
        </div>
      </div>
    </div>
  );
};

ExtraCuricullar.propTypes = {
  className: PropTypes.string,
};

export default ExtraCuricullar;
