export default {
	getTodos: () => {
		return fetch('/todos').then((response) => {
			console.log(response)
			// Sends a 401 status if unathenticated
			if (response.status !== 401) {
				return response.json().then((data) => data)
			} else {
				return { message: { msgBody: 'Unauthorized', msgError: true } }
			}
		})
	},
	createTodo: (todo) => {
		console.log('todo service: ')
		console.log(todo)
		return fetch('/todos/addTodo', {
			method: 'POST',
			body: JSON.stringify({
				todo: todo.todo,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((response) => {
			if (response.status !== 401) {
				return response.json().then((data) => data)
			} else {
				return { message: { msgBody: 'Error has occured', msgError: true } }
			}
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
			if (response.status !== 401) {
				return response.json().then((data) => data)
			} else {
				return { message: { msgBody: 'Error has occured', msgError: true } }
			}
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
			if (response.status !== 401) {
				return response.json().then((data) => data)
			} else {
				return { message: { msgBody: 'Error has occured', msgError: true } }
			}
		})
	},
}
