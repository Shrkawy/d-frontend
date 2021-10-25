import styled from "styled-components";
import { Cart, Search } from "../icons";
import Badge from "./UI/Badge";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <span>EN</span>
          <SearchContainer>
            <input type="text" />
            <Search size={20} />
          </SearchContainer>
        </Left>

        <Center>
          <h1>LAMA.</h1>
        </Center>

        <Right>
          <button>REGISTER</button>
          <button>SIGN IN</button>
          <Badge badgeContent={1} badgeColor="teal">
            <Cart size={20} />
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.header`
  height: 3.75rem;
`;

const Wrapper = styled.div`
  padding: 0.625rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    flex: 1;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  padding: 0.375rem;

  & span {
    font-size: 0.875rem;
    cursor: pointer;
  }

  & input {
    border: none;
  }

  & input:focus {
    outline: none;
  }
`;

const Center = styled.div`
  text-align: center;

  & h1 {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;

  & button {
    all: unset;
    cursor: pointer;
    font-size: 0.75rem;
  }
`;

export default Navbar;
