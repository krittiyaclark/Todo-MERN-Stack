import { useState, useEffect } from 'react'

import CreateTodo from './CreateTodo'
import TodoService from '../services/TodoService'
import TodoItem from './TodoItem'

const Todos = () => {
	const [clicked, setClicked] = useState(false)
	const [todo, setTodo] = useState({ todo: '' })
	const [todos, setTodos] = useState([])
	const [rawTodos, setRawTodos] = useState([])
	const [message, setMessage] = useState(null)

	useEffect(() => {
		console.log('First render')
		TodoService.getTodos().then((data) => {
			console.log('Sec render')
			// data comes from controller --> todos: todos,count: todosCount
			setRawTodos(data.todos)
			setTodos(
				data.todos.filter((todo) =>
					clicked ? todo.completed : !todo.completed
				)
			)
		})
	}, [])

	if (!todos) {
		return <p>Loading...</p>
	}

	console.log(todos)
	function handleTodoChange(todo) {
		setTodo(todo)
	}

	function handleTodoSubmit(todo) {
		console.log(todo)
		TodoService.createTodo(todo).then((data) => {
			console.log(data)
			if (!message.msgError) {
				setRawTodos(data.todos)
				const filteredTodos = data.item.filter((todo) => !todo.completed)
				setClicked(false)
				setTodos(filteredTodos)
				resetTodoForm()
			} else if (message.msgBody === 'Unauthorized') {
				setMessage(message)
			} else {
				setMessage(message)
			}
		})
	}

	function resetTodoForm() {
		setTodo({ todo: '' })
	}

	function handleRemoveTodo(todoID) {
		TodoService.removeTodo(todoID)
			.then((data) => console.log(data))
			.catch((err) => {
				console.log(err)
				setMessage(message)
			})

		TodoService.getTodos()
			.then((data) => {
				setRawTodos(data.todos)
				const filteredTodos = data.todos
					.filter((todo) => todo._id !== todoID)
					.filter((todo) => (clicked ? todo.completed : !todo.completed))
				setTodos(filteredTodos)
			})
			.catch((err) => {
				console.log(err)
				setMessage(message)
			})
	}

	function handleToggleComplete(todo) {
		TodoService.toggleComplete(todo._id)
			.then((data) => {
				console.log(data)
				TodoService.getTodos().then((data) => {
					setRawTodos(data.todos)
					const filteredTodos = data.todos
						.filter(
							(todo) =>
								project === 'all-projects' || todo.project._id === project
						)
						.filter((todo) => (clicked ? todo.completed : !todo.completed))
					setTodos(filteredTodos)
				})
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div>
			<CreateTodo
				todo={todos}
				onTodoChange={handleTodoChange}
				onTodoSubmit={handleTodoSubmit}
			/>
			{todos &&
				todos.map((todo) => {
					return (
						<TodoItem
							key={todo._id}
							todo={todo}
							onRemove={handleRemoveTodo}
							onToggleComplete={handleToggleComplete}
						/>
					)
				})}
		</div>
	)
}

export default Todos
