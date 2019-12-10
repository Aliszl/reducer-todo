import React, { useReducer } from "react";
import {
  reducer,
  initialState,
  INPUT_CHANGE,
  SUBMIT_TODO,
  TOGGLE_TODO,
  REMOVE_TODO
} from "../reducers/reducer";

const TodoForm = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onValueChange = e => {
    const { item, value } = e.target;
    dispatch({
      type: INPUT_CHANGE,
      payload: { item, value }
    });
  };
  const onFormSubmit = event => {
    event.preventDefault();
    dispatch({ type: SUBMIT_TODO });
  };
  //   , payload: { item, completed, id }
  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Add todo"
            value={state.item}
            onChange={onValueChange}
          />
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
