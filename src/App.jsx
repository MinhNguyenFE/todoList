import "antd/dist/antd.css";
import FilterContainer from "./components/filter/filterContainer";
import { Container } from "./components/styled/container.styled";
import InputAddTodo from "./components/todoList/inputAddTodo";
import TodoList from "./components/todoList/todoList";

function App() {

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