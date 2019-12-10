import React, { useReducer } from "react";
import { reducer } from "../reducers/reducer";

const TodoForm = props => {
  return (
    <div>
      <div>
        <form>
          <input type="text" placeholder="Add todo" value={props.todoValue} />
          <button type="submit">Submit Todo</button>
        </form>
      </div>
      <button>Clear completed</button>
    </div>
  );
};
export default TodoForm;

// onSubmit={event => this.props.handleSubmit(event)}
// onChange={event => this.props.handleChange(event)}
