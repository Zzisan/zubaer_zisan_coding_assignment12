import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

// Styled Table Container
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

const Table: React.FC<TableProps> = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export default Table;
export {}; // Ensure module behavior
