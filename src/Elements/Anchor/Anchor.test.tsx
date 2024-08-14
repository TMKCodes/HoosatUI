import React from 'react';
import { render } from '@testing-library/react';
import { Anchor } from './Anchor';

describe('Anchor', () => {
  test('renders a label with children', () => {
    const { getByText } = render(<Anchor data-testid="label" href="/">Hello World</Anchor>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  test('passes through props', () => {
    const { getByTestId } = render(<Anchor data-testid="label" href="/">Anchor Text</Anchor>);
    expect(getByTestId('label')).toHaveAttribute('href', '/');
  });
});