import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { ButtonType } from '../@types';

describe('Button component', () => {
  it('renders with default values if no props are passed in', () => {
    const { getByText } = render(<Button />);
    const button = getByText('Button');
  
    expect(button.getAttribute('id')).toBe('');
    expect(button.getAttribute('type')).toBe('button');
    expect(button.classList.contains('py-3')).toBe(true);
    // add additional expectations for other default values
  });

  it('renders with the passed in props', () => {
    const data: ButtonType = {
      id: 'my-button',
      type: 'submit',
      text: 'Click me',
      className: 'custom-class',
      onClick: jest.fn()
    };
    const { getByText } = render(<Button {...data} />);
    const button = getByText('Click me');
  
    expect(button.getAttribute('id')).toBe('my-button');
    expect(button.getAttribute('type')).toBe('submit');
    expect(button.classList.contains('py-3')).toBe(true);
    expect(button.classList.contains('custom-class')).toBe(true);
    // add additional expectations for the passed in props
  });

  it('calls the onClick prop when the button is clicked', () => {
    const data: ButtonType = {
      id: 'my-button',
      type: 'submit',
      text: 'Click me',
      className: 'custom-class',
      onClick: jest.fn()
    };
    const { getByText } = render(<Button {...data} />);
    const button = getByText('Click me');
  
    fireEvent.click(button);
    expect(data.onClick).toHaveBeenCalled();
  });
});