import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListItem } from './ListItem';

describe('ListItem', () => {
  it('renders children', () => {
    render(<ListItem>Test item</ListItem>);
    expect(screen.getByText('Test item')).toBeInTheDocument();
  });

  it('renders with additional className', () => {
    render(<ListItem className="test">Test item</ListItem>);
    expect(screen.getByText('Test item')).toHaveClass('test');
  });

  it('renders with rest props', () => {
    render(<ListItem data-testid="test-id">Test item</ListItem>);
    expect(screen.getByTestId('test-id')).toBeInTheDocument();
  });
});