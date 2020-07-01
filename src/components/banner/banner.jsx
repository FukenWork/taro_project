import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtButton } from 'taro-ui'
export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }
  handleClose = ()=>{
    this.props.close({username: 'zhansan', age: '12'})
  }
  render() {
    const { age } = this.props
    return (
      <View>
        {age}
        <AtButton type='primary' onClick={this.handleClose}>点击</AtButton>
      </View>
    );
  }
}