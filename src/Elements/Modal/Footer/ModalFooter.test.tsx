import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { ModalFooter } from './ModalFooter';

describe('ModalFooter component', () => {

  it('should render default class names', () => {
    const { getByTestId } = render(<ModalFooter data-testid="modal-footer-container" />);
    const footerContainer = getByTestId('modal-footer-container');

    expect(footerContainer).toHaveClass('ModalFooter');
  });

  it('should render passed class names', () => {
    const { getByTestId } = render(<ModalFooter data-testid="modal-footer-container" className="my-class-name" />);
    const footerContainer = getByTestId('modal-footer-container');

    expect(footerContainer).toHaveClass('my-class-name');
  });

  it('should render children', () => {
    const { getByTestId } = render(<ModalFooter data-testid="modal-footer-container">My Footer Content</ModalFooter>);
    const footerContainer = getByTestId('modal-footer-container');

    expect(footerContainer).toHaveTextContent('My Footer Content');
  });
});