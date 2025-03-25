import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.tfoot`
  background-color: rgb(16, 43, 71); /* Blue background */
  color: white; /* White text */
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  padding: 12px;
  border-top: 3px solidrgb(0, 0, 0);
`;

const TableFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledFooter>
      <tr>
        <td colSpan={100}>{children}</td>
      </tr>
    </StyledFooter>
  );
};

export default TableFooter;
export {};
