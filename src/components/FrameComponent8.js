import EventDetailed from "./EventDetailed";
import FrameComponent9 from "./FrameComponent9";
import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <div className={`container-parent ${className}`}>
      <div className="container3">
        <div className="content6">
          <div className="heading-container2">
            <div className="blog-title-parent">
              <div className="blog-title">
                <div className="latest-blogs">Latest Blogs</div>
              </div>
              <h1 className="montessori-prime-blogs">Montessori Prime Blogs</h1>
            </div>
          </div>
          <div className="montessori-prime-school28">
            Montessori Prime School aims primarily at the education of young
            children without distinction of imparting education to school.
          </div>
        </div>
      </div>
      <div className="blog-list1">
        <div className="instance-parent19">
          <div className="image-placeholder-parent">
            <div className="image-placeholder">
              <img
                className="image-placeholder-child"
                alt=""
                src="/rectangle-10.svg"
              />
              <img className="image-icon10" alt="" src="/image-12@2x.png" />
            </div>
            <div className="blog-date-container">
              <div className="date-icon-container">
                <div className="blog-date">
                  <div className="frame-parent114">
                    <div className="imgicons8-2-parent1">
                      <img
                        className="imgicons8-23"
                        alt=""
                        src="/imgicons8-21@2x.png"
                      />
                      <div className="blog-day">
                        <div className="aug-14-20246">Aug 14, 2024</div>
                      </div>
                    </div>
                    <a
                      className="th-august-20246"
                      href="https://www.montessorijnprime.com/montessori/prime/news/detail/023bbf9e7c051910b66544720910999ffea9NEWS"
                      target="_blank"
                    >
                      15th August 2024
                    </a>
                  </div>
                </div>
                <EventDetailed
                  propMargin="unset"
                  propPosition="relative"
                  propRight="unset"
                  propBottom="unset"
                  propDisplay="unset"
                  propFlexDirection="unset"
                  propPadding="unset"
                  propHeight="3.125rem"
                  propMargin1="unset"
                  propTop="0%"
                  propRight1="0%"
                  propBottom1="0%"
                  propLeft="0%"
                  propAlignSelf="unset"
                  propPosition1="absolute"
                  propTop1="34%"
                  propLeft1="28%"
                />
              </div>
            </div>
          </div>
          <div className="image-placeholder-parent">
            <div className="image-placeholder">
              <img
                className="image-placeholder-child"
                alt=""
                src="/rectangle-10.svg"
              />
              <img className="image-icon10" alt="" src="/image-2@2x.png" />
            </div>
            <div className="blog-date-container">
              <div className="date-icon-container">
                <div className="frame-wrapper56">
                  <div className="frame-parent114">
                    <div className="imgicons8-2-parent1">
                      <img
                        className="imgicons8-23"
                        alt=""
                        src="/imgicons8-21@2x.png"
                      />
                      <div className="blog-day">
                        <div className="aug-14-20246">Aug 12, 2024</div>
                      </div>
                    </div>
                    <a
                      className="farm-trip1"
                      href="https://www.montessorijnprime.com/montessori/prime/news/detail/5c7045e4a4241910b66544720910999ffea9NEWS"
                      target="_blank"
                    >
                      Farm Trip
                    </a>
                  </div>
                </div>
                <EventDetailed
                  propMargin="unset"
                  propPosition="relative"
                  propRight="unset"
                  propBottom="unset"
                  propDisplay="unset"
                  propFlexDirection="unset"
                  propPadding="unset"
                  propHeight="3.125rem"
                  propMargin1="unset"
                  propTop="0%"
                  propRight1="0%"
                  propBottom1="0%"
                  propLeft="0%"
                  propAlignSelf="unset"
                  propPosition1="absolute"
                  propTop1="34%"
                  propLeft1="28%"
                />
              </div>
            </div>
          </div>
          <div className="event-card">
            <FrameComponent9
              rectangle10="/rectangle-10.svg"
              image="/image-2@2x.png"
              imgicons82="/imgicons8-21@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="view-all-blog-button">
        <div className="get-into-details-container1">
          <span className="get-into-details1">Get into details now?</span>
          <span> </span>
          <a
            className="view-all-blogs"
            href="https://www.montessorijnprime.com/montessori/prime/news"
            target="_blank"
          >
            <span>
              <span className="view-all-blogs1">View all Blogs</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
