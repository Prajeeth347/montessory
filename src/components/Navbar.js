import { useMemo, useCallback } from "react";
import NavMenu from "./NavMenu";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({
  className = "",
  logo1IconFlexWrap,
  logo1,
  navMenuMinWidth,
  homeMinWidth,
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
  const navbarStyle = useMemo(() => {
    return {
      flexWrap: logo1IconFlexWrap,
    };
  }, [logo1IconFlexWrap]);

  const frameDiv4Style = useMemo(() => {
    return {
      minWidth: navMenuMinWidth,
    };
  }, [navMenuMinWidth]);

  const frameDiv5Style = useMemo(() => {
    return {
      minWidth: homeMinWidth,
    };
  }, [homeMinWidth]);

  const navigate = useNavigate();

  const onAplpicationButtonContainerClick = useCallback(() => {
    navigate("/application-page");
  }, [navigate]);

  const onVirtualTourButtonClick = useCallback(() => {
    navigate("/virtual-tour");
  }, [navigate]);

  return (
    <div className={`navbar ${className}`} style={navbarStyle}>
      <div className="logo-1-wrapper">
        <img className="logo-1-icon" alt="" src={logo1} />
      </div>
      <div className="frame-parent98" style={frameDiv4Style}>
        <div className="nav-menu-wrapper" style={frameDiv5Style}>
          <NavMenu
            eventsColor={eventsColor}
            menuHomeMinWidth={menuHomeMinWidth}
            blogsColor={blogsColor}
            contactUsMinWidth={contactUsMinWidth}
            propColor={propColor}
            propColor1={propColor1}
            propColor2={propColor2}
            propColor3={propColor3}
            propColor4={propColor4}
          />
        </div>
        <div className="aplpication-button-group">
          <div
            className="aplpication-button1"
            onClick={onAplpicationButtonContainerClick}
          >
            <div className="aplpication-button-item" />
            <div className="ellipse-wrapper">
              <img className="ellipse-icon1" alt="" src="/ellipse@2x.png" />
            </div>
            <a className="application1">Application</a>
          </div>
          <div
            className="virtual-tour-button"
            onClick={onVirtualTourButtonClick}
          >
            <div className="virtual-tour-button-child" />
            <div className="ellipse-wrapper">
              <img className="ellipse-icon1" alt="" src="/ellipse-1@2x.png" />
            </div>
            <a className="application2">Virtual Tour</a>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  logo1: PropTypes.string,
  eventsColor: PropTypes.string,
  menuHomeMinWidth: PropTypes.string,
  blogsColor: PropTypes.string,
  contactUsMinWidth: PropTypes.string,
  propColor: PropTypes.string,
  propColor1: PropTypes.string,
  propColor2: PropTypes.string,
  propColor3: PropTypes.string,
  propColor4: PropTypes.string,

  /** Style props */
  logo1IconFlexWrap: PropTypes.any,
  navMenuMinWidth: PropTypes.any,
  homeMinWidth: PropTypes.any,
};

export default Navbar;
