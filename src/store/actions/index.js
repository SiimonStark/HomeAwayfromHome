// ** Status
export const isLoading = (bool) => ({
  type: "IS_LOADING",
  bool
});

export const isError = (message) => ({
  type: "IS_ERROR",
  message
});

export const isResults = (isResults) => ({
  type: "IS_RESULTS",
  isResults
});

// ** Fetch
export const fetchRecent = (recentJobs) => ({
  type: "FETCH_RECENT_JOBS",
  recentJobs
});

// ** Tracker
export const counterAppl = (num) => ({
  type: "COUNTER_APPL",
  num
});

export const counterInter = (num) => ({
  type: "COUNTER_INTER",
  num
});

// ** Search
export const extendFilter = (bool) => ({
  type: "EXTEND_FILTER",
  bool
});

export const searchInput = (input) => ({
  type: "UPDATE_KEYWORD",
  input
});

// ** Favorites
export const addFavorite = (id) => ({
  type: "ADD_FAVORITE",
  id
});

export const removeFavorite = (id) => ({
  type: "REMOVE_FAVORITE",
  id
});