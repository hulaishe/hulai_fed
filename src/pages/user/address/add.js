import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Input, Form } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './add.less'
import utils from '../../../utils'
import { userInfoSavePoi } from '../../../actions/user/address'
//static of image

@connect(state => {
  return {
    userAddress: state.userAddress
  }
}, (dispatch) => ({
  userInfoSavePoi(res) {
    dispatch(userInfoSavePoi(res))
  }
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
    console.log(this.state)
    return (
      <View className='index_wrap'>
        <Form onSubmit={this.formSubmit}>
          <View className='info_block'>
            <View className='modal'>
              <Text className='key'>联系人</Text>
              <Input autoFocus name='name' className='value' placeholder='姓名' />
            </View>
            {/*
            <radio-group name="radio-group">
              <label><radio value="radio1" color='#7EB8E0'/>radio1</label>
              <label><radio value="radio2" />radio2</label>
            </radio-group>
            */}
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
              <Input type="number" maxlength="11" onBlur={this.onCheckPhoneNumber} className='value' placeholder='手机号码' name='phone' />
            </View>
            <View className='modal'>
              <Text className='key'>地址</Text>
              <Input className='value' onClick={this.onChooseApi} placeholder={this.state.userPoiName || '选择送货地址'} />
            </View>
            <View className='modal'>
              <Text className='key'>门牌号</Text>
              <Input className='value' placeholder='例: 5号楼205室' name='address'/>
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
          <Button formType='submit' className='address_btn'>新增地址</Button>
        </Form>
      </View>
    )
  }
  onChooseApi () {
    Taro.chooseLocation().then(res => {
      this.setState({
        userPoiName: res.name
      })
      this.props.userInfoSavePoi(res)
    }).catch(error => {
      Taro.showToast({
        title: error.msg,
        icon: 'none'
      })
    })
  }
  onCheckPhoneNumber (e) {
    // console.log(e.detail && e.detail.value)
    let phone = e.detail && e.detail.value
    if (!utils.isPhoneNumber(phone) && phone) {
      return Taro.showToast({
        title: '手机号有误',
        icon: 'none'
      })
    }
  }
  formSubmit (e) {
    // console.log(e)
    // Taro.navigateTo({
    //   url: '/pages/restaurant/index'
    // })
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

