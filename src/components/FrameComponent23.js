import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EventDetailed from "./EventDetailed";
import FrameComponent9 from "./FrameComponent9";
import PropTypes from "prop-types";
import "./FrameComponent23.css";

const FrameComponent23 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onEllipseClick = useCallback(() => {
    navigate("/event-detail-page");
  }, [navigate]);

  return (
    <div className={`frame-parent74 ${className}`}>
      <div className="frame-wrapper43">
        <div className="frame-wrapper44">
          <div className="filter-button-parent">
            <div className="filter-button" />
            <div className="all-wrapper">
              <h3 className="all">All</h3>
            </div>
            <div className="line-div" />
          </div>
        </div>
      </div>
      <div className="events-container">
        <div className="event-rows-parent">
          <div className="event-rows">
            <img className="event-rows-child" alt="" src="/rectangle-10.svg" />
            <img
              className="image-icon"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
          </div>
          <div className="event-details-rows-wrapper">
            <div className="event-details-rows">
              <div className="event-title-rows-wrapper">
                <div className="event-title-rows">
                  <div className="imgicons8-2-parent">
                    <img
                      className="imgicons8-2"
                      alt=""
                      src="/imgicons8-2@2x.png"
                    />
                    <div className="event-dates">
                      <div className="aug-14-20244">Aug 14, 2024</div>
                    </div>
                  </div>
                  <a
                    className="th-august-20243"
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
        <div className="event-rows-parent">
          <div className="event-rows">
            <img className="event-rows-child" alt="" src="/rectangle-10.svg" />
            <img className="image-icon" alt="" src="/image-1@2x.png" />
          </div>
          <div className="event-details-rows-wrapper">
            <div className="event-details-rows">
              <div className="frame-wrapper46">
                <div className="event-title-rows">
                  <div className="imgicons8-2-parent">
                    <img
                      className="imgicons8-2"
                      alt=""
                      src="/imgicons8-2@2x.png"
                    />
                    <div className="event-dates">
                      <div className="aug-14-20244">Aug 12, 2024</div>
                    </div>
                  </div>
                  <a
                    className="farm-trip"
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
                onEllipseClick={onEllipseClick}
                propAlignSelf="unset"
                propPosition1="absolute"
                propTop1="34%"
                propLeft1="28%"
              />
            </div>
          </div>
        </div>
        <FrameComponent9
          propAlignSelf="unset"
          propWidth="25.625rem"
          rectangle10="/rectangle-10.svg"
          image="/image-1@2x.png"
          imgicons82="/imgicons8-2@2x.png"
          propMargin="0 !important"
          propPosition="absolute"
          propRight="1.063rem"
          propBottom="0.813rem"
          propDisplay="flex"
          propFlexDirection="column"
          propPadding="17px 9px 16px 14px"
          propHeight="unset"
          propMargin1="0 !important"
          propTop="0rem"
          propRight1="0rem"
          propBottom1="0rem"
          propLeft="0rem"
          propAlignSelf1="stretch"
          propPosition1="relative"
          propTop1="unset"
          propLeft1="unset"
        />
      </div>
    </div>
  );
};

FrameComponent23.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent23;
