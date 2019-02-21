import { combineReducers, createStore, applyMiddleware  } from 'redux'
import logger from 'redux-logger'
import tasks from './tasks'

const rootReducer = combineReducers({
  tasks,
})

export default createStore(rootReducer, applyMiddleware(logger))
