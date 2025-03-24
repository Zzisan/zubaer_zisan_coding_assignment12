import React from 'react';
import styled from 'styled-components';

// Styled table cell
const StyledCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

const TableCell: React.FC<TableCellProps> = ({
  children,
  colSpan,
  ...props
}) => {
  return (
    <StyledCell colSpan={colSpan} {...props}>
      {children}
    </StyledCell>
  );
};

export default TableCell;
export {};
