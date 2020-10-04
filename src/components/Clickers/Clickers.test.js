import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import Clickers from './Clickers';

describe('Clickers', () => {
  afterEach(cleanup);

  it('displays count', () => {
    const { getByTestId } = render(<Clickers />);
    expect(getByTestId('count')).toHaveTextContent('0');
  });

  it('increments count by 1', () => {
    const { getByTestId, getByText } = render(<Clickers />);
    fireEvent.click(getByText('+'));
    expect(getByTestId('count')).toHaveTextContent('1');
  });

  it('decrements count by 1 delayed', async () => {
    const { getByTestId, getByText } = render(<Clickers />);
    fireEvent.click(getByText('-'));
    const countSpan = await waitForElement(() => getByText('-1'));
    expect(countSpan).toHaveTextContent('-1');
  });
});
