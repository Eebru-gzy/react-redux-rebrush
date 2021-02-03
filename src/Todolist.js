import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import AddNewTodo from "./addNewTodo";
import { getTodos, addTodos } from "./Redux/actionCreators";
import Todo from "./Todo";

class Todolist extends Component {
	constructor(prop) {
		super(prop);
		this.handleAdd = this.handleAdd.bind(this);
		this.state = {
			todo: [],
		};
	}
	componentDidMount() {
		this.props.getTodos();
	}
	handleAdd(val) {
		this.props.addTodos(val);
	}
	handleRemove(id) {
		this.props.rm(id);
	}

	render() {
		const todos = this.props.todo.map((item) => (
			<Todo
				removeTodo={this.handleRemove.bind(this, item._id)}
				task={item.todo}
				key={item._id}
			/>
		));
		return (
			<div>
				<Route
					path='/todos/new'
					component={(prop) => (
						<AddNewTodo {...prop} handleAdd={this.handleAdd} />
					)}
				/>
				<Route
					exact
					path='/todos'
					component={() => (
						<div>
							<ul>{todos}</ul>
						</div>
					)}
				/>
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		todo: reduxState.todos,
	};
}

export default connect(mapStateToProps, { getTodos, addTodos })(Todolist);
