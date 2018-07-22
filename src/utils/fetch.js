import Taro from '@tarojs/taro'
import CONSTANTS from '../constants'
import utils from '../utils'

const configUrl = (api, params) => {
  // if (api === '') {
  //   let timestamp = +new Date()
  //   let token = Taro.getStorageSync('esid') || ''
  //   api += `?sign=${utils.sign(token, Object.assign({}, params, { t: timestamp }))}&t=${timestamp}`
  // } else {
  // }
  api += `?t=${+new Date()}`
  return api + `&appType=${CONSTANTS.APP_TYPE}`
}

const success = (res, resolve, reject) => {
  if (res && parseInt(res.statusCode) >= 400) {
    return reject({ code: parseInt(res.statusCode), msg: res.statusCode + '访问失败' })
  }

  if (res.data && res.data.code === CONSTANTS.API_CODE_NEED_LOGIN) {
    Taro.hideLoading()
    return Taro.reLaunch({
      url: '/pages/login/index'
    })
  }

  if (res.data && !res.data.success) {
    let error = { code: res.data.code, msg: res.data.msg || res.data.message }
    reject(error)
  } else {
    let data = utils.removeStaticSourceHTTPSchema(res.data.data)
    resolve(data)
  }
}

const fail = (error, reject) => {
  if (error && (error.msg || error.errMsg || error.message)) {
    error = { code: error.code || -1, msg: error.msg || error.errMsg || error.message }
  } else {
    error = { code: error.code || -1, msg: JSON.stringify(error) }
  }
  reject(error)
}

export const fetchGet = (url, params = {}) => {
  let token = Taro.getStorageSync('sid') || ''
  return new Promise((resolve, reject) => {
    Taro.request({
      url: (CONSTANTS.DEBUG ? CONSTANTS.DEV_DOMAIN : CONSTANTS.DOMAIN) + configUrl(url, params),
      method: 'GET',
      data: params,
      header: {
        'content-type': 'application/json',
        'X-HULAI-Token': token,
        'X-HULAI-Type': 'WECHATSP'
      }
    }).then((res) => {
      success(res, resolve, reject)
    }).catch(error => {
      fail(error, reject)
    })
  })
}

export const fetchPost = (url, params = {}) => {
  let token = Taro.getStorageSync('sid') || ''
  return new Promise((resolve, reject) => {
    Taro.request({
    url: (CONSTANTS.DEBUG ? CONSTANTS.DEV_DOMAIN : CONSTANTS.DOMAIN) + configUrl(url, params),
    method: 'POST',
    data: JSON.stringify(params),
    header: {
      'content-type': 'application/json',
      'X-HULAI-Token': token,
      'X-HULAI-Type': 'WECHATSP'
    }
    }).then((res) => {
      success(res, resolve, reject)
    }).catch(error => {
      fail(error, reject)
    })
  })
}

export const fetchUpload = (params = {}) => {
  let token = Taro.getStorageSync('sid') || ''
  return new Promise((resolve, reject) => {
    Taro.uploadFile({
      url: (CONSTANTS.DEBUG ? CONSTANTS.DEV_DOMAIN : CONSTANTS.DOMAIN) + 'image/upload',
      filePath: params.file,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data',
        'X-HULAI-Token': token,
        'X-HULAI-Type': 'WECHATSP'
      },
      success: (res) => {
        if (parseInt(res.statusCode) === 200 && res.data) {
          res.data = JSON.parse(res.data)
        }
        success(res, resolve, reject)
      },
      fail: (error) => {
        fail(error, reject)
      }
    })
  })
}