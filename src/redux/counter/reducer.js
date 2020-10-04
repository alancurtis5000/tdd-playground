import cloneDeep from 'lodash/cloneDeep';
import { types } from './actions';

export const initalState = {
  count: 0,
};

const counterReducer = (state = cloneDeep(initalState), action) => {
  const stateClone = cloneDeep(state);
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...stateClone,
        ...action.payload,
      };
    case types.DECREMENT:
      return {
        ...stateClone,
        ...action.payload,
      };
    case types.RESET:
      return {
        ...stateClone,
        ...action.payload,
      };
    default:
      return stateClone;
  }
};

export default counterReducer;
