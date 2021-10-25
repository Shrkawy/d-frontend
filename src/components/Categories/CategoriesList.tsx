import styled from "styled-components";

export interface Category {
  img: string;
  title: string;
}

interface CategoryProps {
  items: Category[];
}

const CategoriesList = ({ items }: CategoryProps) => {
  return (
    <>
      {items.map(({ img, title }, i) => (
        <Container key={i}>
          <div className="image-container">
            <img src={img} alt={title} />
          </div>
          <div className="info">
            <h1>{title}</h1>
            <button>SHOP NOW</button>
          </div>
        </Container>
      ))}
    </>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;

  &:hover {
    & img {
      transform: scale(1.1);
    }
  }

  & .image-container {
    height: 70vh;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      transition: all 500ms ease;
    }
  }

  & .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0000003d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    & h1 {
      color: white;
    }

    & button {
      all: unset;
      cursor: pointer;
      padding: 0.625rem;
      background-color: #fff;
      color: gray;
      font-weight: 500;
      border-radius: 2px;
    }
  }
`;

export default CategoriesList;
