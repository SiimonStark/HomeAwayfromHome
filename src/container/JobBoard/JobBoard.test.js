import React from 'react';
import {shallow} from 'enzyme';
import JobBoard from '.';
import {connect} from 'react-redux';

describe('Jobboard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<JobBoard />);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})