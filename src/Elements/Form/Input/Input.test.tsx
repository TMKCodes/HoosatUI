import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input component', () => {
  it('renders an input element with default styles', () => {
    const { getByRole } = render(<Input />);
    const inputElement = getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('Input');
  });

  it('renders an input element with a label', () => {
    const { getByLabelText } = render(<Input id="test" label="Username" />);
    const labelElement = getByLabelText('Username');
    expect(labelElement).toBeInTheDocument();
  });

  it('renders an input element with primary variant styles', () => {
    const { getByRole } = render(<Input variant="primary" />);
    const inputElement = getByRole('textbox');
    expect(inputElement).toHaveClass('Input', 'primary');
  });

  it('renders an input element with secondary variant styles', () => {
    const { getByRole } = render(<Input variant="secondary" />);
    const inputElement = getByRole('textbox');
    expect(inputElement).toHaveClass('Input', 'secondary');
  });

  it('calls the onChange function when the input value changes', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<Input onChange={onChangeMock} />);
    const inputElement = getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('disables the input element when disabled prop is true', () => {
    const { getByRole } = render(<Input disabled />);
    const inputElement = getByRole('textbox');
    expect(inputElement).toBeDisabled();
  });
});