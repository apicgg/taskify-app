import React from 'react'
import './styles.css'
import { Todo } from '../model'
import Card from './Card'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        // <li>{todo.todo}</li>
        <Card todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  )
}

export default TodoList
