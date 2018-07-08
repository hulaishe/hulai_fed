import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './add.less'

//static of image

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))
export default class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  config = {
    navigationBarTitleText: '新增收获地址'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index_wrap'>
        <View className='info_block'>
          <View className='modal'>
              <Text className='key'>联系人</Text>
              <Input className='value' placeholder='姓名' />
          </View>
          <View className='radio male_bottom'>
            <View className='radio_wrap'>
              <View
                onClick={this.handleChooseMale}
                className={this.state.male ? 'radio_normal radio_select' : 'radio_normal'}>
                先生
              </View>
              <View
                onClick={this.handleChooseFemale}
                className={this.state.female ? 'radio_normal radio_select' : 'radio_normal'}>
              女士
              </View>
            </View>
          </View>
          <View className='modal'>
            <Text className='key'>电话</Text>
            <Input className='value' placeholder='手机号码' type='Number' />
          </View>
          <View className='modal'>
            <Text className='key'>地址</Text>
            <Input className='value' placeholder='选择送货地址' />
          </View>
          <View className='modal'>
            <Text className='key'>门牌号</Text>
            <Input className='value' placeholder='例: 5号楼205室' />
          </View>
          <View className='radio'>
            <Text className='key'>标签</Text>
            <View className='radio_wrap'>
              <View
                data-place='company'
                onClick={this.handleChoosePlace}
                className={this.state.company ? 'radio_normal radio_select' : 'radio_normal'}>
                公司
              </View>
              <View
                data-place='home'
                onClick={this.handleChoosePlace}
                className={this.state.home ? 'radio_normal radio_select' : 'radio_normal'}>
                家
              </View>
              <View
                data-place='school'
                onClick={this.handleChoosePlace}
                className={this.state.school ? 'radio_normal radio_select' : 'radio_normal'}>
                学校
              </View>
            </View>
          </View>
        </View>
        <Button onClick={this.finishAddAddress} className='address_btn'>新增地址</Button>
      </View>
    )
  }
  finishAddAddress () {
    Taro.navigateTo({
      url: '/pages/restaurant/index'
    })
  }
  handleChoosePlace (e) {
    let place = e.currentTarget.dataset.place
    this.setState({
      company: place === 'company' ? true : false,
      home: place === 'home' ? true : false,
      school: place === 'school' ? true : false,
    })
  }
  handleChooseMale () {
    this.setState({
      male: true,
      female: false
    })
  }
  handleChooseFemale () {
    this.setState({
      male: false,
      female: true
    })
  }
}

