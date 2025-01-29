import React from "react";

export default function TodoItem({ todo, handleChangeProps, deleteTodoProps, handleDrag, listId }) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through"
  };

  const { completed, id, title, description } = todo;

  return (
    <li data-testid="todo-item" className="todo-item" draggable={true} onDragStart={handleDrag} id={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button onClick={() => deleteTodoProps(id, listId)}>Delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
      <textarea defaultValue={description} />
    </li>
  );
}
