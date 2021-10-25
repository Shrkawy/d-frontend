import Announcement from "../components/Announcement";
import Categories from "../components/Categories/Categories";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
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
      <NewsLetter />
    </div>
  );
};

export default Home;
