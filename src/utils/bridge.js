import Taro from '@tarojs/taro'
const bridge = {}

bridge.login = () => {
  return new Promise((resolve, reject) => {
    Taro.login({
      success: (res) => {
        resolve(res)
      },
      fail: (error) => {
        error = { code: error.code || -1, msg: error.errMsg, wsp: true }
        reject(error)
      }
    })
  })
}
export default bridge