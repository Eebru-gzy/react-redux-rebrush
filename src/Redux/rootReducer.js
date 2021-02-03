import { ADD_TODOS, REMOVE_TODOS, GET_TODOS } from "./actionCreators";

const initialState = {
	todos: [],
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.task.todo };
		case ADD_TODOS:
			return { ...state, todos: [...state.todo, action.task] };
		case REMOVE_TODOS:
			let todo = state.todos.filter(item => item._id !== action.id);
			return { ...state, todo };
		default:
			return state;
	}
}
