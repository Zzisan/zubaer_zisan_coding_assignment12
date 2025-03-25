import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

// Styled Hero Image Container
const HeroContainer = styled.div<{
  src: string;
  height?: string;
  overlay?: boolean;
}>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  height: ${(props) => props.height || "400px"};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  color: white;
  padding: 20px;

  ${(props) =>
    props.overlay &&
    `
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  `};
`;

// Styled Text Container
const TextContainer = styled.div<{ align?: "left" | "center" | "right" }>`
  position: relative;
  max-width: 80%;
  text-align: ${(props) => props.align || "center"};
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  title,
  subtitle,
  height,
  overlay,
  align,
}) => {
  return (
    <HeroContainer src={src} height={height} overlay={overlay}>
      <TextContainer align={align}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </TextContainer>
    </HeroContainer>
  );
};

export default HeroImage;
export {}; // Ensures module behavior
