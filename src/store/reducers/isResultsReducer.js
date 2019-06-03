const isResultsReducer = (state = false, action) => {
  switch(action.type) {
    case 'IS_RESULTS':
      return action.isResults;
    default:
      return state;
  }
}

export default isResultsReducer;