import { combineReducers } from 'redux';
import { LOGOUT } from '../Containers/Auth/AuthTypes';
/**
 *  All of application reducers import goes here...
 */
import { authReducer } from "../Containers/Auth/AuthReducer";

const appReducer = combineReducers({
  auth: authReducer
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    localStorage.clear()
    state = undefined;
  }
  return appReducer(state, action);
}
export default rootReducer;