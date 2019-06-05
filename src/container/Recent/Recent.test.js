import Recent, { mapStateToProps } from '.';
import { connect } from 'react-redux';

describe('Recent', () => {
  describe('Recent component', () => {
    
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