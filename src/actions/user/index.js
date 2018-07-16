// src/actions/user.js
import {
  USER_INFO_SAVE
} from '../../constants/user'

export const userInfoSave = (params) => {
  return {
    type: USER_INFO_SAVE,
    params
  }
}