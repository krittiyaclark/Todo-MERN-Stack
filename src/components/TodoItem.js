import TodoService from '../services/TodoService'

const TodoItem = ({ todo, onRemove, onToggleComplete }) => {
	const handleRemove = (e) => {
		TodoService.removeTodo(todoID)
			.then((data) => console.log(data))
			.then((data) => {
				console.log(data.message)
				if (data.message.msgError) console.log('error will robinson!')
				history.push('/todos')
			})
		onRemove(todoID)
	}

	// Date Formatting
	let date = new Date(todo.created).toDateString()
	date = date.split('')
	date.splice(3, 0, ', ')
	date.splice(-5, 0, ', ')
	date = date.join('')

	return (
		<section>
			<ul>
				<li>
					<p>{todo.todo}</p>
					<p>{date}</p>
					<button onClick={handleRemove}>Remove</button>
				</li>
			</ul>
		</section>
	)
}

export default TodoItem
