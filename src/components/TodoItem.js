import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import TodoService from '../services/TodoService'

const TodoItem = ({ todo, onRemove, onToggleComplete }) => {
	const todoID = todo._id
	const navigate = useNavigate()

	const handleRemove = (e) => {
		TodoService.removeTodo(todoID).then((data) => console.log(data))
		navigate('/todos')

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
					<Button variant='danger' onClick={handleRemove}>
						Remove
					</Button>
				</li>
			</ul>
		</section>
	)
}

export default TodoItem
