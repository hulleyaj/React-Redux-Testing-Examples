import axios from 'axios';
import { take } from 'lodash';
import {
  getTodosRequestAction,
  getTodosOkAction,
  getTodosErrorAction,
} from '../actions';

const getTodosThunk = () => (dispatch) => {
  dispatch(getTodosRequestAction());

  return axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(({ data }) => dispatch(getTodosOkAction(take(data, 20))))
    .catch(({ message }) => dispatch(getTodosErrorAction(message)));
};

export default getTodosThunk;
