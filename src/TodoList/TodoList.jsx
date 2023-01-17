import { useContext } from "react";
import { todoContext } from "./context";
import { REMOVE_TODO } from "./actions";

export default function TodoList() {
	const { state, dispatch } = useContext(todoContext);

	const removeTodoHandler = (e) => {
		e.preventDefault();
		dispatch({ type: REMOVE_TODO, payload: e.target.value });
	};

	return (
		<div>
			{state.todos.length > 0 &&
				state.todos.map((todo, id) => {
					return (
						<div key={id} className="todo">
							<input type="checkbox" name="" id="" />
							<p>{todo}</p>
							<button value={todo} onClick={removeTodoHandler}>
								remove
							</button>
						</div>
					);
				})}
		</div>
	);
}
