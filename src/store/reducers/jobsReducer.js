const jobsReducer = (state= {}, actions) => {
  switch(actions.type) {
    case 'FETCH_RECENT_JOBS':
      return actions.recentJobs;
    default:
      return state;
  }
}

export default jobsReducer;