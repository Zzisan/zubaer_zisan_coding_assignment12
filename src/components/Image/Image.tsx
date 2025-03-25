import React from 'react';
import styled from 'styled-components';
import { ImageProps } from './Image.types';

// Styled Image Component
const StyledImage = styled.img<{ rounded?: boolean; bordered?: boolean }>`
  max-width: 100%;
  height: auto;
  border-radius: ${(props) => (props.rounded ? '10px' : '0')};
  border: ${(props) => (props.bordered ? '2px solid #ccc' : 'none')};
`;

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  rounded,
  bordered,
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      rounded={rounded}
      bordered={bordered}
    />
  );
};

export default Image;
export {}; // Ensures module behavior
