import React from 'react';
import {Favorites} from './index';
import {shallow} from 'enzyme';

describe('Favorites Container', () => {
  describe('Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Favorites />)
    })
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })
})