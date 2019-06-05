import App, { mapStateToProps, mapDispatchToProps } from '.';
import { connect } from 'react-redux';

describe('AddTodoFormContainer', () => {
  describe('AddTodoForm component', () => {
    // Write these tests on your own
    // You already know how!
  })

  describe('mapStateToProps', () => {
    it('should return an object with the todos array', () => {
      // Setup
      const mockState = {
        todos: [{ text: 'Learn Redux!', id: 0 }],
        filter: 'SHOW_ALL'
      }
      const expected = {
        todos: [{ text: 'Learn Redux!', id: 0 }]
      }

      // Execution
      const mappedProps = mapStateToProps(mockState)

      // Expectation
      expect(mappedProps).toEqual(expected)
    })
  })
})