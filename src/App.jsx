import { useEffect, useState } from "react";
import { TodoInput } from "./components/TodoInput.jsx";
import { TodoList } from "./components/TodoList.jsx";

export default function App() {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");
	
	function persistTodos(newList) {
		localStorage.setItem("todos", JSON.stringify({ todos: newList }));
	}
	
	function handleAddTodos(newTodo) {
		setTodos((currentState) => {
			const updatedTodos = [...currentState, newTodo];
			persistTodos(updatedTodos);
			return updatedTodos;
		});
	}
	
	function handleDeleteTodo(todoIndex) {
		setTodos((currentState) => {
			const updatedTodos = currentState.filter((todo, index) => index !== todoIndex);
			persistTodos(updatedTodos);
			return updatedTodos;
		});
	}
	
	function handleEditTodo(index) {
		const valueToBeEdited = todos[index];
		handleDeleteTodo(index);
		handleAddTodos(valueToBeEdited);
	}
	
	useEffect(() => {
		if (!localStorage) {
			return;
		}
		
		let localTodos = localStorage.getItem("todos");
		if (!localTodos) {
			return;
		}
		
		localTodos = JSON.parse(localTodos).todos;
		setTodos(localTodos);
	}, []);
	
	return (
		<>
			<TodoInput todo={ todo } setTodo={ setTodo } handleAddTodos={ handleAddTodos } />
			<TodoList handleEditTodo={ handleEditTodo } handleDeleteTodo={ handleDeleteTodo } todos={ todos } />
		</>
	);
}