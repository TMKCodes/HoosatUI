import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { Select } from '../Select/Select';

describe('Select component', () => {
  it('renders with given props', () => {
    const props = {
      id: 'test-select',
      name: 'test-select',
      label: 'Test Select',
      className: {
        label: 'test-label-class',
        select: 'test-select-class',
      },
      onChange: jest.fn(),
      options: ['option 1', 'option 2', 'option 3'],
      multiple: false,
    };
    const { getByLabelText, getByText } = render(<Select {...props} />);

    const select = getByLabelText(props.label);
    expect(select.id).toEqual(props.id);
    expect(select).toHaveClass(`${props.className.select}`);

    props.options.forEach(option => {
      const optionElement = getByText(option);
      expect(optionElement).toBeInTheDocument();
    });
  });

  it('calls onChange function when a value is selected', () => {
    const onChange = jest.fn();
    const props = {
      id: 'test-select',
      name: 'test-select',
      label: 'Test Select',
      onChange,
      options: ['option 1', 'option 2', 'option 3'],
    };
    const { getByLabelText } = render(<Select {...props} />);
    const select = getByLabelText(props.label);

    fireEvent.change(select, { target: { value: 'option 2' } });
    expect(onChange).toHaveBeenCalled();
  });
});