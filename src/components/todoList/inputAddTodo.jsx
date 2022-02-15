import React, { useState } from 'react'
import { Input, Select, Tag, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { AddTodo } from '../../redux/action';
const { Option } = Select;

const InitialState = {
  title: "",
  priority: ""
}

export default function InputAddTodo() {
  const [todo, setTodo] = useState(InitialState)
  const dispatch = useDispatch()

  const valueChange = (e) => {
    setTodo({ ...todo, priority: e })
  }

  const handleChange = (e) => {
    setTodo({ ...todo, title: e.target.value })
  }

  const submit = () => {
    dispatch(AddTodo(todo))
    setTodo(InitialState)
  }

  const isTodoValid = () => {
    const condition = Object.keys(todo);
    const isValid = condition.every(element => todo[element]);
    return isValid
  }

  const suffix = (
    <Select value={todo.priority || "Select"} bordered={false} style={{width: "120px"}} onChange={valueChange}>
      <Option value="high"><Tag color="magenta">High</Tag></Option>
      <Option value="medium"><Tag color="yellow">Medium</Tag></Option>
      <Option value="low"><Tag color="gray">Low</Tag></Option>
      {/* <Option value="high">High</Option>
      <Option value="medium">Medium</Option>
      <Option value="low">Low</Option> */}
    </Select>
  )

  return (
    <React.Fragment>
      <Input.Group style={{display: "flex"}}>
        <Input placeholder="Add todo" onChange={handleChange} suffix={suffix} value={todo.title} />
        <Button type="primary" onClick={submit} disabled={!Boolean(isTodoValid())} style={{height: "50px"}} >Add</Button>
      </Input.Group>
    </React.Fragment>
  )
}
