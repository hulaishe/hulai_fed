import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { userInfoSave } from '../../actions/user'
import { fetchPost, fetchGet } from '../../utils/fetch'
// import Tab from '../../components/common/tab'
import './index.less'
@connect(({ user }) => ({
  user
}), (dispatch) => ({
  userInfoSave(res) {
    dispatch(userInfoSave(res))
  }
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '登陆'
  }

  componentWillMount () { }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View class='wxapp-auth'>
        <image src='http://oy0oxkhrp.bkt.clouddn.com/avatar.jpeg' mode='aspectFill' />
        <View class='auth-error'>Hi~请登录</View>
        <View class='auth-content'>登录后胡来将为您更好的服务</View>
        <Button class='auth-button' open-type='getUserInfo' onGetUserInfo={this.getUserInfo} >微信用户快速登录</Button>
      </View>
    )
  }
  getUserInfo (e) {
    if (/getUserInfo:ok/.test(e.detail.errMsg)) {
      const { nickName, avatarUrl } = e.detail.userInfo
      Taro.setStorageSync('_marketing_nick', nickName)
      Taro.setStorageSync('_marketing_icon', avatarUrl)
      Taro.showLoading({
        title: '正在登录中...'
      })
      let sskCache = Taro.getStorageSync('ssk')
      let _this = this
      wx.checkSession({
        success: function () {
          //session_key 未过期，并且在本生命周期一直有效
          let params = {
            ssk: sskCache,
            encryptedData: e.detail.encryptedData,
            iv: e.detail.iv,
            sign: e.detail.signature,
            rawData: e.detail.rawData
          }
          fetchPost('/api/v1/oauth/welogin', params).then(res => {
            debugger
            let sid = res.sid
            Taro.setStorageSync('sid', sid)
            _this.props.userInfoSave(res)
            Taro.reLaunch({
              url: '/pages/user/index'
            })
          }).catch(error => {
            // console.log(error)
            Taro.showToast({
              title: `${error.msg}`,
              icon: 'none',
              duration: 2000
            })
          })
        },
        fail: function () {
          // session_key 已经失效，需要重新执行登录流程
          Taro.login().then((res) => {
            let code = res.code
            return fetchGet('/api/v1/oauth/sessionkey', { code })
          }).then(res => {
            let ssk = res.sessionKey
            Taro.setStorageSync('ssk', ssk)
            let params = {
              ssk,
              encryptedData: e.detail.encryptedData,
              iv: e.detail.iv,
              sign: e.detail.signature,
              rawData: e.detail.rawData
            }
            return fetchPost('/api/v1/oauth/welogin', params)
          }).then(res => {
            let sid = res.sid
            Taro.setStorageSync('sid', sid)
            _this.props.userInfoSave(res)
            Taro.reLaunch({
              url: '/pages/user/index'
            })
          }).catch(error => {
            // console.log(error)
            Taro.showToast({
              title: `${error.msg}`,
              icon: 'none',
              duration: 2000
            })
          })
        }
      })
    }
  }
}
