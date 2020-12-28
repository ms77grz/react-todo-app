import React from 'react'
import { useState } from 'react'

function AddTodo({ addTodo }) {
  const state = {
    title: '',
  }

  // Add a new to do via title
  const [todo, setTodo] = useState(state.title)
  const changeTodo = (e) => {
    setTodo(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    if (todo !== '') {
      addTodo(todo)
    }
  }

  return (
    <form onSubmit={submit} className='form'>
      <input
        type='text'
        name='title'
        style={{ flex: '10', padding: '5px' }}
        placeholder='Add to do...'
        onChange={changeTodo}
      />
      <input
        type='submit'
        value='Submit'
        className='btn'
        style={{ flex: '1' }}
      />
    </form>
  )
}

export default AddTodo
