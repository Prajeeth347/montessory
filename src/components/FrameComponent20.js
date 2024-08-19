import PropTypes from "prop-types";
import "./FrameComponent20.css";

const FrameComponent20 = ({ className = "" }) => {
  return (
    <div className={`image-63-parent ${className}`}>
      <img
        className="image-63-icon"
        loading="lazy"
        alt=""
        src="/image-63@2x.png"
      />
      <div className="frame-wrapper48">
        <div className="sports-title-parent">
          <div className="sports-title">
            <b className="sports">
              <p className="sports1">Sports</p>
              <p className="sports1">&nbsp;</p>
            </b>
            <b className="hostel">Hostel</b>
            <div className="sports-title-child" />
            <div className="sports-title-item" />
          </div>
          <div className="montessori-prime-school-container">
            <p className="montessori-prime-school21">
              <b>Montessori Prime School</b>
            </p>
            <p className="montessori-prime-school21">
              <b>&nbsp;</b>
            </p>
            <p className="montessori-prime-school22">
              Montessori Prime School is with 9 acre lavish campus built over 2,
              30,000 sq.ft becomes the first school of its nature in WARANGAL.
              It is located on the Warangal – Karimnagar Highway, just 8kms from
              Kakatiya University.An ultra modern school building with FULLY Air
              conditioned class rooms with limited strength in each class. Our
              MPS provides quality education, sports and co-curricular
              facilities. Well stocked library, Modern 3D Laboratories for
              Physics, Chemistry, Biology, Linguistic, Math and a state of the
              art computer laboratory give our school the cutting edge advantage
              in terms of infrastructure.Sporting facilities include spacious
              playground for volley ball court, Badminton court, shuttle court,
              Basket ball court, Skating Zone, Cricket stadium, Athletic Track,
              well planned swimming pool.Our garden campus is imaginative and
              includes safe play areas for the young pupils and a number of
              presentation and performance spaces within each phase of the
              school.An in house clinic under the supervision of a trained nurse
              and doctor provides preventive and emergency medical care to the
              children.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent20.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent20;
