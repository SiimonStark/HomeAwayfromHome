export const isLoading = (isLoading) => ({
  type: "IS_LOADING",
  isLoading
});

export const isError = (isError) => ({
  type: "IS_ERROR",
  isError
});

export const isResults = (isResults) => ({
  type: "IS_RESULTS",
  isResults
});

export const fetchRecent = (recentJobs) => ({
  type: "FETCH_RECENT_JOBS",
  recentJobs
});

export const toggleFavorite = (id) => ({
  type: "TOGGLE_FAVORITE",
  id
});