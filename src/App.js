import React from "react";
import "./App.css";
import Todos from "./components/todo/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/todo/AddTodo";
import uuid from "react-uuid";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/pages/About";
import axios from "axios";

class App extends React.Component {
  // state of the project
  state = {
    todos: [],
  };

  // after initial load
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

  // remove the item
  removeItem = (id) => {
    console.log("remove item :", id);
    this.setState({
      todos: this.state.todos.filter((todo) => {
        if (todo.id === id) {
          return false;
        }
        return true;
      }),
    });
  };

  // add item
  addItem = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  // toggle state of the todo
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // render the component
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/">
              <AddTodo addItem={this.addItem} />
              <Todos
                todos={this.state.todos}
                markComplete={this.toggleComplete}
                removeItem={this.removeItem}
              />
            </Route>

            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
