import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'
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
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index_wrap'>
        <View className='header_block' onClick={this.hadleTestRequest}>
          <Text>Collections</Text>
          <Text>Discover our handpic</Text>
        </View>
        <View className='middle_block'>
          <View className='middle-left middle'></View>
          <View className='middle-right middle'></View>
        </View>
        <View className='footer_block'>
          <Text>Collections</Text>
          <Text>Discover our handpic</Text>
        </View>
      </View>
    )
  }
  // wx
  // hadleTestRequest () {
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   wx.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  // }
  // taro
  // hadleTestRequest() {
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   Taro.request({
  //     url: 'http://localhost:3100/user/profile',
  //     data: {
  //       foo: 'foo',
  //       bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  // }
}

