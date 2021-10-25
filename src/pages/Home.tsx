import Announcement from "../components/Announcement";
import Categories from "../components/Categories/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
