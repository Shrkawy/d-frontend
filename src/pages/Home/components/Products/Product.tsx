import { Search, Cart, Heart } from "../../../../icons";
import { ProductContainer } from "./Products.styles";

export interface PRODUCT {
  id: number;
  img: string;
}

interface ProductProps {
  item: PRODUCT;
}

const Product = ({ item }: ProductProps) => {
  return (
    <ProductContainer>
      <img src={item.img} alt="product" />
      <div className="info">
        <div className="icon">
          <Search size={24} />
        </div>
        <div className="icon">
          <Cart size={24} />
        </div>
        <div className="icon">
          <Heart size={24} />
        </div>
      </div>
    </ProductContainer>
  );
};

export default Product;
