import Announcement from "../components/Announcement";
import Categories from "../components/Categories/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
