import React from "react";
import styled from "styled-components";
import { InputProps } from "./Input.types";

// Styled Input Container
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

// Styled Label
const StyledLabel = styled.label`
  font-size: 14px;
  color: #333;
`;

// Styled Input
const StyledInput = styled.input<{ hasError?: boolean }>`
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#ccc")};
  border-radius: 4px;
  outline: none;
  width: 100%;

  &:focus {
    border-color: ${(props) => (props.hasError ? "red" : "#007bff")};
  }

  &:disabled {
    background: #f3f3f3;
    cursor: not-allowed;
  }
`;

// Error Message
const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`;

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  error,
}) => {
  return (
    <InputContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        hasError={!!error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
export {}; // Ensures module behavior
