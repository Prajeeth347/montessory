import ResidentialAndDayScholar from "./ResidentialAndDayScholar";
import PropTypes from "prop-types";
import "./CardsFrame.css";

const CardsFrame = ({ className = "" }) => {
  return (
    <div className={`cards-frame ${className}`}>
      <ResidentialAndDayScholar
        propBorder="1px solid #dc3545"
        propWidth="unset"
        propAlignSelf="stretch"
        propPadding="0rem var(--padding-4xs) 0rem 0rem"
        iconShape1="/iconshape-1@2x.png"
        prop="/7576770-1@2x.png"
        integratedCBSECurriculum="Residential and Day Scholar"
        ourSchoolFollowsCBSECurriculum="We provide best facilities for students for their overall development. We have air-conditioned Campus and hostel with separate accommodation provided for boys and girls. The meals provided in mess are healthy and tasty keeping balance diet in mind."
      />
      <ResidentialAndDayScholar
        iconShape1="/iconshape-1@2x.png"
        prop="/7576770-1-1@2x.png"
        integratedCBSECurriculum="Integrated CBSE Curriculum"
        ourSchoolFollowsCBSECurriculum="Our school follows CBSE curriculum as it renders more knowledge for many competitive exams and prepares students well for their future."
      />
    </div>
  );
};

CardsFrame.propTypes = {
  className: PropTypes.string,
};

export default CardsFrame;
