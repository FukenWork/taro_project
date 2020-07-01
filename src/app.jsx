import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

import { Provider } from '@tarojs/redux'

import configStore from './store'

const store = configStore()

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      "pages/category/category",
      "pages/center/center"
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/index/index',
        text: '首页'
      }, {
        pagePath: 'pages/category/category',
        text: '种类'
      },
      {
        pagePath: 'pages/center/center',
        text: '我的'
      }],

      'color': '#fff',
      'selectedColor': '#56abe4',
      'backgroundColor': '#f2784b',
      'borderStyle': 'white'
    },
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
