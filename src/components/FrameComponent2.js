import { useEffect } from "react";
import CardsFrame from "./CardsFrame";
import HeroSection from "./HeroSection";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <section className={`frame-parent103 ${className}`}>
      <div className="happy-independence-day-aff-wrapper">
        <div
          className="happy-independence-day-container"
          data-animate-on-scroll
        >
          Happy Independence Day!! | AFFILIATED TO CBSE BOARD NEW DELHI
          (AFFILIATION NUMBER: 3630485) | 
          <a
            className="watch-live-on-youtube"
            href="https://youtube.com/live/Uz3oRyyaMFs"
            target="_blank"
          >
            <span className="watch-live-on">Watch Live on YouTube</span>
          </a>
           | 
          <a
            className="watch-live-on-youtube"
            href="https://youtu.be/bm65C_8lMqA"
            target="_blank"
          >
            <span className="watch-live-on">
              Elysium 2nd Annual Day Celebration Teaser
            </span>
          </a>
           | 
          <a
            className="watch-live-on-youtube"
            href="https://youtu.be/FtRWQd_RwKk"
            target="_blank"
          >
            <span className="watch-live-on">
              Watch School New Teaser | Celebrating 31 Years of Educational
              Experience 1993-2024
            </span>
          </a>
           | 
          <a
            className="watch-live-on-youtube"
            href="https://youtube.com/@montessorijnprime"
            target="_blank"
          >
            <span className="watch-live-on">
              Watch Live on our YouTube Channel "PrimeJNChannel"
            </span>
          </a>
           to watch live.!!! Contact Us - 7700043030, 7700053030, 7700063030.
        </div>
      </div>
      <div className="cards-frame-parent">
        <CardsFrame />
        <HeroSection />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
