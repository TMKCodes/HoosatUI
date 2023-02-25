import React from 'react';
import { render } from '@testing-library/react';
import { Flex, FlexItem } from './Flex';

describe('Flex', () => {
  it('renders children', () => {
    const { getByText } = render(<Flex><span>hello world</span></Flex>);
    expect(getByText('hello world')).toBeInTheDocument();
  });

  it('applies additional class names', () => {
    const { container } = render(<Flex className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('passes through additional props', () => {
    const { container } = render(<Flex data-testid="test-id" />);
    expect(container.firstChild).toHaveAttribute('data-testid', 'test-id');
  });
});

describe('FlexItem', () => {
  it('renders children', () => {
    const { getByText } = render(<FlexItem><span>hello world</span></FlexItem>);
    expect(getByText('hello world')).toBeInTheDocument();
  });

  it('applies additional class names', () => {
    const { container } = render(<FlexItem className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('passes through additional props', () => {
    const { container } = render(<FlexItem data-testid="test-id" />);
    expect(container.firstChild).toHaveAttribute('data-testid', 'test-id');
  });
});