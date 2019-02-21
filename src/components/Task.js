import React from 'react'
import { Col, Card, Button } from 'antd'

const Task = (props) => {
  const {
    id,
    task,
    actions: {
      remove,
      up,
      down,
    },
    upDisabled,
    downDisabled,
  } = props
  return (
    <Col span={24} style={{ background: '#ECECEC', padding: '0px 40px' }}>
      <Card key={id}>
        {task}
        <Button.Group style={{ float: 'right' }}>
          <Button
            icon="up"
            onClick={up}
            disabled={upDisabled}
          />
          <Button
            icon="down"
            onClick={down}
            disabled={downDisabled}
          />
          <Button icon="delete" type="danger" onClick={remove} />
        </Button.Group>
      </Card>
    </Col>
  )
}

Task.defaultProps = {
  id: '',
  task: 'Task',
  actions: {
    remove: () => {},
    up: () => {},
    down: () => {},
  },
  upDisabled: false,
  downDisabled: false,
}

export default Task
