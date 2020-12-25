import Todo from './Todo'
import { data } from '../data'
import { useState } from 'react'
import Header from './layout/Header'
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from 'uuid'

function Todos() {
  const [todos, setTodos] = useState(data)
  const delTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    }
    let newTodos = todos.concat(newTodo)
    setTodos(newTodos)
  }
  return (
    <>
      <div className='container'>
        <Header />
        <AddTodo addTodo={addTodo} />
        {todos.map((todo) => {
          return <Todo key={todo.id} {...todo} delTodo={delTodo} />
        })}
      </div>
    </>
  )
}

export default Todos
