import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div className={props.todo.completed ? "completed" : "notCompleted"}>
      <ul>{props.todo.item}</ul>
    </div>
  );
};

export default Todo;
