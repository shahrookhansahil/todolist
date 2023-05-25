 import React, { useState } from 'react';
 import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleTodoDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <>
        {todos.map((todo, index) => (
          <h3 key={index}>
            {todo}
            <button onClick={() => handleTodoDelete(index)}>Delete</button>
          </h3>
        ))}
      </>
    </div>
  );
};
export default App;
