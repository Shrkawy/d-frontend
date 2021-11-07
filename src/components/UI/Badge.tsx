import { ReactNode } from "react";
import styled from "styled-components";

interface BadgeProps {
  children: ReactNode;
  badgeColor?: string;
  badgeContent: number;
}

const Badge = ({ children, badgeContent = 0, badgeColor }: BadgeProps) => {
  return (
    <Container>
      {children}
      {badgeContent > 0 && (
        <span style={{ backgroundColor: badgeColor || "red" }}>
          {badgeContent}
        </span>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: max-content;
  cursor: pointer;

  & span:last-of-type {
    position: absolute;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 200;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;
    top: -0.25rem;
    right: -0.375rem;
    color: white;
    opacity: 90%;
  }
`;

export default Badge;
