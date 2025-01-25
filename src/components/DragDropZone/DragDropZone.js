import React from "react";
import "./DragDropZone.css"

export default function DragDropZone({ handleDrop, allowDrop }) {
    return (
        <div id="drag-drop-zone">
            <ul className="list-drag-drop-zone" onDrop={handleDrop} onDragOver={allowDrop}>
                <h1 className="drag-drop-list-title">To Do</h1>
            </ul>
            <ul className="list-drag-drop-zone" onDrop={handleDrop} onDragOver={allowDrop}>
                <h1 className="drag-drop-list-title">In Progress</h1>
            </ul>
            <ul className="list-drag-drop-zone" onDrop={handleDrop} onDragOver={allowDrop}>
                <h1 className="drag-drop-list-title">Done</h1>
            </ul>
        </div>
    )
}