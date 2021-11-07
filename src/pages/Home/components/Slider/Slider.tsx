import { useState } from "react";
import { ArrowLeft, ArrowRight } from "../../../../icons";
import Slides, { Slide } from "./Slides";
import { Container, Arrow, Wrapper } from "./Slider.styles";

export interface ArrowProps {
  direction: string;
}

// DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
// "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"

const slides: Slide[] = [
  {
    title: "SUMMER SALE 1",
    bg: "#F3EEE5",
    description:
      "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    imgSrc:
      "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80",
  },
  {
    title: "SUMMER SALE 2",
    description:
      "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    imgSrc: "https://i.ibb.co/DG69bQ4/2.png",
  },
  {
    title: "SUMMER SALE 3",
    description:
      "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    imgSrc:
      "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  },
];

const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);

  const nextSlide = () => {
    if (currSlide === slides.length - 1) return setCurrSlide(0);
    setCurrSlide((curr) => curr + 1);
  };
  const prevSlide = () => {
    if (currSlide === 0) return setCurrSlide(slides.length - 1);
    setCurrSlide((curr) => curr - 1);
  };

  return (
    <Container>
      <Arrow direction="left" onClick={prevSlide}>
        <ArrowLeft />
      </Arrow>

      <Wrapper>
        <Slides currSlide={currSlide} slides={slides} />
      </Wrapper>

      <Arrow direction="right" onClick={nextSlide}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
