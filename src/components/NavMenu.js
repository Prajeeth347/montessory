import { useState, useMemo, useCallback } from "react";
import AboutUsMenuOverlay from "./AboutUsMenuOverlay";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavMenu.css";

const NavMenu = ({
  className = "",
  onHomeTextClick,
  eventsColor,
  menuHomeMinWidth,
  blogsColor,
  contactUsMinWidth,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
}) => {
  const [isAboutUsMenuOverlayOpen, setAboutUsMenuOverlayOpen] = useState(false);
  const homeStyle = useMemo(() => {
    return {
      color: eventsColor,
    };
  }, [eventsColor]);

  const menuAboutGalleryStyle = useMemo(() => {
    return {
      minWidth: menuHomeMinWidth,
    };
  }, [menuHomeMinWidth]);

  const aboutUsStyle = useMemo(() => {
    return {
      color: blogsColor,
    };
  }, [blogsColor]);

  const frameDiv3Style = useMemo(() => {
    return {
      minWidth: contactUsMinWidth,
    };
  }, [contactUsMinWidth]);

  const mandatoryPublicDisclosureStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const galleryStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const eventsStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const blogsStyle = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const contactUs1Style = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const navigate = useNavigate();

  const openAboutUsMenuOverlay = useCallback(() => {
    setAboutUsMenuOverlayOpen(true);
  }, []);

  const closeAboutUsMenuOverlay = useCallback(() => {
    setAboutUsMenuOverlayOpen(false);
  }, []);

  const onMandatoryPublicDisclosureClick = useCallback(() => {
    navigate("/mandatory-public-disclosure");
  }, [navigate]);

  const onGalleryTextClick = useCallback(() => {
    navigate("/gallery-page");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    navigate("/events-page");
  }, [navigate]);

  const onBlogsTextClick = useCallback(() => {
    navigate("/blogs-page");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us-page");
  }, [navigate]);

  return (
    <>
      <div className={`nav-menu ${className}`}>
        <a className="home" onClick={onHomeTextClick} style={homeStyle}>
          Home
        </a>
        <div className="menu-about-gallery" style={menuAboutGalleryStyle}>
          <a
            className="about-us20"
            onClick={openAboutUsMenuOverlay}
            style={aboutUsStyle}
          >
            About Us
          </a>
          <div
            className="mandatory-public-disclosure-wrapper"
            style={frameDiv3Style}
          >
            <div
              className="mandatory-public-disclosure1"
              onClick={onMandatoryPublicDisclosureClick}
              style={mandatoryPublicDisclosureStyle}
            >
              Mandatory Public Disclosure
            </div>
          </div>
          <a
            className="gallery20"
            onClick={onGalleryTextClick}
            style={galleryStyle}
          >
            Gallery
          </a>
        </div>
        <div className="menu-home">
          <a
            className="events21"
            onClick={onEventsTextClick}
            style={eventsStyle}
          >
            Events
          </a>
        </div>
        <div className="menu-home1">
          <a className="blogs20" onClick={onBlogsTextClick} style={blogsStyle}>
            Blogs
          </a>
        </div>
        <a
          className="contact-us2"
          onClick={onContactUsTextClick}
          style={contactUs1Style}
        >
          Contact Us
        </a>
      </div>
      {isAboutUsMenuOverlayOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAboutUsMenuOverlay}
        >
          <AboutUsMenuOverlay onClose={closeAboutUsMenuOverlay} />
        </PortalPopup>
      )}
    </>
  );
};

NavMenu.propTypes = {
  className: PropTypes.string,

  /** Style props */
  eventsColor: PropTypes.any,
  menuHomeMinWidth: PropTypes.any,
  blogsColor: PropTypes.any,
  contactUsMinWidth: PropTypes.any,
  propColor: PropTypes.any,
  propColor1: PropTypes.any,
  propColor2: PropTypes.any,
  propColor3: PropTypes.any,
  propColor4: PropTypes.any,

  /** Action props */
  onHomeTextClick: PropTypes.func,
};

export default NavMenu;
