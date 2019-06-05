import TrackerAppl, { mapStateToProps } from '.';
import { connect } from 'react-redux';

describe('Tracker-Appl', () => {
  describe('Tracker-Appl component', () => {

  })

  describe('mapStateToProps', () => {
    it('should test state to props', () => {
      // Setup
      const mockState = {
        counterAppl: 0
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