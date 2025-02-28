import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

test('Table renders correctly', () => {
  const { getByText } = render(
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
        </TableRow>
      </TableHeader>
    </Table>
  );
  expect(getByText('Header 1')).toBeVisible();
});

test('Table Cell content is rendered correctly', () => {
  const { getByText } = render(
    <Table>
      <TableRow>
        <TableCell>Test Data</TableCell>
      </TableRow>
    </Table>
  );
  expect(getByText('Test Data')).toBeVisible();
});

export {}; // Ensures this file is treated as a module
