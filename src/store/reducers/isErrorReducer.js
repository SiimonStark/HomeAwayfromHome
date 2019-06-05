const isErrorReducer = (state= '', action) => {
  switch(action.type) {
    case 'IS_ERROR':
      return action.message;
    default:
      return state;
  }
}

export default isErrorReducer;