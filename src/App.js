import React, { Component } from 'react';
import { Input, Col, Row } from 'antd'
import Task from './Task'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      tasks: []
    }
  }

  handleInput = (e) => {
    const value = e.target.value
    this.setState({ value })
  }

  addTask = () => {
    const { value, tasks } = this.state
    if (!value) return
    const task = {
      id: Number.parseInt(Math.random() * 10000, 10).toString(),
      task: value
    }
    this.setState({
      value: '',
      tasks: tasks.concat(task)
    })
  }

  render() {
    const { value, tasks } = this.state

    return (
      <Row style={{ padding: '20px' }} >
        <Col span={24} style={{ paddingBottom: '20px' }}>
          <Input
            placeholder="..."
            onPressEnter={this.addTask}
            onChange={this.handleInput}
            value={value}
          />
        </Col>
        {tasks.map(({ id, task }) => (
          <Task
            id={id}
            task={task}
          />
        ))}
      </Row>
    );
  }
}

export default App;
