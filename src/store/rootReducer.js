import { combineReducers, createStore } from 'redux'
import tasks from './tasks'

const rootReducer = combineReducers({
  tasks,
})

export default createStore(rootReducer, {})
