import React from 'react';
import { render } from '@testing-library/react';
import { Image } from './Image';

describe('Image', () => {
  it('renders with src attribute', () => {
    const { container } = render(<Image src="https://hoosat.fi/logo512.png" />);
    expect(container.firstChild).toHaveAttribute('src', 'https://hoosat.fi/logo512.png');
  });

  it('renders with className', () => {
    const { container } = render(<Image className="test-class" />);
    expect(container.firstChild).toHaveClass('Image');
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('renders with additional props', () => {
    const { container } = render(<Image alt="test" />);
    expect(container.firstChild).toHaveAttribute('alt', 'test');
  });
});