import React from 'react';
import '@testing-library/jest-dom'
import { render, } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Modal />);
    expect(container).toBeTruthy();
  });

  it('renders with children', () => {
    const { container } = render(<Modal>Test</Modal>);
    expect(container.textContent).toBe('Test');
  });

  it('renders with custom classNames', () => {
    const { container } = render(<Modal className='custom-container-class' />);
    expect(container.firstChild).toHaveClass('custom-container-class');
  });
});