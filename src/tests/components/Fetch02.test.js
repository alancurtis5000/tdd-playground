import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import Fetch02 from '../../components/Fetch02';

describe('Fetch', () => {
  afterEach(cleanup);

  it('fetches and displays data', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: 'hello there' });
    const url = '/greeting';
    const { getByTestId } = render(<Fetch02 url={url} />);
    expect(getByTestId('loading')).toHaveTextContent('Loading data...');

    const resolvedSpan = await waitForElement(() => getByTestId('resolved'));
    expect(resolvedSpan).toHaveTextContent('hello there');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  });
});
