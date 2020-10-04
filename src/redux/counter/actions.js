export const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

export const increment = () => (dispatch, getState) => {
  const currentCount = getState('counter').counter.count;
  const payload = { count: currentCount + 1 };
  dispatch({
    type: types.INCREMENT,
    payload,
  });
};

export const decrement = () => (dispatch, getState) => {
  const currentCount = getState('counter').counter.count;
  const payload = { count: currentCount - 1 };
  dispatch({
    type: types.DECREMENT,
    payload,
  });
};

export const reset = () => (dispatch) => {
  const payload = { count: 0 };
  dispatch({
    type: types.RESET,
    payload,
  });
};
