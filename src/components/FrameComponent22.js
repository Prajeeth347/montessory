import PropTypes from "prop-types";
import "./FrameComponent22.css";

const FrameComponent22 = ({ className = "" }) => {
  return (
    <div className={`image-61-parent ${className}`}>
      <img
        className="image-61-icon"
        loading="lazy"
        alt=""
        src="/image-61@2x.png"
      />
      <div className="frame-parent83">
        <div className="infra-title-parent">
          <div className="infra-title">
            <b className="infrastructure">Infrastructure</b>
            <input
              className="our-garden-campus"
              placeholder="Our Garden Campus"
              type="text"
            />
            <div className="infra-title-child" />
          </div>
          <div className="modern-school-infrastructure-a-wrapper">
            <div className="modern-school-infrastructure-container">
              <p className="modern-school-infrastructure">
                <b>
                  <span>Modern School Infrastructure</span>
                </b>
              </p>
              <p className="blank-line23">
                <span>
                  <b>&nbsp;</b>
                </span>
              </p>
              <p className="modern-school-infrastructure">
                <span>
                  <span>
                    An ultra modern school Infrastructure building with FULLY
                    AirConditioned class rooms. Optimized class strength for
                    interactive learning Well stocked library, Modern 3D
                    Laboratories for Physics, Chemistry, Biology, Linguistic,
                    Math, Robotics State of the art Computer Lab An in house
                    clinic under the supervision of a trained nurse and doctor
                    for preventive and emergency medical care.
                  </span>
                </span>
              </p>
              <p className="modern-school-infrastructure">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="modern-school-infrastructure">
                <b>
                  <span>Certification</span>
                </b>
              </p>
              <p className="blank-line23">
                <span>
                  <b>&nbsp;</b>
                </span>
              </p>
              <p className="we-believe-that-creative-achie">
                <span>
                  <span>
                    We believe that creative achievements build a confident
                    human being with great self worth and esteem. Music and
                    dance, theatre, pottery and painting, crafting models are
                    not just extracurricular activities; they are co-curricular
                    activities integrated to their course of study to let the
                    children understand how all learning is
                    interconnected-baking with Chemistry, bowling with Physics,
                    music with Mathematics.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="frame-child7" />
      </div>
    </div>
  );
};

FrameComponent22.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent22;
