import ActionType from "./actionType"

const todo = [{
  id: 0,
  title: "Learn React",
  isCompleted: false,
  priority: "high"
}, {
  id: 1,
  title: "Push up",
  isCompleted: false,
  priority: "medium"
}]

const filter = {
  byText: "",
  byStatus: "",
  byPriority: []
}


export const todoReducer = (state = todo, action) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [{
        id: state.length,
        ...action.payload,
        isCompleted: false
      }, ...state]
    case ActionType.SWITCH_TODO_STATUS:
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    default:
      return state
  }
}

export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case ActionType.FILTER_BY_TEXT:
      return ({
        ...state,
        byText: action.payload
      })
    case ActionType.FILTER_BY_STATUS:
      return ({
        ...state,
        byStatus: action.payload
      })
    case ActionType.FILTER_BY_PRIORITY:
      return ({
        ...state,
        byPriority: action.payload
      })
    default:
      return state
  }
}