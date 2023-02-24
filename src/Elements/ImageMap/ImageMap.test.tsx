import React from 'react';
import { render } from '@testing-library/react';
import { ImageMap } from './ImageMap';

describe('ImageMap', () => {
  it('renders with children', () => {
    const { getByText } = render(<ImageMap>Test Map</ImageMap>);
    expect(getByText('Test Map')).toBeInTheDocument();
  });

  it('renders with className', () => {
    const { container } = render(<ImageMap className="test-class" />);
    expect(container.firstChild).toHaveClass('Map');
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('renders with additional props', () => {
    const { container } = render(<ImageMap name="test" />);
    expect(container.firstChild).toHaveAttribute('name', 'test');
  });
});