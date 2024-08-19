import Event1 from "./Event1";
import FrameComponent18 from "./FrameComponent18";
import PropTypes from "prop-types";
import "./Events.css";

const Events = ({ className = "" }) => {
  return (
    <div className={`events20 ${className}`}>
      <div className="frame-parent87">
        <div className="event-parent">
          <Event1
            image39="/image-39@2x.png"
            propWidth="unset"
            propAlignSelf="stretch"
          />
          <Event1
            propPadding="0rem var(--padding-smi) 0rem 0rem"
            image39="/image-39@2x.png"
            propWidth="unset"
            propAlignSelf="stretch"
          />
          <FrameComponent18
            propWidth="19.875rem"
            propAlignSelf="unset"
            image39="/image-39@2x.png"
          />
          <FrameComponent18
            propWidth="19.875rem"
            propAlignSelf="unset"
            image39="/image-39@2x.png"
          />
        </div>
        <div className="event-parent">
          <Event1
            propPadding="0rem var(--padding-xs) 0rem 0rem"
            image39="/image-39@2x.png"
            propWidth="unset"
            propAlignSelf="stretch"
          />
          <Event1
            propPadding="0rem var(--padding-smi) 0rem 0rem"
            image39="/image-39@2x.png"
            propWidth="unset"
            propAlignSelf="stretch"
          />
          <FrameComponent18
            propWidth="19.875rem"
            propAlignSelf="unset"
            image39="/image-39@2x.png"
          />
          <FrameComponent18
            propWidth="19.875rem"
            propAlignSelf="unset"
            image39="/image-39@2x.png"
          />
        </div>
        <div className="frame-parent89">
          <div className="event-parent">
            <Event1
              propPadding="0rem var(--padding-xs) 0rem 0rem"
              image39="/image-39@2x.png"
              propWidth="unset"
              propAlignSelf="stretch"
            />
            <Event1
              propPadding="0rem var(--padding-smi) 0rem 0rem"
              image39="/image-39@2x.png"
              propWidth="unset"
              propAlignSelf="stretch"
            />
            <FrameComponent18
              propWidth="19.875rem"
              propAlignSelf="unset"
              image39="/image-39@2x.png"
            />
            <FrameComponent18
              propWidth="19.875rem"
              propAlignSelf="unset"
              image39="/image-39@2x.png"
            />
          </div>
          <div className="event-parent">
            <Event1
              propPadding="0rem var(--padding-xs) 0rem 0rem"
              image39="/image-39@2x.png"
              propWidth="unset"
              propAlignSelf="stretch"
            />
            <Event1
              propPadding="0rem var(--padding-smi) 0rem 0rem"
              image39="/image-39@2x.png"
              propWidth="unset"
              propAlignSelf="stretch"
            />
            <FrameComponent18
              propWidth="19.875rem"
              propAlignSelf="unset"
              image39="/image-39@2x.png"
            />
            <FrameComponent18 image39="/image-39@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

Events.propTypes = {
  className: PropTypes.string,
};

export default Events;
