import TrackerInter, { mapStateToProps } from '.';
import { connect } from 'react-redux';

describe('Tracker-Inter', () => {
  describe('Tracker-Inter component', () => {

  })

  describe('mapStateToProps', () => {
    it('should test state to props', () => {
      // Setup
      const mockState = {
        counterInter: 0
      }
      const expected = {
        counter: 0
      }
      // Execution
      const mappedProps = mapStateToProps(mockState)
      // Expectation
      expect(mappedProps).toEqual(expected)
    })
  })
})