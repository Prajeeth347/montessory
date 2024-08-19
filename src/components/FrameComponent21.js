import PropTypes from "prop-types";
import "./FrameComponent21.css";

const FrameComponent21 = ({ className = "" }) => {
  return (
    <section className={`transport-content-parent ${className}`}>
      <div className="transport-content">
        <div className="transport-left-parent">
          <div className="transport-left">
            <div className="transport-title-parent">
              <div className="transport-title">
                <b className="modern-transport">
                  <p className="montessori-prime-sows-the-seed">
                    Modern Transport
                  </p>
                </b>
              </div>
              <b className="our-garden-campus1">Our Garden Campus</b>
            </div>
            <div className="transport-left-inner">
              <div className="line-parent">
                <div className="frame-child8" />
                <div className="frame-child9" />
              </div>
            </div>
          </div>
          <div className="transport-left-inner">
            <div className="modern-school-infrastructure-container1">
              <p className="discipline">
                <b>Modern School Infrastructure</b>
              </p>
              <p className="modern-transport-facilities">
                <b>&nbsp;</b>
              </p>
              <p className="modern-transport-facilities">{`Modern transport facilities equipped with GPRS, Mobile phones and First Aid kits Fully Air-Conditioned Boys & Girls Hostel with attached bathroom and study infrastructure Well planned nutritious Meal Plan for Children Periodic camps for skin, dental and eyecare along with general healthcare..`}</p>
              <p className="modern-transport-facilities">&nbsp;</p>
              <p className="discipline">
                <b>
                  <span>Discipline</span>
                </b>
              </p>
              <p className="modern-transport-facilities">
                <span>
                  <b>&nbsp;</b>
                </span>
              </p>
              <p className="montessori-prime-sows-the-seed">
                <span>
                  <span>
                    Montessori Prime sows the seeds of discipline in all the
                    children in such a way that they germinate into complete
                    human beings. The curricula themselves have the discipline
                    aspect embedded within them. With this, a child learns to
                    obey and respect time and punctuality gets into his/her
                    blood forever.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="image-62-icon"
        loading="lazy"
        alt=""
        src="/image-62@2x.png"
      />
    </section>
  );
};

FrameComponent21.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent21;
