import {
  GET_TODOS_REQUEST,
  GET_TODOS_OK,
  GET_TODOS_ERROR,
} from '../constants/actions';

export const todosSelector = (state) => state.todos;

const initialState = {
  loading: false,
  loaded: false,
  todos: [],
  error: null,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return { ...initialState, loading: true };
    case GET_TODOS_OK:
      return { ...initialState, loaded: true, todos: action.payload };
    case GET_TODOS_ERROR:
      return { ...initialState, error: action.error };
    default:
      return state;
  }
};

export default todos;
