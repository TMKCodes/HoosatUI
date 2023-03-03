import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { InputBuilder } from './InputBuilder';

const testInputs = [
  {
    id: 'input-1',
    label: 'Label 1',
    type: 'text',
    placeholder: 'Placeholder 1',
    value: '',
    onChange: jest.fn(),
  },
  {
    id: 'input-2',
    label: 'Label 2',
    type: 'password',
    placeholder: 'Placeholder 2',
    value: '',
    onChange: jest.fn(),
  },
];

describe('InputList', () => {
  it('renders inputs correctly', () => {
    const { getByLabelText } = render(
      <InputBuilder inputs={testInputs} />
    );

    expect(getByLabelText('Label 1')).toBeInTheDocument();
    expect(getByLabelText('Label 2')).toBeInTheDocument();
  });

  it('calls onChange correctly', () => {
    const { getByLabelText } = render(
      <InputBuilder inputs={testInputs} />
    );

    const input1 = getByLabelText('Label 1') as HTMLInputElement;
    const input2 = getByLabelText('Label 2') as HTMLInputElement;

    fireEvent.change(input1, { target: { value: 'test input 1' } });
    fireEvent.change(input2, { target: { value: 'test input 2' } });

    expect(testInputs[0].onChange).toHaveBeenCalledTimes(1);
    expect(testInputs[1].onChange).toHaveBeenCalledTimes(1);
  });
});