import React from "react";
import "./DragDropZone.css"
import TodoItem from "../TodoItem";
import InputTodos from "../InputTodo";

export default function DragDropZone({ handleDrop, allowDrop, lists, handleChangeProps, deleteTodoProps, handleDrag, addTodoProps }) {
    return (
        <div id="drag-drop-zone">
            {lists.map((list) => (
                <ul key={list.id} className="list-drag-drop-zone" onDrop={handleDrop} onDragOver={allowDrop}>
                    <h1 className="drag-drop-list-title">{list.listTitle}</h1>
                    {list.items.map((todo) => (
                        <TodoItem
                            listId={list.id}
                            key={todo.id}
                            todo={todo}
                            handleChangeProps={handleChangeProps}
                            deleteTodoProps={deleteTodoProps}
                            handleDrag={handleDrag}
                        />
                    ))}
                    <InputTodos listId={list.id} addTodoProps={addTodoProps} />
                </ul>
            ))}
        </div>
    )
}