import { combineReducers } from 'redux';
import { reducer as translateReducer } from './translate';

// Combine all reducers.

const rootReducer = combineReducers({
  translate: translateReducer,
});

export default rootReducer;
