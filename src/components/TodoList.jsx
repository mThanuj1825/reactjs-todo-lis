import PropTypes from "prop-types";
import { TodoCard } from "./TodoCard.jsx";

export function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {
	return (
		<ul className={ "main" }>
			{
				todos.map((todo, index) => {
					return (
						<TodoCard key={ index } todo={ todo } id={ index } handleDeleteTodo={ handleDeleteTodo }
						          handleEditTodo={ handleEditTodo } />
					);
				})
			}
		</ul>
	);
}

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	handleDeleteTodo: PropTypes.func.isRequired,
	handleEditTodo: PropTypes.func.isRequired,
};