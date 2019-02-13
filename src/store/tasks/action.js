import { ADD_TASK, REMOVE_TASK, UP_TASK, DOWN_TASK } from './actionTypes'

export const addTaskAction = (task) => ({
  type: ADD_TASK,
  payload: task
})

export const removeTaskAction = (id) => ({
  type: REMOVE_TASK,
  payload: id
})

export const moveUpAction = (id) => ({
  type: UP_TASK,
  payload: id
})

export const moveDownAction = (id) => ({
  type: DOWN_TASK,
  payload: id
})
