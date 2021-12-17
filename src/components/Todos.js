import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import CreateTodo from './CreateTodo'
import TodoService from '../services/TodoService'
import TodoItem from './TodoItem'

const Todos = () => {
	const [clicked, setClicked] = useState(false)
	const [todo, setTodo] = useState({ todo: '' })
	const [todos, setTodos] = useState([])
	const [message, setMessage] = useState(null)

	const navigate = useNavigate()

	useEffect(() => {
		console.log('First render')
		TodoService.getTodos().then((data) => {
			// data comes from controller getTodos: -- >
			// todos: todos,
			// count: todosCount
			console.log('Sec render')
			// todo comes from controller addTodo: -->
			// todo: req.body.todo,
			// created: Date.now(),
			// completed: false,
			setTodos(
				data.todos.filter((todo) =>
					clicked ? todo.completed : !todo.completed
				)
			)
		})
	}, [])

	if (!todo) {
		return <p>Loading...</p>
	}

	console.log(todos)
	function handleTodoChange(todo) {
		setTodo(todo)
	}

	function handleTodoSubmit(todo) {
		TodoService.createTodo(todo).then((data) => {
			const { message } = data

			console.log(`'message' ${message}`)
			if (!message.msgError) {
				const filteredTodos = data.todos.filter((todo) => !todo.completed)
				setClicked(false)
				setTodos(filteredTodos)
				resetTodoForm()
			} else {
				setMessage(message)
			}

			// navigate('/todos')
		})
	}

	function resetTodoForm() {
		setTodo({ todo: '' })
	}

	function handleRemoveTodo(todoID) {
		TodoService.removeTodo(todoID)
			.then((data) => console.log(data))
			.catch((err) => {
				// console.log(err)
				setMessage(message)
			})

		TodoService.getTodos()
			.then((data) => {
				const filteredTodos = data.todos
					.filter((todo) => todo._id !== todoID)
					.filter((todo) => (clicked ? todo.completed : !todo.completed))
				setTodos([...filteredTodos])
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
					const filteredTodos = data.todos.filter((todo) =>
						clicked ? todo.completed : !todo.completed
					)
					// setTodos(filteredTodos)
					setTodos([...filteredTodos])
				})
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<section className='mt-5'>
			<CreateTodo
				todo={todo}
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
		</section>
	)
}

export default Todos
