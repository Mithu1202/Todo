import React, { useState } from 'react' 
import TodoChild from './TodoChild' 
import './todo.css'


const TodoParent = () => {
  const [todos, setTodos] = useState([]) 
  const [newTodo, setNewTodo] = useState('') 

  const addTodo = (e) => {
    e.preventDefault() 
    if (newTodo.trim() === '') return  
    setTodos([...todos, newTodo]) 
    setNewTodo('') 
  } 

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)) 
  } 

  const editTodo = (index, updatedText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? updatedText : todo
    ) 
    setTodos(updatedTodos) 
  } 

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"/>
        <button type="submit">Add Todo</button>
      </form>

      {todos.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <TodoChild
                key={index}
                text={todo}
                onDelete={() => deleteTodo(index)}
                onEdit={(updatedText) => editTodo(index, updatedText)}/>
            ))}
          </tbody>
        </table>) : (<p>No todos available.</p>)}
    </div>
  ) 
} 

export default TodoParent 
