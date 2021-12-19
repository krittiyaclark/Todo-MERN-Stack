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
			res.redirect('/todos')
		} catch (err) {
			console.log(err)
		}
	},
	toggleComplete: async (req, res) => {
		console.log('blah ' + req.body.todoID)
		try {
			const oldTodo = await Todo.findById(req.body.todoID)
			if (!oldTodo) {
				throw new Error('invalid id given or general error')
			}
			const result = await Todo.findOneAndUpdate(
				{ _id: req.body.todoID },
				{ completed: !oldTodo.completed },
				{ upsert: true }
			)
			res.sendStatus(200)
			console.log(result)
		} catch (err) {
			console.log(err)
			res.sendStatus(500)
		}
	},
	removeTodo: async (req, res) => {
		console.log('controller removeTodo running...')
		try {
			await Todo.findOneAndDelete({ _id: req.body.todoID })

			res.json('Deleted Todo')
			console.log('Deleted Todo')
		} catch (err) {
			console.log(err)
		}
	},
}
