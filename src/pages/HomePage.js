import FrameComponent from "../components/FrameComponent";
import TestFrame from "../components/TestFrame";
import FrameComponent2 from "../components/FrameComponent2";
import AboutUsFrame from "../components/AboutUsFrame";
import ExtraCuricullar from "../components/ExtraCuricullar";
import MacBookAir from "../components/MacBookAir";
import InfrastructureSection from "../components/InfrastructureSection";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent8 from "../components/FrameComponent8";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <FrameComponent logo1="/logo-1@2x.png" />
      <TestFrame />
      <FrameComponent2 />
      <section className="about-us-content">
        <AboutUsFrame />
        <ExtraCuricullar />
      </section>
      <section className="strengths">
        <MacBookAir />
        <InfrastructureSection />
        <FrameComponent13 />
      </section>
      <section className="frame-parent68">
        <FrameComponent1 />
        <FrameComponent10 />
        <FrameComponent8 />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
