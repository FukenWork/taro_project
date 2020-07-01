import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

export default class Center extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }
  render() {
    return (
      <View>
        个人中心
      </View>
    );
  }
}
