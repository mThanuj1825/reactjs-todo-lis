import PropTypes from "prop-types";

export function TodoCard(props) {
	const { todo, handleDeleteTodo, id, handleEditTodo } = props;
	
	return (
		<li className={ "todoItem" }>
			<p>{ todo }</p>
			<div className={ "actionsContainer" }>
				<button onClick={ () => {
					handleEditTodo(id);
				} }>
					<i className="fa-solid fa-pen-to-square"></i>
				</button>
				<button onClick={ () => {
					handleDeleteTodo(id);
				} }>
					<i className="fa-regular fa-trash-can"></i>
				</button>
			</div>
		</li>
	);
}

TodoCard.propTypes = {
	todo: PropTypes.string.isRequired,
	handleDeleteTodo: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	handleEditTodo: PropTypes.func.isRequired,
};