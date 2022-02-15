import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Todo from './todo'


const TodoListStyled = styled.div`
  min-height: 300px;
  margin: 20px 0;
`


export default function TodoList() {
  const todo = useSelector(state => state.todo)
  const filterTodo = useSelector(state => state.filter);
  const filteredTodo = todo.filter(element => {
    return element.title.toLowerCase().includes(filterTodo.byText.toLowerCase()) 
    && (filterTodo.byStatus.toLowerCase() === `${element.isCompleted ? "completed" : "todo"}` || filterTodo.byStatus.toLowerCase() === "all" || filterTodo.byStatus.toLowerCase() === "") 
    && (filterTodo.byPriority.some(item => element.priority.toLowerCase().includes(item.toLowerCase())) || filterTodo.byPriority.length === 0)
    && element
  })
  const RenderTodo = filteredTodo.map(element => {
    return (
      <Todo key={element.id} todo={element} />
    )
  })
  return (
    <TodoListStyled>
      {RenderTodo}
    </TodoListStyled>
  )
}
