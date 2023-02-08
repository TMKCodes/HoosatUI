import React from 'react';
import '@testing-library/jest-dom'
import { render, } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ModalBody } from './ModalBody';

describe('ModalBody', () => {

  it('renders children correctly', () => {
    const testText = 'Test Content';
    const { getByText } = render(<ModalBody>{testText}</ModalBody>);
    expect(getByText(testText)).toBeInTheDocument();
  });

  it('renders default className correctly', () => {
    const { container } = render(<ModalBody />);
    expect(container.firstChild).toHaveClass('relative p-4');
  });

  it('renders custom className correctly', () => {
    const customClassName = 'custom-class-name';
    const { container } = render(<ModalBody className={customClassName} />);
    expect(container.firstChild).toHaveClass('relative p-4 custom-class-name');
  });
});