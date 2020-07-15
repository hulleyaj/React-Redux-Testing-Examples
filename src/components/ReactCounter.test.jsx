import React from 'react';
import { shallow } from 'enzyme';
import ReactCounter, { reducer } from './ReactCounter';

describe('ReactCounter', () => {
  it('should decrement count', () => {
    const wrapper = shallow(<ReactCounter />);

    expect(wrapper.find('span').text()).toEqual('0');
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.find('span').text()).toEqual('-1');
  });

  it('should increment count', () => {
    const wrapper = shallow(<ReactCounter />);

    expect(wrapper.find('span').text()).toEqual('0');
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('span').text()).toEqual('1');
  });

  it('should throw error for bad actions', () => {
    try {
      reducer({}, { type: 'lol' });
    } catch (e) {
      expect(e.message).toEqual('Bad action');
    }

    expect.assertions(1);
  });
});
