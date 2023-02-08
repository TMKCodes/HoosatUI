import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { ModalFooter } from './ModalFooter';

describe('ModalFooter component', () => {

  it('should render default class names', () => {
    const { getByTestId } = render(<ModalFooter />);
    const footerContainer = getByTestId('modal-footer-container');

    expect(footerContainer).toHaveClass('flex');
    expect(footerContainer).toHaveClass('flex-shrink-0');
    expect(footerContainer).toHaveClass('flex-wrap');
    expect(footerContainer).toHaveClass('items-center');
    expect(footerContainer).toHaveClass('justify-end');
    expect(footerContainer).toHaveClass('p-4');
    expect(footerContainer).toHaveClass('border-t');
    expect(footerContainer).toHaveClass('border-gray-200');
    expect(footerContainer).toHaveClass('rounded-b-md');
  });

  it('should render passed class names', () => {
    const { getByTestId } = render(<ModalFooter className="my-class-name" />);
    const footerContainer = getByTestId('modal-footer-container');

    expect(footerContainer).toHaveClass('my-class-name');
  });

  it('should render children', () => {
    const { getByTestId } = render(<ModalFooter>My Footer Content</ModalFooter>);
    const footerContainer = getByTestId('modal-footer-container');

    expect(footerContainer).toHaveTextContent('My Footer Content');
  });
});