import React, { useState } from "react";
import Header from "./Header";
import DragDropZone from "./DragDropZone/DragDropZone";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

export default function TodoContainer() {

  const initialState = [
    {
      id: uuidv4(),
      listTitle: "To Do",
      items: [
        {
          id: uuidv4(),
          title: "Setup development environment",
          completed: true,
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
          id: uuidv4(),
          title: "Develop website and add content",
          completed: false,
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
      ]
    },
    {
      id: uuidv4(),
      listTitle: "In Progress",
      items: [
        {
          id: uuidv4(),
          title: "Setup development environment",
          completed: true,
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
          id: uuidv4(),
          title: "Develop website and add content",
          completed: false,
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
      ]
    },
    {
      id: uuidv4(),
      listTitle: "Done",
      items: [
        {
          id: uuidv4(),
          title: "Setup development environment",
          completed: true,
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
          id: uuidv4(),
          title: "Develop website and add content",
          completed: false,
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
      ]
    },
  ]
  const [todos, setTodos] = useState(initialState)

  const handleChange = (id) => {

    setTodos(todos.map((list) => {
      const updatedItems = list.items.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        };
        return todo
      });
      return { ...list, items: updatedItems };
    }))

  };

  const delTodo = (id, listId) => {

    setTodos(todos.map((list) => {
      if (list.id === listId) {
        return {
          ...list,
          items: list.items.filter(todo => todo.id !== id),
        }
      }
      return list
    }))
  };

  const addTodoItem = (title, description, listId) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
      description: description
    };

    setTodos(todos.map((list) => {
      if (list.id === listId) {
        return { ...list, items: [...list.items, newTodo] };
      }
      return list
    }))

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
      <DragDropZone handleDrop={handleDrop} allowDrop={allowDrop} lists={todos} handleChangeProps={handleChange} deleteTodoProps={delTodo} handleDrag={handleDrag} addTodoProps={addTodoItem} />
    </div>
  );

}
