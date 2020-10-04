import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import configureStore from '../../redux/configureStore';
import isEmpty from 'lodash/isEmpty';

import ACounter from './ACounter';
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

  test('should run increment action on customState', () => {
    const customCounterState = { counter: { count: 3 } };
    const store = createMockStore(customCounterState);

    const payload = { count: 4 };
    store.dispatch(increment());
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'INCREMENT',
      payload,
    });
  });

  it('renders with redux', () => {
    const { getByTestId } = renderWithRedux(<ACounter />);
    expect(getByTestId('count')).toHaveTextContent('0');
  });

  it('renders with renderWithRedux redux', () => {
    const customCounterState = { counter: { count: 3 } };
    const { getByTestId } = renderWithRedux(<ACounter />, {
      initialState: customCounterState,
    });
    expect(getByTestId('count')).toHaveTextContent('3');
  });

  it('renders example not using custom render', () => {
    const customCounterState = { counter: { count: 3 } };
    const store = createMockStore(customCounterState);
    const { getByTestId } = render(
      <Provider store={store}>
        <ACounter />
      </Provider>
    );
    expect(getByTestId('count')).toHaveTextContent('3');
  });

  it('can increment', () => {
    const { getByTestId, getByText } = renderWithRedux(<ACounter />);
    fireEvent.click(getByText('+'));
    expect(getByTestId('count')).toHaveTextContent('1');
  });

  it('can decrement', () => {
    const { getByTestId, getByText } = renderWithRedux(<ACounter />);
    fireEvent.click(getByText('-'));
    expect(getByTestId('count')).toHaveTextContent('-1');
  });

  it('can have custom inital state', () => {
    const customCounterState = { counter: { count: 5 } };
    const { getByTestId } = renderWithRedux(<ACounter />, {
      initialState: customCounterState,
    });
    expect(getByTestId('count')).toHaveTextContent('5');
  });
});
