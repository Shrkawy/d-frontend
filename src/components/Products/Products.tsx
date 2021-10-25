import styled from "styled-components";
import Product, { PRODUCT } from "./Product";

const myProducts: PRODUCT[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1536992266094-82847e1fd431?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=878&q=80",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1617178388553-a9d022974a5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1630396800965-29a451dc3a78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1633281651825-5f3c9b55f6a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1623583043462-3a0d4ccaf902?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  },
];

const Products = () => {
  return (
    <Container>
      {myProducts.map((p) => (
        <Product item={p} key={p.id} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 3.5rem 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  row-gap: 2rem;
`;

export default Products;
