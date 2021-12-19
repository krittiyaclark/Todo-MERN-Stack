export default {
	getTodos: () => {
		return fetch('/todos').then((response) => {
			console.log(response)

			return response.json().then((data) => data)
		})
	},
	createTodo: (todo) => {
		console.log('todo service: ')
		console.log(todo)
		// todo comes from useState todo
		return fetch('/todos/addTodo', {
			method: 'POST',
			body: JSON.stringify({
				todo: todo.todo,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((response) => {
			response.json()
		})
	},
	toggleComplete: (todoID) => {
		console.log('todo service id:')
		console.log(todoID)
		return fetch('/todos/toggleComplete', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				todoID: todoID,
			}),
		}).then((response) => {
			// location.reload()
			response.json()
		})
	},
	removeTodo: (id) => {
		return fetch('/todos/removeTodo', {
			method: 'DELETE',
			body: JSON.stringify({
				todoID: id,
			}),
			headers: { 'Content-Type': 'application/json' },
		}).then((response) => {
			response.json()
		})
	},
}
