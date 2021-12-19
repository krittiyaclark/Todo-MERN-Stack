import { useState } from 'react'

import TodoService from '../services/TodoService'

const TodoItem = ({ todo, onRemove }) => {
	const [toggle, setToggle] = useState(false)

	const todoID = todo._id

	const handleRemove = (e) => {
		e.preventDefault()

		onRemove(todoID)
	}

	const handleToggleComplete = () => {
		TodoService.toggleComplete(todoID).then((data) => console.log(data))
		setToggle(!toggle)
	}

	// Date Formatting
	let date = new Date(todo.created).toDateString()

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
