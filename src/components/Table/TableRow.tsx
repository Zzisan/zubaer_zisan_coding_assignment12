import React from "react";
import styled from "styled-components";

const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default TableRow;
export {};
