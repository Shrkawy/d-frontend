import { CategoryContainer } from "./Categories.styles";

export interface Category {
  img: string;
  title: string;
}

interface CategoryProps {
  item: Category;
}

const CategoriesList = ({ item }: CategoryProps) => {
  return (
    <CategoryContainer>
      <div className="image-container">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="info">
        <h1>{item.title}</h1>
        <button>SHOP NOW</button>
      </div>
    </CategoryContainer>
  );
};

export default CategoriesList;
