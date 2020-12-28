import Todo from './Todo'
import { data } from '../data'
import { useState } from 'react'
import axios from 'axios'

import AddTodo from './AddTodo'

function Todos() {
  const [todos, setTodos] = useState(data)

  // DELETE TODO
  const delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => setTodos(todos.filter((todo) => todo.id !== id)))
  }

  // ADD TODO
  const addTodo = (title) => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
      })
      .then((res) => setTodos(todos.concat(res.data)))
  }

  return (
    <>
      <AddTodo addTodo={addTodo} />
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} delTodo={delTodo} />
      })}
    </>
  )
}

export default Todos
