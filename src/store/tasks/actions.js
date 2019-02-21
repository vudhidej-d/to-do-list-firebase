import { ADD_TASK, DEL_TASK, UP_TASK, DOWN_TASK } from './actionTypes'

export const addTaskAction = (task) => ({
  type: ADD_TASK,
  payload: task,
})

export const delTaskAction = (id) => ({
  type: DEL_TASK,
  payload: id,
})

export const upTaskAction = (id) => ({
  type: UP_TASK,
  payload: id,
})

export const downTaskAction = (id) => ({
  type: DOWN_TASK,
  payload: id,
})
