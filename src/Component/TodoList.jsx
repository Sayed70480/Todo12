import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';


function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    } else {
      const newTodos = [todo, ...todos]
      setTodos(newTodos);      
    }
  };
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
        return todo;
    });
    setTodos(updatedTodos)
  };


const removeTodo = id => {
  const removeArr = [...todos].filter(todo => todo.id !== id)
  setTodos(removeArr)
}

const updatedTodos = (todoId , newValue) =>{
  if(!newValue.text || /^\s*$/.test(newValue.text)) {
    return;
  }
  
  setTodos(prev => prev.map(item => (item.id===todoId ? newValue : item)));
}

  return (
    <div>
      <h1>What's the plan for Today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatedTodo={updatedTodos} />

    </div>
  )
}

export default TodoList