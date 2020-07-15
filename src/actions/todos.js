import {
  GET_TODOS_REQUEST,
  GET_TODOS_OK,
  GET_TODOS_ERROR,
} from '../constants/actions';

export const getTodosRequestAction = () => ({
  type: GET_TODOS_REQUEST,
});

export const getTodosOkAction = (payload) => ({
  type: GET_TODOS_OK,
  payload,
});

export const getTodosErrorAction = (error) => ({
  type: GET_TODOS_ERROR,
  error,
});
