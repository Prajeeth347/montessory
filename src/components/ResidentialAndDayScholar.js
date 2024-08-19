import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ResidentialAndDayScholar.css";

const ResidentialAndDayScholar = ({
  className = "",
  propBorder,
  propWidth,
  propAlignSelf,
  propPadding,
  iconShape1,
  prop,
  integratedCBSECurriculum,
  ourSchoolFollowsCBSECurriculum,
}) => {
  const residentialAndDayScholarStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const frameDiv6Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propWidth, propAlignSelf, propPadding]);

  return (
    <div
      className={`residential-and-day-scholar ${className}`}
      style={residentialAndDayScholarStyle}
    >
      <div className="residential-and-day-scholar-inner" style={frameDiv6Style}>
        <div className="icon-shape-1-parent">
          <img className="icon-shape-1" alt="" src={iconShape1} />
          <img className="icon2" alt="" src={prop} />
        </div>
      </div>
      <div className="integrated-cbse-curriculum-parent">
        <h3 className="integrated-cbse-curriculum">
          {integratedCBSECurriculum}
        </h3>
        <div className="our-school-follows-cbse-curric-wrapper">
          <div className="our-school-follows">
            {ourSchoolFollowsCBSECurriculum}
          </div>
        </div>
      </div>
    </div>
  );
};

ResidentialAndDayScholar.propTypes = {
  className: PropTypes.string,
  iconShape1: PropTypes.string,
  prop: PropTypes.string,
  integratedCBSECurriculum: PropTypes.string,
  ourSchoolFollowsCBSECurriculum: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
};

export default ResidentialAndDayScholar;
