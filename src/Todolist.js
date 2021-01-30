import React, { Component } from "react";
import { connect } from "react-redux";
import {  Route } from 'react-router-dom';
import AddNewTodo from "./addNewTodo";
import { addTodos, removeTodos } from "./Redux/actionCreators";
import Todo from "./Todo";

class Todolist extends Component {
	constructor(prop) {
		super(prop);
		this.handleAdd = this.handleAdd.bind(this);
		
	}
	handleAdd (val) {
		this.props.ad(val);
  }
	handleRemove(id) {
		this.props.rm(id);
	}

	render() {
		const todo = this.props.todo.map((item, index) => (
			<Todo
				removeTodo={this.handleRemove.bind(this, item.id)}
				task={item.task}
				key={index}
			/>
      
		));
		return (
			<div>
        <Route path="/todos/new" component={prop=> <AddNewTodo {...prop} handleAdd={this.handleAdd} />} />
				<Route exact path="/todos" component={()=> <div><ul>{todo}</ul></div>}/>
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		todo: reduxState.todo,
	};
}

export default connect(mapStateToProps, { ad: addTodos, rm: removeTodos })(
	Todolist
);
