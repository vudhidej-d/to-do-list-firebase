import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Input, Col, Row } from 'antd'
import Task from './Task'
import { addTaskAction } from '../store/tasks/actions'

class ToDoList extends Component {
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
    const { addTaskAction } = this.props
    if (!value) return
    const task = {
      id: Number.parseInt(Math.random() * 10000, 10).toString(),
      task: value
    }
    addTaskAction(value)
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
    console.log(this.props)
    const { value } = this.state
    const { tasks } = this.props
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

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  addTaskAction: (task) => dispatch(addTaskAction(task)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
