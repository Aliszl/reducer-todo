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
    const { name, value } = e.target;
    dispatch({
      type: INPUT_CHANGE,
      payload: { name, value }
    });
  };
  const onFormSubmit = event => {
    event.preventDefault();
    dispatch({ type: SUBMIT_TODO });
  };
  //   , payload: { item:, completed:false, id: }
  console.log(state);

  return (
    <div>
      <div>
        <form onSubmit={onFormSubmit}>
          <input
            name="item"
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
