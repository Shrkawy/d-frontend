import styled from "styled-components";
import { Mail } from "../icons";

const NewsLetter = () => {
  return (
    <Container>
      <h1 className="title">Newsletter</h1>
      <p className="desc">Get timely udpates from favourite products.</p>
      <div className="input">
        <input type="email" name="email" placeholder="your email" />
        <button type="submit" name="email">
          <Mail size={24} />
        </button>
      </div>
    </Container>
  );
};

const Container = styled.section`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .title {
    font-size: 4.375rem;
    margin: 1.25rem;
  }

  & .desc {
    font-size: 2rem;
    font-weight: 300;
    margin: 1.25rem;
  }

  & .input {
    width: 50%;
    height: 2.5rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

    & input {
      border: none;
      padding-left: 1.25rem;
      flex: 1;

      &:focus {
        outline: none;
      }
    }

    & button {
      width: 4rem;
      cursor: pointer;
      border: none;
      border-radius: 0;
      background-color: teal;
      color: #fff;
    }
  }
`;

export default NewsLetter;
