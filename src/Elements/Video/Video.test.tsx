import React from 'react';
import { render } from '@testing-library/react';
import { Video } from './Video';

describe('Video', () => {
  it('renders video element', () => {
    const { container } = render(<Video />);
    expect(container.querySelector('video')).toBeInTheDocument();
  });

  it('applies additional class names', () => {
    const { container } = render(<Video className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('passes through additional props', () => {
    const { container } = render(<Video data-testid="test-id" />);
    expect(container.firstChild).toHaveAttribute('data-testid', 'test-id');
  });
});