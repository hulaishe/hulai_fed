import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import IconList from '../../components/common/iconlist'
import './index.less'
// static of img
import avatar_default from '../../resource/avatar_default.png'
import address from '../../resource/address.png'
import order from '../../resource/order.png'
import commit from '../../resource/commit.png'
import analyze from '../../resource/analyze.png'
import chat from '../../resource/chat.png'
import redenvelope from '../../resource/redenvelope.png'
import coupon from '../../resource/coupon.png'
import integral from '../../resource/integral.png'
import help from '../../resource/help.png'
import coustome from '../../resource/coustome.png'


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
    navigationBarTitleText: '用户中心',
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let userIcon = [
      {
        iconPath: address,
        title: '我的地址',
        path: '/pages/user/address/index'
      },
      {
        iconPath: order,
        title: '我的订单'
      },
      {
        iconPath: commit,
        title: '我的评价'
      },
      {
        iconPath: analyze,
        title: '我的报表'
      },
      {
        iconPath: chat,
        title: '产品交流'
      }
    ]
    let marktingIcon = [
      {
        iconPath: redenvelope,
        title: '红包',
        subtitle:'2个未使用'
      },
      {
        iconPath: coupon,
        title: '代金券',
        subtitle: '23个未使用'
      },
      {
        iconPath: integral,
        title: '积分',
        subtitle: '剩余1000积分'
      }
    ]
    let coustomeIcon = [
      {
        iconPath: help,
        title: '帮助与反馈'
      },
      {
        iconPath: coustome,
        title: '客服中心'
      }
    ]
    return (
      <View className='index_wrap'>
        <View className='user_header'>
          <Image
            className='user_avatar'
            src={avatar_default} />
          <View className='user_info'>
            <Text className='user_name'>{'西爽'}</Text>
            <Text className='user_phone'>{'188888888888'}</Text>
          </View>
        </View>
        <IconList
          iconList={userIcon}/>
        {/* <View className='activity_wrap'/> */}
        <View className='grey_wrap' />
        <IconList
          title='我的资产'
          iconList={marktingIcon} />
        <View className='grey_wrap' />
        <IconList
          title='我的服务'
          iconList={coustomeIcon} />
      </View>
    )
  }
}

