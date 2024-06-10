import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Testimonial from "./Testimonial/Testimonial";
import TopEarners from "./TopEarners/TopEarners";
import WorkSection from "./WorkSection/WorkSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Task-Rabbit || Home</title>
      </Helmet>
      <Banner />
      <Features />
      <WorkSection />
      <TopEarners />
      <Testimonial />
    </>
  );
};

export default Home;
