import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import configStore from './store'
import Index from './pages/index'
import './app.less'

const store = configStore() 

class App extends Component {
  config = {
    pages: [
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

  componentDidMount () {}

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
