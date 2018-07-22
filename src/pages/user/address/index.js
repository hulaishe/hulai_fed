import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { fetchGet } from '../../../utils/fetch'
import { userInfoSaveAddress } from '../../../actions/user/address'
// import Tab from '../../components/common/tab'
import './index.less'

//static of image
import noAddress from '../../../resource/noAddress.png'
@connect(({ userAddress }) => ({
  userAddress
}), (dispatch) => ({
  userInfoSaveAddress(res) {
    dispatch(userInfoSaveAddress(res))
  }
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

  componentDidMount() {
    fetchGet('/api/v1/user2addr/gets').then(res => {
      this.props.userInfoSaveAddress(res)
    }).catch(error => {
      console.log(error)
      Taro.showToast({
        title: `${error.msg}`,
        icon: 'none',
        duration: 2000
      })
    })
  }

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
              <Button onClick={this.handleAddAddress} className='address_btn'>新增地址</Button>
          </View>
        }
      </View>
    )
  }
  handleAddAddress () {
    Taro.navigateTo({
      url: '/pages/user/address/add'
    })
  }
}

