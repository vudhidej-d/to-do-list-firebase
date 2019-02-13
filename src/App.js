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

  removeTask = (id) => () => {
    const { tasks } = this.state
    const newTasks = tasks.filter((task) => task.id !== id)
    this.setState({ tasks: newTasks })
  }

  upTask = (id) => () => {
    const { tasks } = this.state
    const index = tasks.findIndex((task) => task.id === id)
    const newTasks = tasks.map((task, pos) => {
      if (pos === index - 1) return tasks[index]
      if (pos === index) return tasks[index - 1]
      return task
    })
    this.setState({ tasks: newTasks })
  }

  downTask = (id) => () => {
    const { tasks } = this.state
    const index = tasks.findIndex((task) => task.id === id)
    const newTasks = tasks.map((task, pos) => {
      if (pos === index) return tasks[index+1]
      if (pos === index+1) return tasks[index]
      return task
    })
    this.setState({ tasks: newTasks })
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
        {tasks.map(({ id, task }, index) => (
          <Task
            id={id}
            task={task}
            actions={{
              remove: this.removeTask(id),
              up: this.upTask(id),
              down: this.downTask(id),
            }}
            upDisabled={index === 0}
            downDisabled={index === tasks.length - 1}
          />
        ))}
      </Row>
    );
  }
}

export default App;
