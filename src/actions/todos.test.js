import {
  GET_TODOS_REQUEST,
  GET_TODOS_OK,
  GET_TODOS_ERROR,
} from '../constants/actions';
import {
  getTodosRequestAction,
  getTodosOkAction,
  getTodosErrorAction,
} from '.';

describe('todos actions', () => {
  it('should getTodosRequestAction', () => {
    const action = getTodosRequestAction();

    expect(action.type).toEqual(GET_TODOS_REQUEST);
  });

  it('should getTodosOkAction', () => {
    const action = getTodosOkAction('lol');

    expect(action.type).toEqual(GET_TODOS_OK);
    expect(action.payload).toEqual('lol');
  });

  it('should getTodosErrorAction', () => {
    const action = getTodosErrorAction('lol');

    expect(action.type).toEqual(GET_TODOS_ERROR);
    expect(action.error).toEqual('lol');
  });
});
