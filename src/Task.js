import React from 'react'
import { Col, Card } from 'antd'

const Task = (props) => {
  const { id, task } = props

  return (
    <Col span={24} style={{ background: '#ECECEC', padding: '0px 40px' }}>
      <Card key={id}>
        {task}
      </Card>
    </Col>
  )
}

Task.defaultProps = {
  id: '',
  task: 'Task'
}

export default Task
