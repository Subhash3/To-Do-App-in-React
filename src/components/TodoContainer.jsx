import React, { Component } from 'react';
import TodoItem from './TodoItem'
import '../styles/TodoContainer.min.css'

class TodoContainer extends Component {
    state = {
        todoList: [
            { id: "1", name: "Go to UOH" },
            { id: "2", name: "Roam around with my friends" },
        ],
        currentItemName: "",
    }

    handleChange = (event) => {
        // Set the current item name in the state same as the form input
        this.setState({
            currentItemName: event.target.value,
        });
    };

    validateName = (name) => {
        // Make sure that the name is valid
        return !(name === "" || name === null || name === undefined)
    }

    displayTodos = () => {
        // Self explanatory
        let todoListArr = this.state.todoList
        return todoListArr.map(todoItem => {
            return (
                <TodoItem todoObject={todoItem} key={todoItem.id} deleteToDo={this.deleteToDo} />
            )
        })
    }

    deleteToDo = (event) => {
        // Get the clicked element
        let clickedElement = event.target

        // Get the element's ID
        let itemID = clickedElement.getAttribute('itemid')

        // Remove the element from state which matches this ID
        let todoListArr = this.state.todoList
        let filteredArr = todoListArr.filter(todo => {
            return todo.id !== itemID
        })

        // Set state back to the filtered arr so that it renders new items again
        this.setState({
            todoList: filteredArr
        })
    }

    addNewTodo = (event) => {
        // Prevent the form from submitting
        event.preventDefault();

        // Create a new todo item object
        let newTodoObject = {}
        newTodoObject.name = this.state.currentItemName
        newTodoObject.id = create_UUID()

        // Add this item to the list stored in state
        let todoListArr = this.state.todoList
        todoListArr.push(newTodoObject)
        this.setState({
            todoList: todoListArr
        })

        // Set the current item name in state to "" so that it clear the form input
        this.setState({
            currentItemName: ""
        })

    }

    render() {
        return (
            <div className="todo-form-and-container">
                <form onSubmit={this.addNewTodo}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.currentItemName}
                        className="new-todo-name"
                    />
                    <button>Add Todo</button>
                </form>
                <div className="todo-container">
                    {this.displayTodos()}
                </div>
            </div>
        );
    }
}

export default TodoContainer;

// Shamelessly copied from online
function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
    });
    return uuid;
}