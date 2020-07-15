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
      .reply(200, ['lol', 'lul']);

    await getTodosThunk()(dispatch);

    expect(dispatch).toHaveBeenNthCalledWith(1, getTodosRequestAction());
    expect(dispatch).toHaveBeenNthCalledWith(2, getTodosOkAction(['lol', 'lul']));
  });

  it('should handle error calls', async () => {
    const mockAPI = new MockAdapter(axios);
    const dispatch = jest.fn();

    mockAPI.onGet('https://jsonplaceholder.typicode.com/todos')
      .reply(500);

    await getTodosThunk()(dispatch);

    expect(dispatch).toHaveBeenNthCalledWith(1, getTodosRequestAction());
    expect(dispatch).toHaveBeenNthCalledWith(2, getTodosErrorAction('Request failed with status code 500'));
  });
});
