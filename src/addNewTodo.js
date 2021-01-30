import React, { Component } from "react";

export default class AddNewTodo extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
			task: "",
		};
  }
  
  handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state.task)
    e.target.reset();
    this.props.history.push('/todos')
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='task'>Task: </label>
					<input
						type='text'
						id='task'
						name='task'
						onChange={this.handleChange}
					/>
					<button>Button</button>
				</form>
			</div>
		);
	}
}
