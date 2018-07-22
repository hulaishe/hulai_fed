// src/reducers/counter.js
import { USER_INFO_SAVE } from '../../constants/user'

export default function user(state = {}, action) {
  switch (action.type) {
    case USER_INFO_SAVE:
      return {
        ...state,
        userInfo: action.params
      }
    default:
      return state
  }
}