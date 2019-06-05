import {searchReducer} from '../searchReducer';
import * as actions from '../../actions/';

describe('searchReducer', () => {
  let mockState;
  beforeEach(() => {
    mockState = {
      isSearch: false, filters: {
        keyword: '', date: '', location: '', category: ''
      }
    }
  });
  it('should return default state', () => {
    const expected = mockState
    const result = searchReducer(mockState, 0);
    expect(result).toEqual(expected);
  });
  it('should toggle isSearch', () => {
    let expected = mockState;
    expected.isSearch = true;
    const result = searchReducer(mockState, actions.extendFilter(true));
    expect(result).toEqual(expected)
  })
  it('should return new input to state', () => {
    let expected = mockState;
    expected.filters.keyword = 'React';
    const result = searchReducer(mockState, actions.extendFilter({keyword: 'React'}));
    expect(result).toEqual(expected)
  });
  it('should remove new input to state', () => {
    let expected = mockState;
    expected.filters.keyword = 'Redux';
    let result = searchReducer(mockState, actions.extendFilter({keyword: 'Redux'}));
    expect(result).toEqual(expected)
    expected.filters.keyword = '';
    result = searchReducer(mockState, actions.extendFilter(''));
    expect(result).toEqual(expected)
  });
})