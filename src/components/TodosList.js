import React from "react";
import TodoItem from "./TodoItem";

export default function TodosList({ todos, handleChangeProps, deleteTodoProps, handleDrag, handleDrop, allowDrop }) {
  return (
    <div onDrop={handleDrop} onDragOver={allowDrop}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          handleDrag={handleDrag}
        />
      ))}
    </div>
  );
}
