const favoritesReducer = (state= [], actions) => {
  switch(actions.type) {
    case 'ADD_FAVORITE':
      let addState = [...state, actions.id];
      return addState;
    case 'REMOVE_FAVORITE':
      let newState = state.filter(fav => {
        return  fav !== actions.id;
      });
      return newState;
    default:
      return state;
  }
}

export default favoritesReducer;