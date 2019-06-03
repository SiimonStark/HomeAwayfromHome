const counterApplReducer = (state= 0, action) => {
  switch(action.type) {
    case 'COUNTER_APPL':
      return action.num;
    default:
      return state;
  }
}

export default counterApplReducer;