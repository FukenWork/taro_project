import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class Category extends Component {
  config = {
    navigationBarTitleText: '分类',
  }
  constructor(props) {
    super(props)
    this.state = {
      username: 'xiaoming'
    }
  }
  render() {
    return (
      <View>{this.state.username}</View>
    )
  }
}