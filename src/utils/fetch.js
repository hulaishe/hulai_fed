import Taro from '@tarojs/taro'
import CONSTANTS from '../constants'
import utils from '../utils'
const success = (res, resolve, reject) => {
  if (res && parseInt(res.statusCode) >= 400) {
    return reject({ code: parseInt(res.statusCode), msg: res.statusCode + '访问失败' })
  }

  if (res.data && res.data.code === CONSTANTS.API_CODE_NEED_LOGIN) {
    bridge.hideLoading()
    if (!wemix.$instance.$wxapp.globalData.isLogin) {
      wemix.$instance.$wxapp.globalData.isLogin = true
      return bridge.reLaunch('/pages/login')
    } else {
      return
    }
  }

  if (res.data && !res.data.success) {
    let error = { code: res.data.code, msg: res.data.msg || res.data.message }
    reject(error)
  } else {
    let data = utils.removeStaticSourceHTTPSchema(res.data.data)
    resolve(data)
  }
}

const configUrl = (api, params) => {
  // if (api === '') {
  //   let timestamp = +new Date()
  //   let token = wx.getStorageSync('esid') || ''
  //   api += `?sign=${utils.sign(token, Object.assign({}, params, { t: timestamp }))}&t=${timestamp}`
  // } else {
  // }
  api += `?t=${+new Date()}`
  return api + `&appType=${CONSTANTS.APP_TYPE}`
}

export const fetchGet = (url, params = {}) => {
  let token = wx.getStorageSync('esid') || ''
  return new Promise((resolve, reject) => {
    Taro.request({
      url: (CONSTANTS.DEBUG ? CONSTANTS.DEV_DOMAIN : CONSTANTS.DOMAIN) + configUrl(url, params),
      method: 'GET',
      data: { data: JSON.stringify(params) },
      header: {
        'content-type': 'application/json',
        'X-LHC-Token': token,
        'X-LHC-Type': 'WECHATSP'
      },
      success: (res) => {
        success(res, resolve, reject)
      },
      fail: (error) => {
        console.warn(error)
        if (error && (error.msg || error.errMsg || error.message)) {
          error = { code: error.code || -1, msg: error.msg || error.errMsg || error.message }
        } else {
          error = { code: error.code || -1, msg: JSON.stringify(error) }
        }
        reject(error)
      }
    })
  })
}

export const fetchPost = (url, params = {}) => {
  let token = wx.getStorageSync('esid') || ''
  return new Promise((resolve, reject) => {
    Taro.request({
      url: (CONSTANTS.DEBUG ? CONSTANTS.DEV_DOMAIN : CONSTANTS.DOMAIN) + configUrl(url, params),
      method: 'POST',
      data: { data: JSON.stringify(params) },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-LHC-Token': token,
        'X-LHC-Type': 'WECHATSP'
      },
      success: (res) => {
        success(res, resolve, reject)
      },
      fail: (error) => {
        if (error && (error.msg || error.errMsg || error.message)) {
          error = { code: error.code || -1, msg: error.msg || error.errMsg || error.message }
        } else {
          error = { code: error.code || -1, msg: JSON.stringify(error) }
        }
        reject(error)
      }
    })
  })
}

export const fetchUpload = (params = {}) => {
  let token = wx.getStorageSync('esid') || ''
  return new Promise((resolve, reject) => {
    Taro.uploadFile({
      url: (CONSTANTS.DEBUG ? CONSTANTS.DEV_DOMAIN : CONSTANTS.DOMAIN) + 'image/upload',
      filePath: params.file,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data',
        'X-LHC-Token': token,
        'X-LHC-Type': 'WECHATSP'
      },
      success: (res) => {
        if (parseInt(res.statusCode) === 200 && res.data) {
          res.data = JSON.parse(res.data)
        }
        success(res, resolve, reject)
      },
      fail: (error) => {
        if (error && (error.msg || error.errMsg || error.message)) {
          error = { code: error.code || -1, msg: error.msg || error.errMsg || error.message }
        } else {
          error = { code: error.code || -1, msg: JSON.stringify(error) }
        }
        reject(error)
      }
    })
  })
}