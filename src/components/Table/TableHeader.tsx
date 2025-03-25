import React from "react";
import styled from "styled-components";

const StyledHeader = styled.thead`
  background-color: #007bff;
  color: white;
`;

const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default TableHeader;
export {};
