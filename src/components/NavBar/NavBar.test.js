import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '.';

describe('NavBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})