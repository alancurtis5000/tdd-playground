import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Counter from '../../components/Counter';

describe('Counter', () => {
  afterEach(cleanup);

  it('can render default state', () => {
    const { getByTestId } = render(<Counter />);
    const countValue = getByTestId('count').textContent;
    expect(countValue).toEqual('0');
  });

  it('can increment', () => {
    const { getByTestId, getByText } = render(<Counter />);
    fireEvent.click(getByText('+'));
    const countValue = getByTestId('count').textContent;
    expect(countValue).toEqual('1');
  });

  it('can decrement', () => {
    const { getByTestId, getByText } = render(<Counter />);
    fireEvent.click(getByText('-'));
    const countValue = getByTestId('count').textContent;
    expect(countValue).toEqual('-1');
  });

  it('can reset to 0', () => {
    const { getByTestId, getByText } = render(<Counter />);
    fireEvent.click(getByText('Reset'));
    const countValue = getByTestId('count').textContent;
    expect(countValue).toEqual('0');
  });

  it('can reset to 0 with overide state', () => {
    const { getByTestId, getByText } = render(<Counter />);
    fireEvent.click(getByText('Reset'));
    const countValue = getByTestId('count').textContent;
    expect(countValue).toEqual('9');
  });
});
