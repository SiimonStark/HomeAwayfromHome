import {isLoading, isError, fetchRecent} from '../store/actions';

export const recentThunk = (URL) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(URL)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(fetchRecent(data.listings))
      dispatch(isLoading(false))
    } catch (error) {
      dispatch(isError(error.message))
    }
  }
}