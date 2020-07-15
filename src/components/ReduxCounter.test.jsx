import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import {
  decrementCountAction,
  incrementCountAction,
} from '../actions';
import ConnectedComponent, { ReduxCounter } from './ReduxCounter';

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
        <ConnectedComponent />
      </Provider>,
    );

    wrapper.find('button').at(0).simulate('click');

    expect(store.dispatch).toHaveBeenCalledWith(decrementCountAction());
  });

  it('should dispatch increment count', () => {
    jest.resetAllMocks();

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedComponent />
      </Provider>,
    );

    wrapper.find('button').at(1).simulate('click');

    expect(store.dispatch).toHaveBeenCalledWith(incrementCountAction());
  });

  it('should show count from state', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedComponent />
      </Provider>,
    );

    expect(wrapper.find('span').text()).toEqual('777');
  });
});

describe('ReduxCounter simple testing', () => {
  it('should decrement count', () => {
    const mockDecrementCount = jest.fn();
    const wrapper = shallow(<ReduxCounter decrementCount={mockDecrementCount} />);

    expect(mockDecrementCount).toHaveBeenCalledTimes(0);
    wrapper.find('button').at(0).simulate('click');
    expect(mockDecrementCount).toHaveBeenCalledTimes(1);
  });

  it('should increment count', () => {
    const mockIncrementCount = jest.fn();
    const wrapper = shallow(<ReduxCounter incrementCount={mockIncrementCount} />);

    expect(mockIncrementCount).toHaveBeenCalledTimes(0);
    wrapper.find('button').at(1).simulate('click');
    expect(mockIncrementCount).toHaveBeenCalledTimes(1);
  });

  it('should show count from props', () => {
    const wrapper = shallow(<ReduxCounter count={777} />);

    expect(wrapper.find('span').text()).toEqual('777');
  });
});
