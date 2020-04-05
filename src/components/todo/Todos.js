import React from "react";
import Todoitem from "./Todoitem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    return this.props.todos.map((a) => (
      <Todoitem
        key={a.id}
        todo={a}
        markComplete={this.props.markComplete}
        removeItem={this.props.removeItem}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
