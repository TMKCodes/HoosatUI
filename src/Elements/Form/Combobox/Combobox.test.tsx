import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent} from '@testing-library/react';
import { Combobox } from './Combobox';


describe('Combobox', () => {
  it('renders label and input correctly', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const { getByTestId, getByText } = render(<Combobox label="Search" options={options} id="testing"/>);
    const label = getByText("Search");
    const input = getByTestId("combobox-input");
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: {value: "Option"}});
    expect(getByText(options[1])).toBeInTheDocument();
  });

  it('update search text on input change', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const { getByTestId, getByText } = render(<Combobox label="Search" options={options} id="testing"/>);
    const input = getByTestId("combobox-input");
    fireEvent.change(input, { target: {value: "Option"}});
    expect(getByText(options[1])).toBeInTheDocument();
    fireEvent.change(input, { target: {value: "Option 1"}});
    expect(getByText(options[0])).toBeInTheDocument();
  });

  it('shows and hides options on input click', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const { getByTestId, queryByText } = render(<Combobox label="Search" options={options} id="testing"/>);
    const input = getByTestId("combobox-input");
    fireEvent.click(input);
    expect(queryByText(options[1])).toBeInTheDocument();
    fireEvent.click(input);
    expect(queryByText(options[1])).not.toBeInTheDocument();
  });
});