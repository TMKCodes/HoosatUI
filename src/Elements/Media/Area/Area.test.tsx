import React from 'react';
import { render } from '@testing-library/react';
import { Area } from './Area';

describe('Area', () => {
  it('does not render with children', () => {
    const { getByTestId } = render(<Area data-testid="testarea">Test Area</Area>);
    expect(getByTestId("testarea")).toBeEmptyDOMElement()
  });

  it('renders with className', () => {
    const { container } = render(<Area className="test-class" />);
    expect(container.firstChild).toHaveClass('Area');
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('renders with additional props', () => {
    const { container } = render(<Area shape="rect" coords="34,44,270,350" alt="Computer" href="http://google.com" />);
    expect(container.firstChild).toHaveAttribute('href', 'http://google.com');
  });
});