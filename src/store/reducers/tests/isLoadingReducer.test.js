import isLoadingReducer from '../isLoadingReducer';
import * as actions from '../../actions/';

describe('isLoadingReducer', () => {
  it('should return inital state', () => {
    const expected = true;
    const result = isLoadingReducer(undefined, '');
    expect(result).toEqual(expected);
  })
  it('should return !state', () => {
    const expected = false;
    const result = isLoadingReducer(undefined, actions.isLoading(false));
    expect(result).toEqual(expected);
  })
  it('should have different state between each dispatch', () => {
    let expected = false;
    let result = isLoadingReducer(undefined, actions.isLoading(false));
    expect(result).toEqual(expected);
    expected = false;
    result = isLoadingReducer(undefined, actions.isLoading(true));
    expect(result).not.toEqual(expected);
  })
})