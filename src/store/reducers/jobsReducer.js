const jobsReducer = (state= {recent: {}, fave: []}, actions) => {
  switch(actions.type) {
    case 'FETCH_RECENT_JOBS':
      state.recent = actions.recentJobs;
      console.log('in R', state)
      return state;
    case 'TOGGLE_FAVE':
      let newState = state.fave.map(job => {
        if (job.id === actions.id) {
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