// src/reducers/index.js
import { combineReducers } from '_redux@4.0.0@redux'
import counter from './counter'
import user from './user'
import userAddress from './user/address'

export default combineReducers({
  counter,
  user,
  userAddress
})