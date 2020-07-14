import {
  DECREMENT_COUNT,
  INCREMENT_COUNT,
} from '../constants/actions';

export const countSelector = (state) => state.counter.count;

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_COUNT:
      return { count: state.count - 1 };
    case INCREMENT_COUNT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export default counter;
