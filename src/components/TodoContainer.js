import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import DragDropZone from "./DragDropZone/DragDropZone";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

export default function TodoContainer() {

  const initialState = [
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Setup development environment",
      completed: true,
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false,
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Deploy to live server",
      completed: false,
    },
  ]

  const [todos, setTodos] = useState(initialState)

  const handleChange = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }),);
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ],
    );
  };

  const addTodoItem = (title) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo],
    );
  };

  // Drag & Drop functions
  const allowDrop = (e) => {
    e.preventDefault();
  }

  const handleDrag = (e) => {
    //  const draggedItem = e.dataTransfer.setData("text", e.target.id);
    e.dataTransfer.setData("text", e.target.id);
    console.log("handle Drag")
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");

    const draggedElement = document.getElementById(data)

    if (draggedElement && !e.target.contains(draggedElement)) {
      e.target.appendChild(document.getElementById(data));
    }
  }


  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
        handleDrag={handleDrag}
        handleDrop={handleDrop}
        allowDrop={allowDrop}
      />
      <DragDropZone handleDrop={handleDrop} allowDrop={allowDrop} />
    </div>
  );

}
