const jobsReducer = (state= {recent: [], fave: []}, action) => {
  switch(action.type) {
    case 'FETCH_RECENT_JOBS':
      let newState = state.recent = action.recentJobs;
      return newState;
    case 'TOGGLE_FAVE':
      let newState = state.fave.map(job => {
        if (job.id === action.id) {
          job.fave = !job.fave;
        }
        return job;
      });
      return newState;
    default:
      return state;
  }
}

export default jobsReducer;