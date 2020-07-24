import React, { Component } from "react";
import TodoContainer from "./components/TodoContainer";
import './styles/App.min.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h3>To Do List</h3>
        <TodoContainer />
      </div>
    );
  }
}

export default App;
