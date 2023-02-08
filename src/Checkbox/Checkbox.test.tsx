import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
  it('should render the component with options and onChange', () => {
    const onChange = jest.fn();
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const { container } = render(<Checkbox options={options} onChange={onChange} />);

    expect(container.querySelectorAll('input[type="checkbox"]').length).toBe(3);
  });

  it('should call onChange with selected options', () => {
    const onChange = jest.fn();
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const { container } = render(<Checkbox options={options} onChange={onChange} />);

    const option1 = container.querySelectorAll('input[type="checkbox"]')[0];
    fireEvent.click(option1);
    expect(onChange).toHaveBeenCalledWith(['Option 1']);

    const option2 = container.querySelectorAll('input[type="checkbox"]')[1];
    fireEvent.click(option2);
    expect(onChange).toHaveBeenCalledWith(['Option 1', 'Option 2']);
  });
});