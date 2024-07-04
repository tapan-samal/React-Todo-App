import React, { useState } from "react";
import TodoList from "./TodoList";
import "./todo.css";

const Todo = () => {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    if (todo.name.trim() === "") {
      setError("Input field cannot be empty !");
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo({ name: "", done: false });
    setError("");
  };

  return (
    <div className="main">
      <h2>Todo List</h2>
      <form onSubmit={handleInput}>
        <input
          type="text"
          placeholder="Enter todo item..."
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />{" "}
        &nbsp;
        <button type="submit">Add</button>
      </form>
      {error && <p className="error">{error}</p>}
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default Todo;
