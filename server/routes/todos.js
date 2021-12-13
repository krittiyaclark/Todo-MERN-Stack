const express = require('express')
const todosRouter = express.Router()
const todosController = require('../controllers/todos')

// todosRouter.get('/', (req,res) => res.json('getting root'))

todosRouter.get('/', todosController.getTodos)
todosRouter.post('/addTodo', todosController.addTodo)
todosRouter.put('/toggleComplete', todosController.toggleComplete)
todosRouter.delete('/removeTodo', todosController.removeTodo)
// todosRouter.delete('/removeTodo', () => console.log('durrrrrrr'))

module.exports = todosRouter
