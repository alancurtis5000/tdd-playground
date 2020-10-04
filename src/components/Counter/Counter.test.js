import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import configureStore from '../../redux/configureStore';
import isEmpty from 'lodash/isEmpty';

import Counter from './Counter';
import { increment } from '../../redux/counter/actions';

describe('ACounter', () => {
  afterEach(cleanup);

  const createMockStore = configureMockStore([thunk]);

  function renderWithRedux(component, { initialState } = {}) {
    let store = configureStore();
    if (!isEmpty(initialState)) {
      store = createMockStore(initialState);
    }
    return { ...render(<Provider store={store}>{component}</Provider>) };
  }

  test('placeholder test', () => {
    expect(true).toEqual(true);
  });

  it('can increment', () => {
    expect(true).toEqual(false);
  });

  it('can decrement', () => {
    expect(true).toEqual(false);
  });

  it('can reset to 0', () => {
    expect(true).toEqual(false);
  });

  // test('should run increment action on customState', () => {
  //   expect(true).toEqual(false);
  // });

  // it('renders with redux', () => {
  //   expect(true).toEqual(false);
  // });

  // it('renders with renderWithRedux redux', () => {
  //   expect(true).toEqual(false);
  // });

  // it('renders example not using custom render', () => {
  //   expect(true).toEqual(false);
  // });

  // it('can have custom inital state', () => {
  //   expect(true).toEqual(false);
  // });
});
