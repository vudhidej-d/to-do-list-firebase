import { ADD_TASK, REMOVE_TASK, UP_TASK, DOWN_TASK } from './actionTypes'

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK: {
      const newTask = {
        id: Number.parseInt(Math.random() * 10000, 10).toString(),
        task: action.payload
      }
      return state.concat(newTask)
    }
    case REMOVE_TASK: {
      const id = action.payload
      return state.filter((task) => task.id !== id)
    }
    case UP_TASK: {
      const id = action.payload
      const index = state.findIndex((task) => task.id === id)
      return state.map((task, pos) => {
        if (pos === index - 1) return state[index]
        if (pos === index) return state[index - 1]
        return task
      })
    }
    case DOWN_TASK: {
      const id = action.payload
      const index = state.findIndex((task) => task.id === id)
      return state.map((task, pos) => {
        if (pos === index) return state[index + 1]
        if (pos === index + 1) return state[index]
        return task
      })
    }
    default : {
      return state
    }
  }
}

export default taskReducer
