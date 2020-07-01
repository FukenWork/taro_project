import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers/index'

const middlewares = [
  createLogger()
]

// 创建store
export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}