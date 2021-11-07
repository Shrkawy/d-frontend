import { ArrowProps } from "./Slider";
import styled from "styled-components";
import { ContainerProps, SliderContainerProps } from './Slides';

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 3.75rem);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

export const Arrow = styled.button<ArrowProps>`
  all: unset;
  z-index: 2;
  cursor: pointer;
  opacity: 0.5;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "0.625rem"};
  right: ${(props) => props.direction === "right" && "0.625rem"};
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

export const SlideContainer = styled.div<ContainerProps>`
  position: relative;
  width: 100vw;
`;

export const SlideWrapper = styled.div<SliderContainerProps>`
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

export const ImageContainer = styled.div`
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

export const Description = styled.div`
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
