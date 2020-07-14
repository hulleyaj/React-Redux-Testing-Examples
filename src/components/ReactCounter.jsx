import React, { useReducer } from 'react';
import {
  DECREMENT_COUNT,
  INCREMENT_COUNT,
} from '../constants/actions';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case DECREMENT_COUNT:
      return { count: state.count - 1 };
    case INCREMENT_COUNT:
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
};

const ReactCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;

  return (
    <div>
      <h2>React Counter</h2>
      <button type="button" onClick={() => dispatch({ type: DECREMENT_COUNT })}>-</button>
      { count }
      <button type="button" onClick={() => dispatch({ type: INCREMENT_COUNT })}>+</button>
    </div>
  );
};

export default ReactCounter;
