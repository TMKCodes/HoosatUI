import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { Input } from '../Input/Input';

describe('Input', () => {
  it('renders label and input with correct values', () => {
    const id = 'test-input';
    const label = 'Test Input';
    const type = 'text';
    const placeholder = 'Enter something';
    const value = 'test value';
    const onChange = jest.fn();
  
    const { getByLabelText, getByPlaceholderText } = render(
      <Input
        id={id}
        label={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  
    const input = getByPlaceholderText(placeholder);
    const inputLabel = getByLabelText(label);
  
    expect(input).toBeInTheDocument();
    expect(inputLabel).toBeInTheDocument();
    expect(input).toHaveAttribute('id', id);
    expect(input).toHaveAttribute('type', type);
    expect(input).toHaveAttribute('value', value);
    expect(input).toHaveAttribute('placeholder', placeholder);
  });
  
  it('calls onChange function when input value is changed', () => {
    const id = 'test-input';
    const label = 'Test Input';
    const type = 'text';
    const placeholder = 'Enter something';
    const value = 'test value';
    const onChange = jest.fn();
  
    const { getByPlaceholderText } = render(
      <Input
        id={id}
        label={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  
    const input = getByPlaceholderText(placeholder);
  
    fireEvent.change(input, { target: { value: 'new value' } });
  
    expect(onChange).toHaveBeenCalled();
  });
});