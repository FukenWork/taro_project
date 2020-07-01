
import * as Type from '../actions/action-types'

let initialState = {}

export default function getUserInfo(state = initialState, action = {}) {
  switch (action.type) {
    case Type.SAVE_USER_INFO:
      return initialState = action.data
    default:
      return state;
  }
}