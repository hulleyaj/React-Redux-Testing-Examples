import {
  getTodosRequestAction,
  getTodosOkAction,
  getTodosErrorAction,
} from '../actions';
import reducer, { todosSelector } from './todos';

describe('todos reducer', () => {
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
    const result = reducer(initialState, getTodosOkAction(['lol', 'lul']));

    expect(result).toEqual({
      loading: false,
      loaded: true,
      todos: ['lol', 'lul'],
      error: null,
    });
  });

  it('should GET_TODOS_ERROR', () => {
    const result = reducer(initialState, getTodosErrorAction('lol'));

    expect(result).toEqual({
      loading: false,
      loaded: false,
      todos: [],
      error: 'lol',
    });
  });

  it('should return state', () => {
    const result = reducer(initialState, { type: 'lol' });

    expect(result).toEqual(initialState);
  });

  it('should have initialState', () => {
    const result = reducer(undefined, { type: 'lol' });

    expect(result).toEqual({
      loading: false,
      loaded: false,
      todos: [],
      error: null,
    });
  });
});

describe('todosSelector', () => {
  it('should select count from state', () => {
    const state = {
      todos: 'todos here',
    };

    expect(todosSelector(state)).toEqual('todos here');
  });
});
