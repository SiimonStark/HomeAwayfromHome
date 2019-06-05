import counterApplReducer from '../counterApplReducer';
import * as actions from '../../actions/';

describe('counterApplReducer', () => {
  it('should return inital state', () => {
    const expected = 0;
    const result = counterApplReducer(undefined, '');
    expect(result).toEqual(expected);
  })
  it('should return new state', () => {
    const expected = 1;
    const result = counterApplReducer(undefined, actions.counterAppl(1));
    expect(result).toEqual(expected);
  })
  it('should increment state between each dispatch', () => {
    let expected = 2;
    let result = counterApplReducer(undefined, actions.counterAppl(1));
    expect(result).not.toEqual(expected);
    result = counterApplReducer(undefined, actions.counterAppl(2));
    expect(result).toEqual(expected);
  })
})