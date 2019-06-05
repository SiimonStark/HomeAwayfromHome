import isErrorReducer from '../isErrorReducer';
import * as actions from '../../actions/';

describe('isErrorReducer', () => {
  it('should return default state', () => {
    const expected = '';
    const result = isErrorReducer(undefined, {});
    expect(result).toEqual(expected);
  });
  it('should return message to state', () => {
    const expected = 'Error Message';
    const result = isErrorReducer(undefined, actions.isError('Error Message'));
    expect(result).toEqual(expected);
  });
})