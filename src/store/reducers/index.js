import {combineReducers} from 'redux';
import isLoadingReducer from './isLoadingReducer';
import isResultsReducer from './isResultsReducer';
import isErrorReducer from './isErrorReducer';
import jobsReducer from './jobsReducer';
import {searchReducer} from './searchReducer';
import counterApplReducer from './counterApplReducer';
import counterInterReducer from './counterInterReducer';

export const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  isResults: isResultsReducer,
  isError: isErrorReducer,
  jobs: jobsReducer,
  search: searchReducer,
  counterAppl: counterApplReducer,
  counterInter: counterInterReducer
})