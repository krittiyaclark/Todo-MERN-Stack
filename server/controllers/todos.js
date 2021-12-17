const path = require('path')
const Todo = require('../models/Todo')

module.exports = {
	getTodos: async (req, res) => {
		try {
			let todos = await Todo.find()
			let todosCount = await Todo.countDocuments({ completed: false })
			res.json({
				todos: todos,
				count: todosCount,
			})
		} catch (err) {
			console.error('Not serving App.js')
		}
	},
	addTodo: async (req, res) => {
		console.log(`req.body: ${req.body.todo}`)
		try {
			await Todo.create({
				todo: req.body.todo,
				created: Date.now(),
				completed: false,
			})
		} catch (err) {
			res
				.status(500)
				.json({ message: { msgBody: 'Error has occured', msgError: true } })
		}
	},
	toggleComplete: async (req, res) => {
		console.log('blah ' + req.body.todoID)
		try {
			await Todo.findById(req.body.todoID, (err, todo) => {
				if (err)
					res
						.status(500)
						.json({ message: { msgBody: 'Error has occured', msgError: true } })
				else {
					res.status(200).json({
						message: { msgBody: 'Todo complete toggled!', msgError: false },
					})
					todo.completed = !todo.completed
					todo.save()
				}
			})
		} catch (err) {
			res
				.status(500)
				.json({ message: { msgBody: 'Error has occured', msgError: true } })
		}
	},
	removeTodo: async (req, res) => {
		console.log('controller removeTodo running...')
		try {
			await Todo.findOneAndDelete({ _id: req.body.todoID })

			todos.splice(todos.indexOf(req.body.todoID), 1)
			todos.save()

			console.log('Deleted Todo')
			res.json('Deleted Todo')
		} catch (err) {
			res
				.status(500)
				.json({ message: { msgBody: 'Error has occured', msgError: true } })
		}
	},
}
