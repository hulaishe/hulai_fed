import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import { fetchPost } from '../../utils/fetch'
// import Tab from '../../components/common/tab'
import './index.less'
@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
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
      wx.setStorageSync('_marketing_nick', nickName)
      wx.setStorageSync('_marketing_icon', avatarUrl)
      wx.showLoading('正在登录中...')
      Taro.login().then((res) => {
        return fetchPost('/api/v1/oauth/welogin', { code: res.code, encryptedData: e.detail.encryptedData, iv: e.detail.iv })
      }).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
