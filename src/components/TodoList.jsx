import React from "react";
import Footer from "./Footer";

const TodoList = ({ todoList, setTodoList }) => {

  //Delete function
  const handleDelete = (list) => {
    setTodoList(todoList.filter((item) => item !== list));
  };

  //Mark as done function 
  const handleClick = (clickedName) => {
    setTodoList(todoList.map((todo) =>todo.name === clickedName ? { ...todo, done: !todo.done } : todo));
  };

  //Count completed task
  const totalTodos = todoList.length;
  const completedTodos = todoList.filter((todo) => todo.done).length;

  //Sorted todo lists
  const sortedTodos = todoList.slice().sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <>
      {sortedTodos.map((list, index) => (
        <div key={index} className="todo-list">
          <div className={list.done ? "done" : ""} onClick={() => handleClick(list.name)}>
            {list.name}
          </div>
          <button onClick={() => handleDelete(list)}>x</button>
        </div>
      ))}

      <Footer totalTodos={totalTodos} completedTodos={completedTodos} />
    </>
  );
};

export default TodoList;
