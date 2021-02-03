export const ADD_TODOS = "ADD_TODOS";
export const GET_TODOS = "GET_TODOS";
export const UPDATE_TODOS = "UPDATE_TODOS";
export const REMOVE_TODOS = "REMOVE_TODOS";
const BASEURL = "http://localhost:7000/";

function handleGetTodo(task) {
	return {
		type: GET_TODOS,
		task,
	};
}
function addTodosAction(task) {
	return {
		type: ADD_TODOS,
		task,
	};
}

function removeTodoAction(id) {
	return {
		type: REMOVE_TODOS,
		id,
	};
}

export function getTodos() {
	return async (dispatch) => {
		try {
			const getTodo = await fetch(BASEURL);
			const res = await getTodo.json();
			return dispatch(handleGetTodo(res));
		} catch (error) {
			console.log(error);
		}
	};
}
export function addTodos(val) {
	return async (dispatch) => {
		try {
			const addTodo = await fetch(`BASEURL`, {
				method: "POST",
				Headers: new Headers({ "Content-Type": "application/json" }),
				body: JSON.stringify(val),
			});
			const res = await addTodo.json();
			return dispatch(addTodosAction(res));
		} catch (error) {
			console.log(error);
		}
	};
}

export function removeTodos() {
	return async (dispatch) => {
		const getTodo = await fetch(BASEURL);
		dispatch(getTodo);
	};
}
