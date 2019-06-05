import favoritesReducer from '../favoritesReducer';
import * as actions from '../../actions/';

describe('favoritesReducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = favoritesReducer(undefined, []);
    expect(result).toEqual(expected);
  });
  it('should add favorite to state', () => {
    let mockId = 7;
    let expected = [mockId];
    const result = favoritesReducer(undefined, actions.addFavorite(mockId));
    expect(result).toEqual(expected);
    expected = [mockId, 3];
    expect(result).not.toEqual(expected);
  });
  it('should remove favorite from state', () => {
    let mockId = 7;
    const expected = [3];
    const result = favoritesReducer([3,7], actions.removeFavorite(mockId));
    expect(result).toEqual(expected);
  });
})