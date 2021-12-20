import { useState, useEffect } from 'react'

import CreateTodo from './CreateTodo'
import TodoService from '../services/TodoService'
import TodoItem from './TodoItem'

const Todos = () => {
	const [clicked, setClicked] = useState(false)
	const [todo, setTodo] = useState({ todo: '' })
	// Store TODOs. Get TODO from database
	const [todos, setTodos] = useState([])

	useEffect(() => {
		TodoService.getTodos().then((data) => {
			// Data comes from controller getTodos: -- >
			// todos: todos,
			// count: todosCount
			// TODO comes from controller addTodo: -->
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

	const handleTodoChange = (todo) => {
		setTodo(todo)
	}

	const handleTodoSubmit = () => {
		TodoService.createTodo(todo).then((data) => {
			resetTodoForm()
			// Get all updated TODO
			TodoService.getTodos().then((getData) => {
				setTodos(getData.todos)
			})
		})
	}

	const resetTodoForm = () => {
		setTodo({ todo: '' })
	}

	const handleRemoveTodo = (todoID) => {
		TodoService.removeTodo(todoID)
			.then((data) => console.log(data))
			.catch((err) => {
				console.log(err)
			})

		TodoService.getTodos()
			.then((data) => {
				const filteredTodos = data.todos.filter((todo) => todo._id !== todoID)
				setTodos(filteredTodos)
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
						<TodoItem key={todo._id} todo={todo} onRemove={handleRemoveTodo} />
					)
				})}
		</section>
	)
}

export default Todos
