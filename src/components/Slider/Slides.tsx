import styled from "styled-components";

export interface Slide {
  title: string;
  description: string;
  imgSrc: string;
  bg?: string;
}

interface SlidesProps {
  slides: Slide[];
  currSlide: number;
}

interface SliderContainerProps {
  currSlide: number;
  currIndex: number;
  bg?: string;
}

interface ContainerProps {
  length: number;
}

const Slides = ({ slides, currSlide }: SlidesProps) => {
  return (
    <Container length={slides.length}>
      {slides.map(({ imgSrc, title, description, bg }, i) => (
        <SlideContainer key={i} currSlide={currSlide} currIndex={i} bg={bg}>
          <ImageContainer>
            <img src={imgSrc} alt="product" />
          </ImageContainer>
          <Description>
            <h1>{title}</h1>
            <p>{description}</p>
            <button>SHOP NOW</button>
          </Description>
        </SlideContainer>
      ))}
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100vw;
`;

const SlideContainer = styled.div<SliderContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: ${(props) => props.bg || "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.currSlide === props.currIndex ? 1 : 0)};
  transition: all 500ms ease-in-out;

  & > * {
    flex: 1;
  }
`;

const ImageContainer = styled.div`
  max-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & img {
    width: 60%;
    max-width: inherit;
    max-height: inherit;
  }
`;

const Description = styled.div`
  & h1 {
    font-size: 4.375rem;
  }

  & p {
    margin: 50px 0px;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.25rem;
    max-width: 50ch;
  }

  & button {
    all: unset;
    cursor: pointer;
    padding: 0.625rem;
    font-size: 1.25rem;
    border: 1px solid teal;
    color: teal;
  }
`;

export default Slides;
