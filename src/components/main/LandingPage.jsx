import Navbar from "../landingpagecomponents/Navbar";
import HeroPage from "../landingpagecomponents/HeroPage";
import FeaturesCard from "../landingpagecomponents/FeaturesCard";
import Footer from "../landingpagecomponents/Footer";

function LandingPage() {
  return (
    <div className="bg-[#050816] text-white">
      <Navbar />
      <HeroPage />
      <FeaturesCard />
      <Footer />
    </div>
  );
}

export default LandingPage;
