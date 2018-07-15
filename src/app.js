import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import configStore from './store'
import Index from './pages/index'
import './app.less'

const store = configStore() 

class App extends Component {
  config = {
    pages: [
      'pages/login/index',
      'pages/index/index',
      'pages/order/index',
      'pages/user/index',
      'pages/restaurant/index',
      'pages/user/address/add',
      'pages/user/address/index',
    ],
    window: {
      'navigationBarTitleText': '胡来社'
    },
    tabBar: {
      backgroundColor: '#FFFFFF',
      color: '#909090',
      selectedColor: '#FF7646',
      list: [{
        pagePath: 'pages/index/index',
        iconPath: 'resource/home.png',
        selectedIconPath: 'resource/home.png',
        text: '首页'
      }, {
        pagePath: 'pages/restaurant/index',
        iconPath: 'resource/car.png',
        selectedIconPath: 'resource/car.png',
        text: '点餐'
      }, {
        pagePath: 'pages/order/index',
        iconPath: 'resource/order.png',
        selectedIconPath: 'resource/order.png',
        text: '订单'
      }, {
        pagePath: 'pages/user/index',
        iconPath: 'resource/me.png',
        selectedIconPath: 'resource/me.png',
        text: '我的'
      }]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {
    let sysInfo = wx.getSystemInfoSync()
    let version = sysInfo.SDKVersion && sysInfo.SDKVersion.split('.')
    if (version) {
      version = parseFloat(`${version[0]}.${version[1]}${version[2]}}`)
      wx.setStorageSync('SDKversion', version)
      if (version < 1.44) {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，将影响小程序的正常使用，请升级到最新微信版本后重试。'
        })
      }
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
