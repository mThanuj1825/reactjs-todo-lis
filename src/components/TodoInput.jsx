import PropTypes from "prop-types";

export function TodoInput({ handleAddTodos, todo, setTodo }) {
	return (
		<header>
			<input value={ todo } onChange={ (e) => {
				setTodo(e.target.value);
			} } placeholder={ "Enter todo..." } />
			<button onClick={ () => {
				handleAddTodos(todo);
				setTodo("");
			} }>Add
			</button>
		</header>
	);
}

TodoInput.propTypes = {
	todo: PropTypes.string.isRequired,
	setTodo: PropTypes.func.isRequired,
	handleAddTodos: PropTypes.func.isRequired,
};