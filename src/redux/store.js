import {
  combineReducers,
  createStore
} from "redux"
import {
  filterReducer,
  todoReducer
} from "./reducer"

import {
  composeWithDevTools
} from "@redux-devtools/extension"

const Reducers = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});


const store = createStore(Reducers, ((!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? composeWithDevTools() : null))

export default store


// const store = createStore(Reducers, composeWithDevTools())