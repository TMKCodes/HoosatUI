import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button>Click me!</Button>);
    expect(getByText('Click me!')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me!</Button>
    );
    fireEvent.click(getByText('Click me!'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the "primary" class when variant prop is "primary"', () => {
    const { getByText } = render(<Button variant="primary">Click me!</Button>);
    expect(getByText('Click me!')).toHaveClass('primary');
  });

  it('applies the "secondary" class when variant prop is "secondary"', () => {
    const { getByText } = render(<Button variant="secondary">Click me!</Button>);
    expect(getByText('Click me!')).toHaveClass('secondary');
  });
});