import React from '../../../node_modules/react';
import ReactDOM from '../../../node_modules/react-dom';
import { App, mapDispatchToProps } from './index';
import {shallow} from 'enzyme';
import recentThunk from '../../middleware/recentThunk';

describe('App Container', () => {
  describe('App', () => {
    let wrapper;
    let mockThunk;
    beforeEach(() => {
      mockThunk = jest.fn()
      wrapper = shallow(<App recentThunk={mockThunk} />)
    })
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
      // Write these tests on your own
      // You already know how!
  })
  describe('mapDispatchToProps', () => {
    // ?? Not sure how to Test Thunks in mDTP
    it.skip('calls dispatch with thunk', () => {
      let url = 'www.mock.com';
      // Setup
      const mockDispatch = jest.fn()
      const actionToDispatch = recentThunk(url)
  
      // Execution
      const mappedProps = mapDispatchToProps(mockDispatch)
  
      // Expectaion
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})