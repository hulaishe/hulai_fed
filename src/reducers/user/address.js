// src/reducers/userAddress.js
import actionType from '../../constants/user/address'

export default function userAddress(state = {}, action) {
  switch (action.type) {
    case actionType.USER_INFO_POI_SAVE:
      return {
        ...state,
        userPoi: action.params
      }
    default:
      return state
  }
}