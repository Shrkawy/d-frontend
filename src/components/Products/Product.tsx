import styled, { keyframes } from "styled-components";
import { Search, Cart, Heart } from "../../icons";

export interface PRODUCT {
  id: number;
  img: string;
}

interface ProductProps {
  item: PRODUCT;
}

const Product = ({ item }: ProductProps) => {
  return (
    <Container>
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
    </Container>
  );
};

const scale = keyframes`
    from {
        transform: scale(0)
    }

    to {
        transform: scale(1)
    }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  &:hover {
    & .info {
      opacity: 1;

      & .icon {
        animation: ${scale} 200ms linear;
      }
    }
  }

  & img {
    max-height: 18.75rem;
  }

  & .info {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0000001d;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  & .icon {
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 200ms linear;

    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  }
`;

export default Product;
