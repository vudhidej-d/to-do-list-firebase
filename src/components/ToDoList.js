import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Input, Col, Row } from 'antd'
import Task from './Task'
import { addTaskAction, removeTaskAction, moveUpAction, moveDownAction } from '../store/tasks/action'

class ToDoList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  handleInput = (e) => {
    const value = e.target.value
    this.setState({ value })
  }

  addTask = () => {
    const { value } = this.state
    const { addTask: addTaskAction } = this.props
    if (!value) return
    addTaskAction(value)
    this.setState({
      value: '',
    })
  }

  render() {
    const { value } = this.state
    const { tasks, removeTask, upTask, downTask } = this.props
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
            key={id}
            id={id}
            task={task}
            actions={{
              remove: removeTask(id),
              up: upTask(id),
              down: downTask(id),
            }}
            upDisabled={index === 0}
            downDisabled={index === tasks.length - 1}
          />
        ))}
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTaskAction(task)),
  removeTask: (id) => () =>dispatch(removeTaskAction(id)),
  upTask: (id) => () => dispatch(moveUpAction(id)),
  downTask: (id) => () => dispatch(moveDownAction(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
