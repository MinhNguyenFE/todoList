import "antd/dist/antd.css";
import { useEffect } from "react";
import FilterContainer from "./components/filter/filterContainer";
import { Container } from "./components/styled/container.styled";
import InputAddTodo from "./components/todoList/inputAddTodo";
import TodoList from "./components/todoList/todoList";

function App() {
  useEffect(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // development build code
      console.log("running on development")
  } else {
      // production build code
      console.log("running on product")

  }
  }, [])
  return (
    <div className="App">
      <Container>
      <h1>Todo List</h1>
      <FilterContainer />
      <hr />
      <TodoList />
      <InputAddTodo />
      </Container>
    </div>
  );
}

export default App;