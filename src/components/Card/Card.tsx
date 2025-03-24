import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

// Styled Card Container
const CardContainer = styled.div<{ width?: string }>`
  width: ${(props) => props.width || '300px'}; /* Ensure width is applied */
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  background: #fff;
`;

// Styled Card Image
const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// Styled Card Content
const CardContent = styled.div`
  padding: 16px;
`;

// Styled Card Title
const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

// Styled Card Description
const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Styled Button
const CardButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #0056b3;
  }
`;

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
  width,
}) => {
  return (
    <CardContainer width={width}>
      {' '}
      {/* Pass width as a prop */}
      {image && <CardImage src={image} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {buttonText && (
          <CardButton onClick={onButtonClick}>{buttonText}</CardButton>
        )}
      </CardContent>
    </CardContainer>
  );
};

export default Card;
export {}; // Ensures module behavior
