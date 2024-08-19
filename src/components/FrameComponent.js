import { useMemo } from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  navbarAlignSelf,
  navbarPadding,
  navbarWidth,
  logo1,
  logo1IconFlexWrap,
  navMenuMinWidth,
  homeMinWidth,
}) => {
  const frameHeaderStyle = useMemo(() => {
    return {
      alignSelf: navbarAlignSelf,
      padding: navbarPadding,
      width: navbarWidth,
    };
  }, [navbarAlignSelf, navbarPadding, navbarWidth]);

  return (
    <header className={`navbar-wrapper ${className}`} style={frameHeaderStyle}>
      <Navbar
        logo1IconFlexWrap={logo1IconFlexWrap}
        logo1={logo1}
        navMenuMinWidth={navMenuMinWidth}
        homeMinWidth={homeMinWidth}
      />
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  logo1: PropTypes.string,
  logo1IconFlexWrap: PropTypes.string,
  navMenuMinWidth: PropTypes.string,
  homeMinWidth: PropTypes.string,

  /** Style props */
  navbarAlignSelf: PropTypes.any,
  navbarPadding: PropTypes.any,
  navbarWidth: PropTypes.any,
};

export default FrameComponent;
