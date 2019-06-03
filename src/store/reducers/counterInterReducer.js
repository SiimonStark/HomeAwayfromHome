const counterInterReducer = (state= 0, action) => {
  switch(action.type) {
    case 'COUNTER_INTER':
      return action.num;
    default:
      return state;
  }
}

export default counterInterReducer;