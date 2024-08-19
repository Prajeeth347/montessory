import TestimonialImages from "./TestimonialImages";
import FrameComponent31 from "./FrameComponent31";
import PropTypes from "prop-types";
import "./TestimonialFrame.css";

const TestimonialFrame = ({ className = "" }) => {
  return (
    <section className={`testimonial-frame ${className}`}>
      <div className="testimonial-content">
        <div className="testimonial-rows-parent">
          <div className="testimonial-rows">
            <div className="testimonial-items">
              <div className="testimonial-items-child" />
              <div className="testimonial-quotes">
                <div className="we-felt-that">
                  We felt that this is the important decision of my son's
                  career...we enquired in all the aspects about this
                  school...school is the basic foundation of knowledge being
                  imparted to a child especially in academics and non academics
                  too....this is the best school in my vicinity couple of times
                  we visited the campus which is environment friendly....we were
                  impressed by the infrastructure... We got good reviews about
                  the quality maintained in your schools from various
                  places...Finally our family make a consensus to join our son
                  in this institution...
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-images-row">
            <TestimonialImages
              emptyImage="/frame-6@2x.png"
              ramuChanda="Ramu Chanda"
            />
            <img
              className="designation-row-icon"
              loading="lazy"
              alt=""
              src="/7350737-1@2x.png"
            />
          </div>
        </div>
        <div className="frame-parent70">
          <div className="testimonial-rows">
            <div className="testimonial-items">
              <div className="testimonial-items-child" />
              <div className="testimonial-quotes">
                <div className="we-felt-that">
                  I sincerely thank the Management, Principal, and each and
                  every member of the staff at Montessori Prime School for
                  everything that they have done to make my son's time at school
                  enjoyable and productive. I have seen my son's exponential and
                  quick growth while reading the encouraging and thankful things
                  in the messages and in Dairy. My best wishes to Montessori
                  Prime School.
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-pic-parent">
            <div className="testimonial-pic1">
              <img
                className="testimonial-pic-child"
                alt=""
                src="/frame-6-1@2x.png"
              />
            </div>
            <div className="dr-i-rajasri-reddy-parent">
              <b className="dr-i-rajasri">Dr. I. Rajasri Reddy</b>
              <img className="icon1" alt="" src="/7350737-1@2x.png" />
            </div>
          </div>
        </div>
        <div className="frame-parent71">
          <div className="testimonial-rows">
            <div className="testimonial-items">
              <div className="testimonial-items-child" />
              <div className="testimonial-quotes">
                <div className="we-felt-that">
                  I am Aparna Suman as a parent we have made the right choice to
                  enroll our Kid Elsy Neorah, Grade -2 in Montessori Prime
                  School. It is a good school with a balance of academics and
                  sports. Transport and canteen facilities are at their best. As
                  a parent, I am happy with the teaching methodology,
                  co-curricular activities, administration of tests and exams as
                  well as discipline in the campus. I must say that the attitude
                  of teaching staff and administrative staff is excellent, they
                  are very caring and helpful.
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-pic-group">
            <div className="testimonial-pic1">
              <img
                className="testimonial-pic-child"
                alt=""
                src="/frame-6-2@2x.png"
              />
            </div>
            <div className="frame-wrapper42">
              <div className="dr-t-suman-anaesthetist-ap-parent">
                <b className="we-felt-that">{`Dr. T. Suman Anaesthetist & Aparna M. Pharm.`}</b>
                <img
                  className="empty-designation-icon"
                  alt=""
                  src="/7350737-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <FrameComponent31 />
      </div>
    </section>
  );
};

TestimonialFrame.propTypes = {
  className: PropTypes.string,
};

export default TestimonialFrame;
