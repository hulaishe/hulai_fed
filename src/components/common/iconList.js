import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './iconList.less'

export default class IconList extends Component {

  handler = () => {
    // dosth
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmout() { }

  componentWillReceiveProps() { }

  render() {
    return (
        <View className={Boolean(this.props.iconList && this.props.iconList.length > 3) ? 'iconlist_wrap' : 'iconlist_wrap wrap-less'}>
        {this.props.title && <View className='wrap_title'>{this.props.title}</View>}
        {
          this.props.iconList && this.props.iconList.map((item,i) => {
            return <View className='icon_unit' key={i} data-path={item.path} onClick={this.handlerRouter}>
              <Image
                className='icon'
                src={item.iconPath}
                mode='widthFix'/>
              {item.title && <View className='title'>{item.title}</View>}
              {item.subtitle && <View className='subtitle'>{item.subtitle}</View>}
            </View>
          })
        }
      </View>
    )
  }
  handlerRouter (e) {
    Taro.navigateTo({
      url: `${e.currentTarget.dataset.path}`
    })
  }
}