import GroupComponent5 from "./GroupComponent5";
import GroupComponent4 from "./GroupComponent4";
import GroupComponent3 from "./GroupComponent3";
import PropTypes from "prop-types";
import "./Desktop.css";

const Desktop = ({ className = "" }) => {
  return (
    <div className={`desktop-1 ${className}`}>
      <GroupComponent5 />
      <GroupComponent4 />
      <div className="frame-parent93">
        <div className="image-52-wrapper">
          <img
            className="image-52-icon"
            loading="lazy"
            alt=""
            src="/image-52@2x.png"
          />
        </div>
        <div className="our-vision-parent">
          <h1 className="our-vision1">
            <ol className="our-vision2">
              <li>Our Vision</li>
            </ol>
          </h1>
          <div className="our-vision-is-container1">
            <p className="our-vision-is">
              Our Vision is to be a Premier Global Educational Institution that
              cultivates academic, physical, psychological and social well-being
              through our motto Excellence in Education and All Round
              Development and "Moulding Global Citizen"
            </p>
            <p className="our-vision-is">&nbsp;</p>
            <p className="our-vision-is">
              The rich diversity within our student community is now one of our
              key strengths. Telangana is noted for having the very highest
              educational expectations in the world. As the desire for high
              quality education has grown, our school has responded to meet this
              demand. In the days to come, we will continue to ensure that
              Montessori is responsive to Telangana's changing needs.
            </p>
          </div>
        </div>
      </div>
      <GroupComponent3
        propWidth="82.188rem"
        propHeight="unset"
        propDisplay="flex"
        propFlexDirection="row"
        propPadding="0rem 0rem var(--padding-24xl) var(--padding-xl)"
        propPosition="relative"
        propWidth1="52.6rem"
        propTop="unset"
        propLeft="unset"
        weBelieveThatCreativeAchievemen="Montessori Prime School is a K-XII class, co-educational school, offering a choice between Residential, Weekly Boarding and Day Scholastic programs. The school offers a full day program of activities, with a judicious mix of academic, sporting and co-curricular activities, in order to provide truly board based and comprehensive all round education. The education program is student centered and all students are encouraged to develop their innate potential to the fullest. A rigorous curriculum has been devised to take care of the intellectual needs of its students, with a specific emphasis on preparation for further academic study in India or aboard. A humane attitude in the school promotes self esteem, supports and encourages constructive student interaction."
        montessoriPrimeSowsTheSeeds="The students are encouraged to set career goals for themselves; to hone their learning and study skills as well as their interpersonal and leadership abilities. In the area of career enhancement, students have opportunities to connect with mentors through our career counseling and Life-skills programs, run by qualified professional teams."
        propMargin="0 !important"
        propTop1="0rem"
        propLeft1="-1.75rem"
        propWidth2="24.813rem"
        propDisplay1="inline-block"
        creativeSkills="Our Programs"
      />
      <GroupComponent3
        weBelieveThatCreativeAchievemen="We believe that creative achievements build a confident human being with great self worth and esteem. Music and dance, theatre, pottery and painting, crafting models are not just extracurricular activities; they are co-curricular activities integrated to their course of study to let the children understand how all learning is interconnected-baking with Chemistry, bowling with Physics, music with Mathematics."
        montessoriPrimeSowsTheSeeds="Montessori Prime sows the seeds of discipline in all the children in such a way that they germinate into complete human beings. The curricula themselves have the discipline aspect embedded within them. With this, a child learns to obey and respect time and punctuality gets into his/her blood forever."
        creativeSkills="Creative Skills"
      />
    </div>
  );
};

Desktop.propTypes = {
  className: PropTypes.string,
};

export default Desktop;
