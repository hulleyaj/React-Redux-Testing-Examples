import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import ConnectedComponent, { ReduxTodos } from './ReduxTodos';

describe('ReduxTodos', () => {
  it('should render', () => {
    const wrapper = shallow(<ReduxTodos />);

    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.find('h2').text()).toEqual('Redux Todos');
    expect(wrapper.find('button').text()).toEqual('Get Todos');
    expect(wrapper.find('span').exists()).toEqual(false);
  });

  it('should getTodos on button click', () => {
    const mockGetTodos = jest.fn();
    const wrapper = shallow(<ReduxTodos getTodos={mockGetTodos} />);

    expect(mockGetTodos).toHaveBeenCalledTimes(0);
    wrapper.find('button').simulate('click');
    expect(mockGetTodos).toHaveBeenCalledTimes(1);
  });

  it('should render loading span', () => {
    const wrapper = shallow(<ReduxTodos loading />);
    const span = wrapper.find('span');

    expect(span.length).toEqual(1);
    expect(span.text()).toEqual('...Loading');
  });

  it('should render error span', () => {
    const wrapper = shallow(<ReduxTodos error="S.O.S." />);
    const span = wrapper.find('span');

    expect(span.length).toEqual(1);
    expect(span.text()).toEqual('S.O.S.');
  });

  it('should render Todos', () => {
    const todos = [
      { title: 'first' },
      { title: 'second' },
    ];
    const wrapper = mount(<ReduxTodos todos={todos} />);
    const todoSpans = wrapper.find('span');

    expect(todoSpans.length).toEqual(2);
    expect(todoSpans.at(0).text()).toEqual('first');
    expect(todoSpans.at(1).text()).toEqual('second');
  });

  it('should mapStateToProps', () => {
    const store = {
      dispatch: jest.fn(),
      getState: () => ({
        todos: {
          loading: 'loadingLOL',
          todos: ['todosLOL'],
          error: 'errorLOL',
        },
      }),
      subscribe: () => {},
    };
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedComponent />
      </Provider>,
    );
    const dumbComponent = wrapper.find(ReduxTodos);

    expect(dumbComponent.prop('loading')).toEqual('loadingLOL');
    expect(dumbComponent.prop('todos')).toEqual(['todosLOL']);
    expect(dumbComponent.prop('error')).toEqual('errorLOL');
  });
});
