import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { ModalHeader } from './ModalHeader';

describe('ModalHeader component', () => {
  it('renders the header text and close button', () => {
    const headerText = 'Modal Header';
    const onClick = jest.fn();
    const { getByText } = render(<ModalHeader header={headerText} onClick={onClick} />);

    const headerElement = getByText(headerText);
    expect(headerElement).toBeInTheDocument();

    const closeButton = getByText('x');
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(onClick).toHaveBeenCalled();
  });

  it('renders children components', () => {
    const headerText = 'Modal Header';
    const onClick = jest.fn();
    const children = <p>Modal Header Children</p>;
    const { getByText } = render(<ModalHeader header={headerText} onClick={onClick}>{children}</ModalHeader>);

    const headerElement = getByText(headerText);
    expect(headerElement).toBeInTheDocument();

    const closeButton = getByText('x');
    expect(closeButton).toBeInTheDocument();

    const childrenElement = getByText('Modal Header Children');
    expect(childrenElement).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(onClick).toHaveBeenCalled();
  });

  it('renders default class names', () => {
    const headerText = 'Modal Header';
    const onClick = jest.fn();
    const { container } = render(<ModalHeader header={headerText} onClick={onClick} />);

    expect(container.firstChild).toHaveClass('flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md');
    expect(container.querySelector('h5')).toHaveClass('text-xl font-medium leading-normal text-gray-800');
    expect(container.querySelector('button')).toHaveClass('reset-all-before box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline');
  });

  it('renders custom class names', () => {
    const headerText = 'Modal Header';
    const className = {
      container: 'custom-container',
      header: 'custom-header',
      closeButton: 'custom-close-button',
    };
    const { getByText, container } = render(<ModalHeader header={headerText} onClick={() => {}} className={className} />);
    expect(getByText(headerText)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(className.container);
    expect(getByText(headerText)).toHaveClass(className.header);
    expect(getByText('x')).toHaveClass(className.closeButton);
  });

  it('calls onClick function when close button is clicked', () => {
    const header = 'Test header';
    const onClick = jest.fn();
    const { getByText } = render(<ModalHeader header={header} onClick={onClick} />);
    const closeButton = getByText('x');
    closeButton.click();
    expect(onClick).toHaveBeenCalled();
  });

  it('renders children if passed', () => {
    const header = 'Test header';
    const children = <div>Test children</div>;
    const { getByText } = render(<ModalHeader header={header} onClick={() => {}}>{children}</ModalHeader>);
    expect(getByText('Test children')).toBeInTheDocument();
  });
});
  