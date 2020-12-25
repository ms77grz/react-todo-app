import { useState } from 'react'

function Todo({ id, title, completed, delTodo }) {
  const getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: mark ? 'line-through' : 'none',
    }
  }

  const [mark, setMark] = useState(completed)
  const changeState = () => {
    mark ? setMark(false) : setMark(true)
  }

  return (
    <div style={getStyle()}>
      <p>
        <input type='checkbox' onChange={changeState} /> {title}
        <button onClick={() => delTodo(id)} className='del'>
          x
        </button>
      </p>
    </div>
  )
}

export default Todo
