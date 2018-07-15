import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

// import Tab from '../../components/common/tab'
import './index.less'
import { compose } from 'redux';

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '一键点餐'
  }
  constructor(props) {
    super(props)
    this.state = {
      welcome: true
    }
  }
  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () {
    this.welcomeTime = setTimeout(() => {
      this.setState({
        welcome: false
      })
    },2000)
  }
  componentDidHide () {
    this.setState({
      welcome: true
    })
  }

  render () {
    return (
      <View className='index_wrap'>
        {
          this.state.welcome ? <View className='welcome'>
            <View className='name'>
              胡来厨房
            </View>
            <View className='slogan'>"做最放心的私厨"</View>
          </View> : <View>
              <View className='title'>欢迎来到胡来餐厅</View>
              <View className='action'>胡来一顿</View>
              <View className='start showRouter' onClick={this.handleStart}>点餐</View>
          </View>
        }
      </View>
    )
  }
  handleStart () {
    Taro.navigateTo({
      url: '/pages/user/address/index'
    })
  }
}

