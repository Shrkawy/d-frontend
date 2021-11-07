import { Category } from "./CategoriesList";
import { CategoriesContainer } from "./Categories.styles";
import { CategoriesList } from ".";

const items: Category[] = [
  {
    img: "https://images.unsplash.com/photo-1591567462127-1f25099900ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=833&q=80",
    title: "SHIRT STYLE",
  },
  {
    img: "https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    title: "LAUNGEWEAR LOVE",
  },
  {
    img: "https://images.unsplash.com/photo-1589810635657-232948472d98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    title: "LIGHT JACKETS",
  },
];

const Categories = () => {
  return (
    <CategoriesContainer>
      {items.map((item) => (
        <CategoriesList item={item} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
