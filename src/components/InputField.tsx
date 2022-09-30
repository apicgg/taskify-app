import React from 'react'
import './styles.css'

interface TodoProps {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: () => void
}

const InputField = (props: TodoProps) => {
  return (
    <form className='input' onSubmit={props.handleAdd}>
      <input
        type='input'
        placeholder='Enter a task'
        value={props.todo}
        onChange={(e) => props.setTodo(e.target.value)}
        className='input__box'
      />
      <button className='input__submit' type='submit'>
        Go
      </button>
    </form>
  )
}

export default InputField
