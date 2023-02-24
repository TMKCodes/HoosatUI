import React from 'react';
import { render } from '@testing-library/react';
import { List } from './List';

describe('List', () => {
  test('renders a ul element by default', () => {
    const { container } = render(<List>list item</List>);
    expect(container.querySelector('ul')).toBeInTheDocument();
  });

  test('renders an ol element when marker prop is "ol"', () => {
    const { container } = render(<List marker="ol">list item</List>);
    expect(container.querySelector('ol')).toBeInTheDocument();
  });

  test('renders children', () => {
    const { getByText } = render(<List>list item</List>);
    expect(getByText('list item')).toBeInTheDocument();
  });

  test('passes down extra props', () => {
    const { container } = render(<List data-testid="list">list item</List>);
    expect(container.firstChild).toHaveAttribute('data-testid', 'list');
  });
});