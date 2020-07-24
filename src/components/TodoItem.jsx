import React from "react";
import '../styles/TodoItem.min.css'
import 'font-awesome/css/font-awesome.min.css'

const TodoItem = (props) => {
  return (
    <div className="todo-item" itemID={props.todoObject.id}>
      <span className="name" itemID={props.todoObject.id}>{props.todoObject.name}</span>
      <span className="editIcon" itemID={props.todoObject.id}><i className="fa fa-pencil"></i></span>
      <span className="deleteIcon" itemID={props.todoObject.id} onClick={props.deleteToDo}><i className="fa fa-trash"></i></span>
    </div>
  )
};

export default TodoItem;
