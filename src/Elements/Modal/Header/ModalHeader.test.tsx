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
  