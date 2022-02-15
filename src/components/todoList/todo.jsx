import React from 'react'
import styled, {css} from "styled-components"
import { Checkbox, Tag } from 'antd';
import { useDispatch } from 'react-redux';
import { SwitchTodoStatus } from '../../redux/action';

const TodoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  ${
    (props) => props.isCompleted && css`
    & > * {
      text-decoration: line-through;
      opacity: 0.5;
    }
      `
  }
`

export default function Todo({todo}) {
  const dispatch = useDispatch()
  
  const onChange = () => {
    dispatch(SwitchTodoStatus(todo.id))
  }
  return (
    <TodoStyled isCompleted={todo.isCompleted}>
      <Checkbox checked={todo.isCompleted} onChange={() => {onChange()}} >{todo.title}</Checkbox>
      <Tag color={todo.priority==="high"?"magenta":todo.priority==="medium"?"yellow":"gray"}>{todo.priority}</Tag>
    </TodoStyled>
  )
}
