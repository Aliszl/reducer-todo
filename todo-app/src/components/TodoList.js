import React, { useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";
import Todo from "../components/Todo";
const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {state.todoList.map(todo => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            // markComplete={this.props.markComplete}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
