import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TodoService from '../services/TodoService'

const TodoItem = ({ todo, onRemove, onToggleComplete }) => {
	const [toggle, setToggle] = useState(false)

	const todoID = todo._id
	const navigate = useNavigate()

	const handleRemove = (e) => {
		e.preventDefault()

		TodoService.removeTodo(todoID).then((data) => console.log(data))
		navigate('/todos')

		onRemove(todoID)
	}

	const handleToggleComplete = () => {
		setToggle(!toggle)
	}
	// Date Formatting
	let date = new Date(todo.created).toDateString()
	date = date.split('')
	date.splice(3, 0, ', ')
	date.splice(-5, 0, ', ')
	date = date.join('')

	return (
		<section className='todo-list'>
			<ul>
				<li className='p-2'>
					<div className='d-flex flex-row justify-content-between align-items-baseline'>
						<p
							onClick={handleToggleComplete}
							className={toggle ? 'completed' : 'not'}>
							{todo.todo}
						</p>
						<i className='fa fa-trash ml-auto' onClick={handleRemove}></i>
					</div>
					<time>{date}</time>
				</li>
			</ul>
		</section>
	)
}

export default TodoItem
