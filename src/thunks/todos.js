import axios from 'axios';
import { take } from 'lodash';
import {
  getTodosRequestAction,
  getTodosOkAction,
  getTodosErrorAction,
} from '../actions';

const getTodosThunk = () => (dispatch) => {
  dispatch(getTodosRequestAction());

  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(({ data }) => {
      dispatch(getTodosOkAction(take(data, 20)));
      debugger
    })
    .catch(({ message }) => {
      dispatch(getTodosErrorAction(message));
    });
};

export default getTodosThunk;
