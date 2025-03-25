import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

// Styled radio button container
const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: ${(props) => (props.disabled ? "#aaa" : "#333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const StyledRadio = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #007bff;
  cursor: pointer;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  checked,
  onChange,
  disabled,
}) => {
  return (
    <StyledLabel disabled={disabled}>
      <StyledRadio
        type="radio"
        name={name}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
export {}; // Ensures module behavior
