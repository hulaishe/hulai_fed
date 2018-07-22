// src/actions/user/address.js
import actionType from '../../constants/user/address'

export const userInfoSaveAddress = (params) => {
  return {
    type: actionType.USER_INFO_ADDRESS_SAVE,
    params
  }
}

export const userInfoSavePoi = (params) => {
  return {
    type: actionType.USER_INFO_POI_SAVE,
    params
  }
}
