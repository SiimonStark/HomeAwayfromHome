import jobsReducer from '../jobsReducer';
import * as actions from '../../actions/';

describe('jobsReducer', () => {
  it('should return initial state', () => {
    const expected = {};
    const result = jobsReducer(undefined, {});
    expect(result).toEqual(expected);
  })
  it('should return state w/ recent jobs when case is FETCH_RECENT_JOBS', () => {
    let mockRecentJob = {
      listings: [
      {name: 'job'}, {name: 'other'}
    ]}
    const expected = {listings: mockRecentJob.listings};
    const result = jobsReducer(undefined, 
      actions.fetchRecent(mockRecentJob));
    expect(result).toEqual(expected)
  })
})