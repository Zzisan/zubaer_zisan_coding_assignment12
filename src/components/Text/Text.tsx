import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

// Styled component for text
const StyledText = styled.p<{
  fontSize?: string;
  color?: string;
  bold?: boolean;
  italic?: boolean;
}>`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.color || '#333'};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  margin: 5px 0;
`;

const Text: React.FC<TextProps> = ({
  children,
  fontSize,
  color,
  bold,
  italic,
}) => {
  return (
    <StyledText fontSize={fontSize} color={color} bold={bold} italic={italic}>
      {children}
    </StyledText>
  );
};

export default Text;
export {}; // Ensures module behavior
