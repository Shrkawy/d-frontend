import styled from "styled-components";
import { Facebook, Instagram, Pinterest, Twitter } from "../icons";

interface IconProps {
  color: string;
}

const Footer = () => {
  return (
    <Container>
      <div className="left">
        <h1>LAMA.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo
          quia ratione et ab numquam animi autem quod enim neque dignissimos
          voluptas laborum, odit quaerat dolor perspiciatis sint repudiandae
          dolorum.
        </p>
        <div className="social">
          <Icon color="#385999">
            <Facebook />
          </Icon>
          <Icon color="#E4405F">
            <Instagram size={24} />
          </Icon>
          <Icon color="#55ACEE">
            <Twitter size={24} />
          </Icon>
          <Icon color="#E60023">
            <Pinterest size={24} />
          </Icon>
        </div>
      </div>
      <div className="center"></div>
      <div className="right"></div>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;

  & > div {
    flex: 1;
  }

  & .left {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;

    & .social {
      display: flex;
      gap: 0.625rem;
    }
  }
`;

const Icon = styled.div<IconProps>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default Footer;
