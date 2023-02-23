import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading', () => {
  it('renders h1 by default', () => {
    render(<Heading>Hello World</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello World');
  });

  it('renders the correct variant', () => {
    const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    variants.forEach((variant) => {
      render(<Heading variant={variant}>Hello World</Heading>);
      const heading = screen.getByRole('heading', { level: variants.indexOf(variant) + 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Hello World');
    });
  });

  it('applies class name to the heading element', () => {
    render(<Heading className="custom-class">Hello World</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('custom-class');
  });

  it('applies primary class name to the heading element', () => {
    render(<Heading className="primary">Hello World</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('primary');
  });

  it('applies secondary class name to the heading element', () => {
    render(<Heading className="secondary">Hello World</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('secondary');
  });
});