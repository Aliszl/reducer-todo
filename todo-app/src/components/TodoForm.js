import React from "react";

export default class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form onSubmit={event => this.props.handleSubmit(event)}>
            <input
              type="text"
              placeholder="Add todo"
              value={this.props.todoValue}
              onChange={event => this.props.handleChange(event)}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
        <button>Clear</button>
      </div>
    );
  }
}
