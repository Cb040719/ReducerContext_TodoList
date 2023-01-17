import { ADD_TODO, REMOVE_TODO } from "./actions";

export const initialState = {
	todos: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo !== action.payload),
			};
		default:
			return state;
	}
};

export default reducer;
