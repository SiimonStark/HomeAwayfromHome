import {combineReducers} from 'redux';
import isLoadingReducer from './isLoadingReducer';
import isResultsReducer from './isResultsReducer';
import isErrorReducer from './isErrorReducer';
import jobsReducer from './jobsReducer';

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  isResults: isResultsReducer,
  isError: isErrorReducer,
  jobs: jobsReducer,
})

export default rootReducer;