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

  describe('actions for fetching recentJobs', () => {
    it('should have a type of IS_LOADING', () => {
      const bool = false;
      const expectedAction = {
        type: "IS_LOADING",
        bool
      }
      const result = actions.isLoading(bool);
      expect(result).toEqual(expectedAction);
      // Edge-testing
      const result2 = actions.isLoading(true);
      expect(result2).not.toEqual(expectedAction);
    })
    it('should have a type of IS_ERROR', () => {
      const message = 'ERRor MeSSage';
      const expectedAction = {
        type: "IS_ERROR",
        message
      }
      const result = actions.isError(message);
      expect(result).toEqual(expectedAction);
    })
    it('should have a type of FETCH_RECENT_JOBS', () => {
      const recentJobs = {listing: {name: 'job'}};
      const expectedAction = {
        type: "FETCH_RECENT_JOBS",
        recentJobs
      }
      const result = actions.fetchRecent(recentJobs);
      expect(result).toEqual(expectedAction);
    })
  })
  describe('Search Component Actions', () => {
    it('should have a type of EXTEND_FILTER', () => {
      const bool = true;
      const expectedAction = {
        type: "EXTEND_FILTER",
        bool
      }
      const result = actions.extendFilter(bool);
      expect(result).toEqual(expectedAction);
    })
    it('should have a type of UPDATE_KEYWORD', () => {
      const input = {keyword: '', date: '24hrs'};
      const expectedAction = {
        type: "UPDATE_KEYWORD",
        input
      }
      const result = actions.searchInput(input);
      expect(result).toEqual(expectedAction);
    })
  })
  describe('Jobs...!!Not finished with favorites', () => {
    it('should have a type of TOGGLE_FAVORITE', () => {
      const id = 7;
      const expectedAction = {
        type: "TOGGLE_FAVORITE",
        id
      }
      const result = actions.toggleFavorite(id);
      expect(result).toEqual(expectedAction);
    })
  })
})