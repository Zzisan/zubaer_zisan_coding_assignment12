import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

// Styled dropdown
const StyledSelect = styled.select<{ disabled?: boolean }>`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.disabled ? "#eee" : "white")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, disabled }) => {
  return (
    <StyledSelect
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
export {}; // Ensure module behavior
