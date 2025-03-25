import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

// Styled component for the label
const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.disabled ? "#aaa" : "#333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: block;
  margin-bottom: 5px;
`;

const Label: React.FC<LabelProps> = ({ children, htmlFor, disabled }) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled}>
      {children} {/* FIXED: Use children instead of text */}
    </StyledLabel>
  );
};

export default Label;
export {}; // Ensures module behavior
