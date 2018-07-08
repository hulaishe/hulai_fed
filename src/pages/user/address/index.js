import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'


// import Tab from '../../components/common/tab'
import './index.less'

//static of image
import noAddress from '../../../resource/noAddress.png'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addressList: []
    }
  }
  config = {
    navigationBarTitleText: '我的地址'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index_wrap'>
        {
          this.state.addressList && this.state.addressList.legth > 0 ? <View>1
          </View> : <View>
              <Image
                className='noaddress'
                src={noAddress}
                mode='widthFix' />
              <View className='title'>没有收获地址</View>
              <View className='sub_title'>点击下方按钮新增</View>
              <Button className='address_btn'>新增地址</Button>
          </View>
        }
      </View>
    )
  }
}

