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


const store = createStore(Reducers, composeWithDevTools())

export default store