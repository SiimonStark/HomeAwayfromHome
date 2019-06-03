import {combineReducers} from 'redux';
import isLoadingReducer from './isLoadingReducer';
import isResultsReducer from './isResultsReducer';
import isErrorReducer from './isErrorReducer';
import jobsReducer from './jobsReducer';
import counterApplReducer from './counterApplReducer';
import counterInterReducer from './counterInterReducer';

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  isResults: isResultsReducer,
  isError: isErrorReducer,
  jobs: jobsReducer,
  counterAppl: counterApplReducer,
  counterInter: counterInterReducer
})

export default rootReducer;