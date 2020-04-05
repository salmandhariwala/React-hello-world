import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.title);

    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <form className="custom-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          className="custom-form-input"
          placeholder="Add todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />

        <input
          type="submit"
          value="submit"
          className="btn custom-form-btn"
        />
      </form>
    );
  }
}

export default AddTodo;
