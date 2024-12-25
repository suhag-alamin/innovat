import Education from "../components/ui/home/Education";
import Hero from "../components/ui/home/Hero";
import InvestmentFunds from "../components/ui/home/InvestmentFunds";
import OurApproach from "../components/ui/home/OurApproach";
import ResearchCenter from "../components/ui/home/ResearchCenter";
import "../styles/home.scss";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurApproach />
      <InvestmentFunds />
      <Education />
      <ResearchCenter />
    </div>
  );
};

export default Home;
