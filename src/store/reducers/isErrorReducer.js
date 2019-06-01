const isErrorReducer = (state= false, action) => {
  switch(action.type) {
    case 'IS_ERROR':
      return action.isError;
    default:
      return state;
  }
}

export default isErrorReducer;