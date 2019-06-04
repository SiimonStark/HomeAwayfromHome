import * as actions from '../actions';

describe('actions', () => {
  describe('Tracker actions', () => {
    it('should have a type of COUNTER_INTER', () => {
      // SETUP
      const num = 2
      const expectedAction = {
        type: "COUNTER_INTER",
        num
      }

      // EXECUTION
      const result = actions.counterInter(num);

      // Expectation
      expect(result).toEqual(expectedAction);
    })

    it('should have a type of COUNTER_APPL', () => {
      const num = 3;
      const expectedAction = {
        type: "COUNTER_APPL",
        num
      }

      const result = actions.counterAppl(num);

      expect(result).toEqual(expectedAction);
    })
  })
})