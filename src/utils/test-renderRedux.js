import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import configureStore from '../redux/configureStore';
import isEmpty from 'lodash/isEmpty';

export default renderWithRedux = (component, { initialState } = {}) => {
  const createMockStore = configureMockStore([thunk]);
  let store = configureStore();
  if (!isEmpty(initialState)) {
    store = createMockStore(initialState);
  }
  return { ...render(<Provider store={store}>{component}</Provider>) };
};
