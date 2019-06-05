import React from 'react';
import {Jobboard} from './index';
import {shallow} from 'enzyme';
// import {connect} from 'react-redux';

describe('Jobboard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Jobboard />);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})