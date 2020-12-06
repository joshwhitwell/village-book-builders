// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

import { combineReducers } from 'redux';
import * as headmasterReducer from './headmasterReducer';

export default combineReducers({
  headmasterReducer,
});
