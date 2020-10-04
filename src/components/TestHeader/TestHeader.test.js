import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestHeader from './TestHeader';

describe('TestHeader', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { asFragment } = render(<TestHeader text="hello" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('inserts text in h1', () => {
    const { getByTestId, getByText } = render(<TestHeader text="hello" />);
    expect(getByTestId('header-text')).toHaveTextContent('hello');
    expect(getByText('hello')).toHaveClass('specific-class');
  });
});
