import React from 'react';
import { render } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  test('renders a label with children', () => {
    const { getByText } = render(<Label>Hello World</Label>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  test('passes through props', () => {
    const { getByTestId } = render(<Label data-testid="label" htmlFor="input">Label Text</Label>);
    expect(getByTestId('label')).toHaveAttribute('for', 'input');
  });
});