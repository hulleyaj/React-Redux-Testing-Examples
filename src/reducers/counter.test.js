import {
  decrementCountAction,
  incrementCountAction,
} from '../actions';
import reducer, { countSelector } from './counter';

describe('reducer', () => {
  const initialState = {
    count: 50,
  };

  it('should DECREMENT_COUNT', () => {
    const result = reducer(initialState, decrementCountAction());

    expect(result.count).toEqual(49);
  });

  it('should INCREMENT_COUNT', () => {
    const result = reducer(initialState, incrementCountAction());

    expect(result.count).toEqual(51);
  });

  it('should return state', () => {
    const result = reducer(initialState, { type: 'lol' });

    expect(result.count).toEqual(50);
  });

  it('should have initialState', () => {
    const result = reducer(undefined, { type: 'lol' });

    expect(result.count).toEqual(0);
  });
});

describe('countSelector', () => {
  it('should select count from state', () => {
    const state = {
      counter: {
        count: 7,
      },
    };

    expect(countSelector(state)).toEqual(7);
  });
});
