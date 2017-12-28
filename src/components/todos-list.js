import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import TodoslistHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
import _ from 'lodash';

class TodosList extends Component {
    renderItems(){
        const tasks = this.props.todos;
        const props = _.omit(this.props, 'todos');
        return tasks.map((todo, index) => 
            <TodosListItem key={index}{...todo} {...props}/>);
    }
  render() {
    return (
        <table>
            <TodoslistHeader />
            <tbody>
                {this.renderItems()}
            </tbody>
        </table>
    );
  }
}

export default TodosList;
