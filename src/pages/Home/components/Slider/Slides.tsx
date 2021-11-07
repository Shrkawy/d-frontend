import {
  SlideContainer,
  SlideWrapper,
  ImageContainer,
  Description,
} from "./Slider.styles";

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

export interface SliderContainerProps {
  currSlide: number;
  currIndex: number;
  bg?: string;
}

export interface ContainerProps {
  length: number;
}

const Slides = ({ slides, currSlide }: SlidesProps) => {
  return (
    <SlideContainer length={slides.length}>
      {slides.map(({ imgSrc, title, description, bg }, i) => (
        <SlideWrapper key={i} currSlide={currSlide} currIndex={i} bg={bg}>
          <ImageContainer>
            <img src={imgSrc} alt="product" />
          </ImageContainer>
          <Description>
            <h1>{title}</h1>
            <p>{description}</p>
            <button>SHOP NOW</button>
          </Description>
        </SlideWrapper>
      ))}
    </SlideContainer>
  );
};

export default Slides;
