import { combineReducers } from 'redux'
import getUserInfo from './user-reducer'


/**
 * 合并多个reducers
 */
export default combineReducers({
  getUserInfo
});