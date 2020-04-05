import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
  getStyle() {
    return this.props.todo.completed ? "todo-item-checked" : "todo-item-unchecked"
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {}
          {title}
          <button
            className="cross-button"
            onClick={this.props.removeItem.bind(this, id)}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
};


export default Todoitem;
