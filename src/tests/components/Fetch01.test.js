import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axiosMock from 'axios';
import Fetch from '../../components/Fetch';

describe('Fetch', () => {
  afterEach(cleanup);

  it('fetches and displays data', async () => {
    expect(true).toEqual(false);
  });

  it('shows loading while fetching data', async () => {
    expect(true).toEqual(false);
  });

  it('shows no data found on empty respose', async () => {
    expect(true).toEqual(false);
  });

  it('shows error if gets 500', async () => {
    expect(true).toEqual(false);
  });
});
