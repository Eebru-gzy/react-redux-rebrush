import { ADD_TODOS, REMOVE_TODOS } from "./actionCreators";

const initialState = {
	todo: [],
	id: 0,
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODOS:
			var newState = { ...state };
			newState.id++;
			return {
				...newState,
				todo: [...newState.todo, { task: action.task, id: newState.id }],
			};
		case REMOVE_TODOS:
			let todo = state.todo.filter((item) => item.id !== action.id);
			return { ...state, todo };
		default:
			return state;
	}
}
