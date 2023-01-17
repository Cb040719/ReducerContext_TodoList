import Todo from "./TodoList/Todo";
import TodoList from "./TodoList/TodoList";
import Provider from "./TodoList/context";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Provider>
				<Todo />
				<TodoList />
			</Provider>
		</div>
	);
}

export default App;
