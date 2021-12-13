import { useState, useContext, useEffect } from 'react'

import CreateTodo from './CreateTodo'

const Todos = () => {
	const [clicked, setClicked] = useState(false)
	const [todo, setTodo] = useState({ item: '' })
	const [todos, setTodos] = useState([])
	const [rawTodos, setRawTodos] = useState([])
	const [createProject, setCreateProject] = useState({ name: '' })

	function handleTodoChange(todo) {
		setTodo(todo)
	}

	function handleTodoSubmit(todo) {
		console.log(todo)
	}

	return (
		<div>
			<CreateTodo
				todo={todo}
				onTodoChange={handleTodoChange}
				onTodoSubmit={handleTodoSubmit}
			/>
		</div>
	)
}

export default Todos
