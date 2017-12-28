import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import '../styles/App.css';
import TodosList from '../components/todos-list';
import CreateTodo from './create-todo';
import _ from 'lodash';

const todos = [
    {
        task: 'Finish this tutorial',
        isCompleted: false,
    },
    {
        task: 'Eat dinner',
        isCompleted: true,
    }
];
class App extends Component {

    constructor(props){
        super()
        this.state = {
            todos
        }
    }
    render() {
        return (
            <div className="App">
                <h1>React Todo App</h1>
                <CreateTodo createTask={this.createTask.bind(this)} />
                <TodosList 
                    todos={this.state.todos}                
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }
    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false,
        });
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
}

export default App;