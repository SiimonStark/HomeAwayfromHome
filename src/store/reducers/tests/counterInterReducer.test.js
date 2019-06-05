import counterInterReducer from '../counterInterReducer';
import * as actions from '../../actions/';

describe('counterInterReducer', () => {
  it('should return inital state', () => {
    const expected = 0;
    const result = counterInterReducer(undefined, '');
    expect(result).toEqual(expected);
  })
  it('should return new state', () => {
    const expected = 1;
    const result = counterInterReducer(undefined, actions.counterInter(1));
    expect(result).toEqual(expected);
  })
  it('should increment state between each dispatch', () => {
    let expected = 2;
    let result = counterInterReducer(undefined, actions.counterInter(1));
    expect(result).not.toEqual(expected);
    result = counterInterReducer(undefined, actions.counterInter(2));
    expect(result).toEqual(expected);
  })
})