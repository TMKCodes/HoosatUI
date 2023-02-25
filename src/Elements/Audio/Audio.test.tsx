import React from 'react';
import { render } from '@testing-library/react';
import { Audio } from './Audio';

describe('Audio', () => {
  it('renders audio element', () => {
    const { container } = render(<Audio />);
    expect(container.querySelector('audio')).toBeInTheDocument();
  });

  it('applies additional class names', () => {
    const { container } = render(<Audio className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('passes through additional props', () => {
    const { container } = render(<Audio data-testid="test-id" />);
    expect(container.firstChild).toHaveAttribute('data-testid', 'test-id');
  });
});