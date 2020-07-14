import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import {
  decrementCountAction,
  incrementCountAction,
} from '../actions';
import ReduxCounter from './ReduxCounter';

const store = {
  dispatch: jest.fn(),
  getState: () => ({
    counter: {
      count: 777,
    },
  }),
  subscribe: () => {},
};

describe('ReduxCounter overkill testing', () => {
  it('should dispatch decrement count', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>,
    );
    const buttons = wrapper.find('button');

    buttons.at(0).simulate('click');

    expect(store.dispatch).toHaveBeenCalledWith(decrementCountAction());
  });

  it('should dispatch increment count', () => {
    jest.resetAllMocks();

    const wrapper = mount(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>,
    );
    const buttons = wrapper.find('button');

    buttons.at(1).simulate('click');

    expect(store.dispatch).toHaveBeenCalledWith(incrementCountAction());
  });

  it('should show count from state', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>,
    );

    expect(wrapper.find('span').text()).toEqual('777');
  });
});
