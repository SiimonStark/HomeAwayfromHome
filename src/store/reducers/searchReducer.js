export const searchReducer =  (state= {isSearch: false, 
  filters: {
    keyword:'', date:'', location:'', category:''
  }}, actions) => {
    switch(actions.type) {
      case 'EXTEND_FILTER':
        state.isSearch = actions.bool;
        return state
      default:
        return state;
    }
}