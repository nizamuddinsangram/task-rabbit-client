import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Testimonial from "./Testimonial/Testimonial";
import TopEarners from "./TopEarners/TopEarners";
import WorkSection from "./WorkSection/WorkSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <WorkSection />
      <TopEarners />
      <Testimonial />
    </div>
  );
};

export default Home;
