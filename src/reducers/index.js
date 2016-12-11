import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BargainFormReducer from './BargainFormReducer';

export default combineReducers({
  auth: AuthReducer,
  bargainForm: BargainFormReducer
});
