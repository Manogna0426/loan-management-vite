import LandingNavbar from "../components/LandingNavbar";
import HeroModern from "../components/HeroModern";
import FeatureCards from "../components/FeatureCards";
import Ecosystem from "../components/Ecosystem";
import CTA from "../components/CTA";
import FooterModern from "../components/FooterModern";

function Home() {
  return (
    <>
      <LandingNavbar />
      <HeroModern />
      <FeatureCards />
      <Ecosystem />
      <CTA />
      <FooterModern />
    </>
  );
}

export default Home;