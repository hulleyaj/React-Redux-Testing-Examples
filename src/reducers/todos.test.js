import {
  getTodosRequestAction,
  getTodosOkAction,
  getTodosErrorAction
} from '../actions';
import reducer, { countSelector } from './counter';

describe('reducer', () => {
  const initialState = {
    loading: 'lol',
    loaded: 'lol',
    todos: 'lol',
    error: 'lol',
  };

  it('should GET_TODOS_REQUEST', () => {
    const result = reducer(initialState, getTodosRequestAction());

    expect(result).toEqual({
      loading: true,
      loaded: false,
      todos: [],
      error: null,
    });
  });

  it('should GET_TODOS_OK', () => {
    const result = reducer(initialState, getTodosOkAction());

    expect(result.count).toEqual(51);
  });

  it('should GET_TODOS_ERROR', () => {
    const result = reducer(initialState, getTodosErrorAction());

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
