import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtButton, AtIcon } from 'taro-ui'
import Banner from '../../components/banner/banner'
import { HandleSaveUserInfo } from '../../actions/user-action'
import { connect } from '@tarojs/redux'

class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props) {
    super(props)
    this.state = {
      username: 'xiaoming',
      age: 12
    }
  }
  handleOpen = () => {
    // 存储
    this.props.HandleSaveUserInfo({ id: 123456, usename: 'xiaozhang', age: '123' })
    // 获取
    console.log(this.props.getUserInfo)
  }
  handleClose = (e) => {
    console.log(e)
  }
  render() {
    return (
      <View className='index'>
        <AtButton type='primary' onClick={this.handleOpen}>按钮文案</AtButton>
        <Text>{this.state.username}</Text>
        <AtIcon value='bell' size='30' color='#f00'></AtIcon>
        <Banner age={this.state.age} close={this.handleClose} />
      </View>
    )
  }
}

const mapToStateProps = (state) => ({
  getUserInfo: state.getUserInfo
});
const mapToDispatchProps = {
  HandleSaveUserInfo
}

export default connect(mapToStateProps, mapToDispatchProps)(Index)
