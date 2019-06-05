import React from 'react';
import { Recent, mapStateToProps } from './index';
import {shallow} from 'enzyme';

describe('Recent', () => {
  describe('Recent component', () => {
    let wrapper;
    let mockRecent;
    beforeEach(() => {
      mockRecent = { listing: [{ id: 0, title: 'job', post_date: "never", company: { name: 'Place', tagline: 'Work here' } }, { id: 1, title: 'JOB', post_date: "Now", company: { name: 'Other', tagline: 'Dont Work here' } }]}
      wrapper = shallow(<Recent loading={false} recent={mockRecent}/>)
    })
    it('should match snapshot if loading is finished', () => {
      expect(wrapper).toMatchSnapshot()
    })
    it('should match snapshot if loading is NOT finished', () => {
      wrapper = shallow(<Recent loading={true} recent={{}} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should test state to props', () => {
      // Setup
      const mockState = {
        jobs: {listing: [{ name: 'Company', id: 0 }]},
        loading: false
      }
      const expected = {
        recent: { listing: [{ name: 'Company', id: 0 }] }
      }
      // Execution
      const mappedProps = mapStateToProps(mockState)
      // Expectation
      expect(mappedProps).toEqual(expected)
    })
  })
})
