import React from 'react';
import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import Fetch01 from '../../components/Fetch01';

describe('Fetch', () => {
  afterEach(cleanup);

  it('fetches and displays data', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: 'hello there' });
    const { getByTestId, getByText } = render(<Fetch01 />);
    fireEvent.click(getByText('Get Quote'));
    const quote = await waitForElement(() => getByTestId('quote'));
    expect(quote).toHaveTextContent('hello there');
  });

  it('shows loading while fetching data', async () => {
    // axiosMock.get.mockResolvedValueOnce({ data: 'hello there' });
    // const { getByTestId, getByText } = render(<Fetch01 />);
    // fireEvent.click(getByText('Get Quote'));
    // const loadingMessage = await waitForElement(() => getByTestId('loading'));
    // expect(loadingMessage).toHaveTextContent('...loading...');
  });

  // it('shows no data found on empty respose', async () => {
  //   expect(true).toEqual(false);
  // });

  // it('shows error if gets 500', async () => {
  //   expect(true).toEqual(false);
  // });
});
