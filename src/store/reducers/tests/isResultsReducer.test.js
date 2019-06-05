import isResultsReducer from '../isResultsReducer';
import * as actions from '../../actions/';

describe('isResultsReducer', () => {
  it('should return inital state', () => {
    const expected = true;
    const result = isResultsReducer(undefined, '');
    expect(result).toEqual(expected);
  })
  it('should return !state', () => {
    const expected = false;
    const result = isResultsReducer(undefined, actions.isResults(false));
    expect(result).toEqual(expected);
  })
  it('should have different state between each dispatch', () => {
    let expected = false;
    let result = isResultsReducer(undefined, actions.isResults(false));
    expect(result).toEqual(expected);
    expected = false;
    result = isResultsReducer(undefined, actions.isResults(true));
    expect(result).not.toEqual(expected);
  })
})