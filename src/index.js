import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import ToDoList from './components/ToDoList'
import store from './store/rootReducer'
import * as serviceWorker from './serviceWorker'

const App = () => (
  <Provider store={store}>
    <ToDoList />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
