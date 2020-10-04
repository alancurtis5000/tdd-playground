import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

describe('CounterRedux', () => {
  afterEach(cleanup);

  test('placeholder test', () => {
    expect(true).toEqual(true);
  });
  it('should render page', () => {
    // const { getByTestId } = render(
    //     <ACounter />
    // );
    // expect(getByTestId('count')).toHaveTextContent('3');
    expect(true).toEqual(false);
  });
});
