import React from 'react';
import { render } from '@testing-library/react';
import { Paragraph } from './Paragraph';

describe('paragraph', () => {
  test('renders a paragraph with children', () => {
    const { getByText } = render(<Paragraph>Hello World</Paragraph>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  test('passes through props', () => {
    const text = "Paragraph text";
    const { getByTestId } = render(<Paragraph data-testid="paragraph">{text}</Paragraph>);
    expect(getByTestId('paragraph')).toHaveTextContent(text);
  });
});