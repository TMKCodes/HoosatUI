import React from 'react';
import { render } from '@testing-library/react';
import { Table, THead, Th, TBody, Tr, Td } from './Table';

describe('Table', () => {
  it('renders correctly', () => {
    const { getByRole } = render(
      <Table>
        <THead>
          <Tr>
            <Th>Header 1</Th>
            <Th>Header 2</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Row 1, Cell 1</Td>
            <Td>Row 1, Cell 2</Td>
          </Tr>
          <Tr>
            <Td>Row 2, Cell 1</Td>
            <Td>Row 2, Cell 2</Td>
          </Tr>
        </TBody>
      </Table>
    );
    expect(getByRole('table')).toBeInTheDocument();
    expect(getByRole('columnheader', { name: 'Header 1' })).toBeInTheDocument();
    expect(getByRole('columnheader', { name: 'Header 2' })).toBeInTheDocument();
    expect(getByRole('cell', { name: 'Row 1, Cell 1' })).toBeInTheDocument();
    expect(getByRole('cell', { name: 'Row 1, Cell 2' })).toBeInTheDocument();
    expect(getByRole('cell', { name: 'Row 2, Cell 1' })).toBeInTheDocument();
    expect(getByRole('cell', { name: 'Row 2, Cell 2' })).toBeInTheDocument();
  });
});