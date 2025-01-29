import React, { useState } from "react";


export default function InputTodos({ addTodoProps, listId }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const onChangeDescription = e => {
    setDescription(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodoProps(title, description, listId);
    setTitle("")
    setDescription("")
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        data-testid="to-do-input"
        type="text"
        className="input-text"
        placeholder="Add todo title..."
        value={title}
        name="title"
        onChange={onChangeTitle}
      />
      <input
        data-testid="to-do-input-description"
        type="text"
        className="input-text"
        placeholder="Add description..."
        value={description}
        name="description"
        onChange={onChangeDescription}
      />
      <input data-testid="to-do-submit-button" type="submit" className="input-submit" value="Submit" />
    </form>
  );
}
