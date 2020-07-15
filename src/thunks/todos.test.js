import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  getTodosRequestAction,
  getTodosOkAction,
  getTodosErrorAction,
} from '../actions';
import getTodosThunk from './todos';

describe('getTodosThunk', () => {
  it('should handle successful calls', async () => {
    const mockAPI = new MockAdapter(axios);
    const dispatch = jest.fn();

    mockAPI.onGet('https://jsonplaceholder.typicode.com/todos')
      .reply(200, { data: ['lol', 'lul'] });

    await getTodosThunk()(dispatch);

    debugger
    expect(dispatch).toHaveBeenCalledWith(getTodosRequestAction());
    expect(dispatch).toHaveBeenCalledWith(getTodosOkAction(['lol', 'lul']));
  });

  it('should handle error calls', () => {

  });
});
