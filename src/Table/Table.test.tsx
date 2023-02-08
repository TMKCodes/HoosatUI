import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { Table } from './Table';

describe('Table component', () => {
  const rows = [
    {
      _id: '1',
      selected: false,
      data: {
        column1: 'Value 1',
        column2: 'Value 2',
        column3: 'Value 3',
      },
    },
    {
      _id: '2',
      selected: true,
      data: {
        column1: 'Value 4',
        column2: 'Value 5',
        column3: 'Value 6',
      },
    },
  ];
  it('renders the table headers', () => {
    const headers = ['Header 1', 'Header 2', 'Header 3'];
    const { getByText } = render(<Table headers={headers} rows={rows} />);

    headers.forEach((header) => {
      expect(getByText(header)).toBeInTheDocument();
    });
  });

  it('renders the table rows', () => {
    const { getByText } = render(<Table rows={rows} />);

    rows.forEach((row) => {
      Object.values(row.data).forEach((value) => {
        expect(getByText(value)).toBeInTheDocument();
      });
    });
  });

  it('calls the onClick function when a table cell is clicked', () => {
    const onClick = jest.fn();
    const rows = [
      {
        _id: '1',
        selected: false,
        data: {
          column1: 'Value 1',
        },
        onClick,
      },
    ];
    const { getByText } = render(<Table rows={rows} />);

    fireEvent.click(getByText('Value 1'));
    expect(onClick).toHaveBeenCalled();
  });
});