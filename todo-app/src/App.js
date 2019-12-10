import React from "react";

import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      To Do List
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;

//Props from todoform and todolist
{
  /* // key={this.props.id}
      // todoValue={this.state.todoValue}
      // handleChange={this.handleChange}
      // handleSubmit={this.handleSubmit} */
}

{
  // /* <TodoList
  //   key={this.props.id}
  //  todoList={this.state.todoList}
  //   markComplete={this.markComplete}
  //   delTodo={this.delTodo}
  //  /> */
}
