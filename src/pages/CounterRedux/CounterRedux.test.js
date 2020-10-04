import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import CounterRedux from './CounterRedux';

describe('CounterRedux', () => {
  afterEach(cleanup);

  test('placeholder test', () => {
    expect(true).toEqual(true);
  });

  it('should render page', () => {
    const { getByText } = render(<CounterRedux />);
    const pageTitle = getByText(/CounterRedux/i);
    expect(pageTitle).toBeInTheDocument();
  });
});
